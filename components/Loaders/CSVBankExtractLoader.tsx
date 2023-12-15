import { useEffect, useState } from "react";
import { IAccountLine, IAccountPeriod } from "../Data/Bank";
import { UtilMath } from "../Data/UtilMath";

export interface InputRangeProps {
    files: File[];
    idExtract:string;
    onValuesChange: (loadedData: IAccountPeriod[]) => void;
}

const csvFileToArray = (filename: string, csv: string) => {
    const lineSeperator1 = "\r\n";
    const lineSeperator2 = "\n";
    let lineSeperator = lineSeperator1;
    const fieldSeparator = ";";
    const headers = ["Date","Débit","Crédit","Libellé","Solde","Tags"];
    let rows = csv.split(lineSeperator1);
    if (rows.length === 1) {
        rows = csv.split(lineSeperator2);
        lineSeperator = lineSeperator2;
    }

    // Determine headers order
    let re = /"/gi;
    let csvHeader = rows[0].split(fieldSeparator).map((header) => header.toLowerCase().replace(re, ""));
    const headersIdx = headers.map((header) => csvHeader.indexOf(header.toLowerCase()));

    // Ignore first header
    let csvRows = rows[1].split(lineSeperator).filter((row: string) => row !== "");

    // Ignore first header
    csvRows = rows.slice(1).filter((row: string) => row !== "");
    const lines: IAccountLine[] = csvRows.map(row => {
        const values = row.split(fieldSeparator).map((field) => field.replace(/['"]+/g, ''));

        // Expecting dd/mm/yyyy
        const dateElements: number[] = values[headersIdx[0]].split("/").map((elem) => Number.parseFloat(elem));

        const date = new Date(dateElements[2], dateElements[1] - 1, dateElements[0]);
        const maxDaysOfMonth = new Date(dateElements[2], dateElements[1], 0).getDate();
        const pctInMonth = Math.round(UtilMath.map(dateElements[0], 1, maxDaysOfMonth, 1, 100));

        const dataRow: IAccountLine = {
          date: date,
          pctInMonth: pctInMonth,
          debit: values[headersIdx[1]] ? Number.parseFloat(values[headersIdx[1]].replace(',', '.')) * -1 : undefined, // only positive values
          credit: values[headersIdx[2]] ? Number.parseFloat(values[headersIdx[2]].replace(',', '.')) : undefined,
          label: values[headersIdx[3]],
          balance: Number.parseFloat(values[headersIdx[4]].replace(',', '.')),
          tags: values[headersIdx[5]] === "" ? [] : values[headersIdx[5]].split(">"),
        };

        return dataRow;
    })

    const data: IAccountPeriod = {
        begin: new Date(lines[0].date.getFullYear(), lines[0].date.getMonth(), 1),
        end: new Date(lines[0].date.getFullYear(), lines[0].date.getMonth() + 1, 0),
        lines: lines.sort((a, b) => a.date.getTime() - b.date.getTime()),
        isAggregated: false
    };
    return data;
}

export function CSVBankExtractLoader({
    files,
    onValuesChange} : InputRangeProps) {

    const [data, setData] = useState<IAccountPeriod[]>([]);

    useEffect(() => {
        if (files.length > 0)
        {
            setData([]);

            for (let i = 0; i < files.length; i++) {
                const file = files[i];
                const fileReader = new FileReader();
                fileReader.onload = function (event: ProgressEvent<FileReader>) {
                    let content: string = "";
                    if (event.target !== null) {
                        content = event.target.result as string || "";
                    }
                    const data = csvFileToArray(file.name, content);
                    setData(prev => {
                        if (prev.findIndex((val) => val.begin.toLocaleDateString() === data.begin.toLocaleDateString() && val.end.toLocaleDateString() === data.end.toLocaleDateString()) === -1)
                        {
                            return [...prev, data].sort((a, b) => a.end.getTime() - b.end.getTime())
                        }
                        else {
                            return [...prev];
                        }
                    });
                };
                fileReader.readAsText(file);
            }
        }
    }, [files]);

    useEffect(() => {
        onValuesChange(data);
    }, [data, onValuesChange])

    return(
        <></>
    )
}