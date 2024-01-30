import './TagByMonthChart.css';

import { useEffect, useState } from "react";
import { IAccountLine, aggregateByDate, aggregateByTags, filterLinesByTags } from "../Data/Bank";
import { TagMonthBarChart } from "./TagMonthBarChart";

export interface InputRangeProps {
    accountLines: IAccountLine[];
    tag: string;
}

interface IPeriodData {
    period: string;
    labels: string[];
    data: number[];
}

export function TagByMonthChart({
    accountLines,
    tag,
    }: InputRangeProps): JSX.Element {

    const [periodData, setPeriodData] = useState<IPeriodData[]>([]);

    useEffect(() => {
        const splittedTags= tag === "" ? [] : tag.split(">");
        const selectedTag = tag === "" ? "" : splittedTags[splittedTags.length - 1];
        //const taggedLines = tag === "" ? accountLines : accountLines.filter((line) => line.tags.indexOf(tag) !== -1);
        const taggedLines = tag === "" ? accountLines : filterLinesByTags(accountLines, tag);

        const groupByTag = aggregateByTags(taggedLines, -1, selectedTag);
        const tags = Object.keys(groupByTag).sort();

        const groupByDate = aggregateByDate(taggedLines, true);
        const dateLabels =  Object.keys(groupByDate).sort((a, b) => {
            let dA = new Date(2023, parseInt(a.split("/")[1]) - 1, parseInt(a.split("/")[0]));
            let dB = new Date(2023, parseInt(b.split("/")[1]) - 1, parseInt(b.split("/")[0]));
            return dA > dB ? 1 : -1;
        });

        // Datasets to cover the sub tags
        const processedTags: string[] = [];
        const dataByTag: {tag: string, data: number[]}[] = []
        for (let i = 0; i < tags.length; i++) {
            let subTaggedLines: IAccountLine[] = [];
            if (selectedTag === "") {
                // Search only the first level of tags
                subTaggedLines = taggedLines.filter((line) => line.tags.indexOf(tags[i]) === 0);
            }
            else {
                // Search any lines containing the tag but no other tags already processed
                subTaggedLines = taggedLines.filter((line) => {
                    const tagIdx = line.tags.indexOf(selectedTag);
                    if (tagIdx < (line.tags.length - 1)) {
                        //Tag is not the last tag of the line
                        return line.tags.indexOf(tags[i]) === (tagIdx + 1) //&& !line.tags.some(t => processedTags.includes(t)
                    }
                    else {
                        //Tag is the last tag of the line, check with the first tag for grouping
                        return line.tags.indexOf(tags[i]) === 0 //&& !line.tags.some(t => processedTags.includes(t)
                    }
                });
            }
            const groupSubTagByDate = aggregateByDate(subTaggedLines, true);

            let historyDebit = Object.keys(groupByDate).sort((a, b) => {
                let dA = new Date(2023, parseInt(a.split("/")[1]) - 1, parseInt(a.split("/")[0]));
                let dB = new Date(2023, parseInt(b.split("/")[1]) - 1, parseInt(b.split("/")[0]));
                return dA > dB ? 1 : -1;
            }).map((date) => groupSubTagByDate[date] ? groupSubTagByDate[date].debit : 0);

            dataByTag.push({
                tag: tags[i],
                data: historyDebit
            });

            processedTags.push(tags[i]);
        }

        const dataByPeriod: IPeriodData[] = [];
        for (let i = dateLabels.length - 1; i >= 0; i--) {
            dataByPeriod.push({
                period: dateLabels[i],
                data: dataByTag.filter((d) => d.data[i] > 0).map((d) => d.data[i]),
                labels: dataByTag.filter((d) => d.data[i] > 0).map((d) => d.tag)
            });
        }
        setPeriodData(dataByPeriod);

   }, [accountLines, tag]);

    return (
        <>
        {
            periodData.map((p, idx) => {
                return (
                    <TagMonthBarChart key={"tagmonthbarchart-" + idx} tag={tag ? tag.split(">")[tag.split(">").length -1] : "Tous"} period={p.period} labels={p.labels} data={p.data}/>
                )
            })
        }
        </>
   )
}