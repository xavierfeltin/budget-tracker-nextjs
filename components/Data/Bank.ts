import { start } from "repl";

export interface IAccountLine {
    date: Date;
    pctInMonth: number; // map 1-28/29/30/31 month to 1-100%
    debit: number | undefined;
    credit: number | undefined;
    label: string;
    balance: number;
    tags: string[];
}

export interface IAccountLines {
    lines: IAccountLine[];
}

export interface IAccountPeriod {
    begin: Date;
    end: Date;
    lines: IAccountLine[];
    isAggregated: boolean;
}

export type TMapping = {[match: string]: string}
export interface IMappingLine {
    match: string;
    tags: string;
}
export type TagLine = {[id: string]: {credit: number, debit: number, subTags: TagLine}; }

export interface ITag {
    tag: string;
    count: number;
    frequency: number;
}

export type TBudget = {[tag: string]: number}
export interface ITagBudget {
    tag: string;
    allowed: number;
    consumed: number;
    lines: IAccountLine[];
}

export interface IBudgetLine {
    tag: string;
    amount: number;
}

export enum EDocumentType {
    ACCOUNT = "ACCOUNT",
    MAPPING = "MAPPING",
    BUDGET  = "BUDGET",
}

export function aggregateByTags(lines: IAccountLine[], tagLevel: number, excludeTag: string): TagLine {
    let agregate: TagLine = {};
    let isRecursive = tagLevel < 0;

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];

        let idx = excludeTag === "" ? 0 : line.tags.indexOf(excludeTag);
        let level = isRecursive ? (idx % line.tags.length) : tagLevel;
        let tag = line.tags[level];

        if (tag === excludeTag && level < (line.tags.length - 1)) {
            tag = line.tags[level + 1];
        }
        else if (tag === excludeTag && level === (line.tags.length - 1)) {
            tag = isRecursive ? line.tags[0] : "Undefined";
        }

        if (tag in agregate) {
            agregate[tag].credit += line.credit ?? 0;
            agregate[tag].debit += line.debit ?? 0;
        }
        else {
            agregate[tag] = {
                credit: line.credit ?? 0,
                debit: line.debit ?? 0,
                subTags: {}
            }
        }
    }

    return agregate;
}

export function extractTags(lines: IAccountLine[]): string[] {
    let tags: string[] = [];
    for (let i = 0; i < lines.length; i++) {
        tags.push(...lines[i].tags);
    }

    // Remove duplicates
    tags = tags.filter(function(tag, idx) {
        return tags.indexOf(tag) === idx;
    });

    return tags.sort();
}

export function extractTagsWithCount(lines: IAccountLine[], startingTag: string | undefined): ITag[] {
    let tags: ITag[] = [];

    debugger;
    for (let i = 0; i < lines.length; i++) {
        let startIdx = 0;
        let endIdx = lines[i].tags.length;

        if (startingTag) {
            // Consider only the next after the startingTag
            const idx = lines[i].tags.findIndex((tag) => tag === startingTag);
            if (idx === (lines[i].tags.length - 1)) {
                //Ignore
                continue;
                // If startingTag is the last one in the tag list, consider the first tag of the list instead
                //startIdx = 0;
                //endIdx = 1;
            }

            startIdx = idx + 1;
            endIdx = idx + 2;
            console.log("starting tag idx " + startIdx);
        }

        for (let j = startIdx; j < endIdx; j++) {

            if(lines[i].tags[j] === startingTag) {
                debugger;
            }

            const tagIdx = tags.findIndex((tag) => tag.tag === lines[i].tags[j]);
            if (tagIdx === -1) {
                tags.push({tag: lines[i].tags[j], count: 1, frequency: 1/lines.length});
            }
            else {
                tags[tagIdx].count++;
                tags[tagIdx].frequency = tags[tagIdx].count/lines.length;
            }
        }
    }

    return tags.sort((a, b) => {
        const freqA = Math.floor(a.frequency * 100);
        const freqB = Math.floor(b.frequency * 100);
        if (freqA === freqB) {
            return a.tag > b.tag ? 1 : -1;
        }
        return (Math.floor(b.frequency * 100) - Math.floor(a.frequency * 100));
    });
}

export function aggregateByTag(lines: IAccountLine[], tag: string): TagLine {
    let agregate: TagLine = {};
    const taggedLines = tag === "" ? lines : lines.filter((line) => line.tags.indexOf(tag) !== -1);

    for (let i = 0; i < taggedLines.length; i++) {
        const line = taggedLines[i];
        if (tag in agregate) {
            agregate[tag].credit += line.credit ?? 0;
            agregate[tag].debit += line.debit ?? 0;
        }
        else {
            agregate[tag] = {
                credit: line.credit ?? 0,
                debit: line.debit ?? 0,
                subTags: {}
            }
        }
    }
    agregate[tag].subTags = aggregateByTags(taggedLines, 0, tag);
    return agregate;
}

export function aggregateByDate(lines: IAccountLine[], monthly: boolean = false): TagLine {
    let agregate: TagLine = {};

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        let strDate = line.date.toLocaleDateString("fr-FR");
        if (monthly) {
            strDate = strDate.slice(strDate.indexOf("/")+1)
        }

        if (strDate in agregate) {
            agregate[strDate].credit += line.credit ?? 0;
            agregate[strDate].debit += line.debit ?? 0;
        }
        else {
            agregate[strDate] = {
                credit: line.credit ?? 0,
                debit: line.debit ?? 0,
                subTags: {}
            }
        }
    }
    return agregate;
}

export function getAccountPeriodStr(account: IAccountPeriod): string {
    let aggregatedMention = account.isAggregated ? " (Aggregated) " : "";
    return account.begin.toLocaleDateString() + " - " + account.end.toLocaleDateString() + aggregatedMention;
}

export function getWholePeriod(accounts: IAccountPeriod[]): IAccountPeriod {
    const wholePeriod: IAccountPeriod = accounts.reduce((result, period) => {
        return {...result,
            begin: period.begin < result.begin ? period.begin : result.begin,
            end: period.begin > result.begin ? period.begin : result.begin,
            lines: [...result.lines, ...period.lines],
            isAggregated: true}
      });

      wholePeriod.lines.sort((a: IAccountLine, b: IAccountLine) => {return a.date > b.date ? 1 : -1;});
    return wholePeriod;
}

export function isPaymentLabel(label: string): boolean {
    const regExp = new RegExp(/(PAIEMENT\s)/);
    const test = regExp.test(label.toUpperCase());
    return test;
}

export function isDirectDebitLabel(label: string): boolean {
    const regExp = new RegExp(/(PRLV\sSEPA\s)/);
    const test = regExp.test(label.toUpperCase());
    return test;
}

export function isBankTransferLabel(label: string): boolean {
    const regExp = new RegExp(/(VIR\s)/);
    const test = regExp.test(label.toUpperCase());
    return test;
}

export function isWithdrawalLabel(label: string): boolean {
    const regExp = new RegExp(/(RETRAIT\sDAB\s)/);
    const test = regExp.test(label.toUpperCase());
    return test;
}

export function getPaymentId(label: string): string {
    //PAIEMENT CB 3007 FR LYON LA-BARGE CARTE 2178
    const matches = label.toUpperCase().match(/(?:PAIEMENT\s(?:CB|PSC)\s\d\d\d\d\s)(([a-zA-Z]|-|_|\d+|\/|\*|\s)+)(?:CARTE\s\d\d\d\d)/);
    return matches ? matches[1] : "";
}

export function getDirectDebitId(label: string): string {
    const matches = label.toUpperCase().match(/(?:PRLV\sSEPA\s)(([a-zA-Z]|-|_|\s)+)/);
    return matches ? matches[1] : "";
}

export function getBankTransferId(label: string): string {
    const matches = label.toUpperCase().match(/(?:VIR\s)(([a-zA-Z]|-|_|\s)+)/);
    return matches ? matches[1] : "";
}

export function getWithdrawalId(label: string): string {
    const matches = label.toUpperCase().match(/RETRAIT DAB/);
    return matches ? matches[0] : "";
}

export function extractIdFromLabel(label: string): string {
    if (isBankTransferLabel(label)) {
        return getBankTransferId(label).trim();
    }

    if (isPaymentLabel(label)) {
        return getPaymentId(label).trim();
    }

    if (isDirectDebitLabel(label)) {
        return getDirectDebitId(label).trim();
    }

    if (isWithdrawalLabel(label)) {
        return getWithdrawalId(label).trim();
    }

    return label.trim();
}

export function tagPeriods(periods: IAccountPeriod[], mapping: TMapping): IAccountPeriod[] {
    const taggedPeriods = [...periods];
    for (let i = 0; i < taggedPeriods.length; i++) {
        const period = taggedPeriods[i];
        for (let j = 0; j < period.lines.length; j++) {
            const line = period.lines[j];
            const id = extractIdFromLabel(line.label);
            if (mapping[id]) {
                line.tags = mapping[id].split('>');
            }
        }
    }
    return taggedPeriods;
}

export interface IBoxPlot {
    pctInMonth: number;
    minimum: number;
    firstQuartile: number;
    mean: number;
    mediane: number;
    thirdQuartile: number;
    maximum: number
}

export function getBoxPlotsFromLines(allAccountLines: IAccountLine[]): IBoxPlot[] {
    const step = 10;
    const boxPlotByStep: IBoxPlot[] = [];

    let values = allAccountLines.filter((line) => line.pctInMonth < 5).map((line) => line.balance).sort((a,b) => a-b);
    let boxPlot = extractBoxPlotFromData(values);
    boxPlot.pctInMonth = 1;
    boxPlotByStep.push(boxPlot);

    for (let i = 5; i <= 95; i+=step) {
        let values = allAccountLines.filter((line) => line.pctInMonth >= (i-5) && line.pctInMonth < (i+5)).map((line) => line.balance).sort((a,b) => a-b);
        const boxPlot = extractBoxPlotFromData(values);
        boxPlot.pctInMonth = i;
        boxPlotByStep.push(boxPlot);
    }

    values = allAccountLines.filter((line) => line.pctInMonth >= 95).map((line) => line.balance).sort((a,b) => a-b);
    boxPlot = extractBoxPlotFromData(values);
    boxPlot.pctInMonth = 100;
    boxPlotByStep.push(boxPlot);

    return boxPlotByStep;
}

export function extractBoxPlotFromData(data: number[]): IBoxPlot {

    if (data.length === 0) {
        return {
            pctInMonth: NaN,
            firstQuartile: NaN,
            thirdQuartile: NaN,
            mediane: NaN,
            mean: NaN,
            minimum: NaN,
            maximum: NaN
        };
    }

    const firstQuartileIdx = Math.max(0, ((data.length + 3) / 4) -1);
    const thirdQuartileIdx = Math.max(0, ((3 * data.length + 1) / 4) -1);

    let mediane: number;
    if (data.length % 2 === 0 && data.length > 2) {
        const lowerIdx = ((data.length) / 2) - 2;
        const upperIdx = ((data.length) / 2) - 1;
        mediane = (data[lowerIdx] + data[upperIdx]) / 2;
    }
    else {
       const idx = Math.max(0, ((data.length + 1) / 2) -1);
       mediane = data[idx];
    }

    let mean: number = 0;
    mean = data.reduce((a, b) => a +b);
    mean = mean / data.length;

    return {
        pctInMonth: NaN,
        firstQuartile: computeQuartileValue(firstQuartileIdx, data),
        thirdQuartile: computeQuartileValue(thirdQuartileIdx, data),
        mediane: mediane,
        mean: mean,
        minimum: data[0],
        maximum: data[data.length - 1]
    };
}

export function computeQuartileValue(quartileIdx: number, data: number[]): number {
    if (Number.isInteger(quartileIdx)) {
        return data[quartileIdx];
    }

    const lowerIdx = Math.ceil(quartileIdx);
    const upperIdx = Math.floor(quartileIdx);

    let coeff1 = 1;
    let coeff2 = 1;

    if (quartileIdx - lowerIdx === 0.25) {
        coeff1 = 3;
    }
    else if (quartileIdx - lowerIdx === 0.75) {
        coeff2 = 3;
    }
    // else {  (quartileIdx - lowerIdx === 0.5) {
        //coeff1 = 1, coeff2 = 1

    return  (data[lowerIdx] * coeff1 + data[upperIdx] * coeff2) / (coeff1 + coeff2);
}