import { useCallback, useEffect, useState } from "react";
import { IBudgetLine, TBudget } from "../Data/Bank";

export interface InputRangeProps {
    files: File[];
    onValuesChange: (loadedData: TBudget) => void;
}

export function CSVBudgetExtractLoader({
    files,
    onValuesChange} : InputRangeProps) {

    const [data, setData] = useState<TBudget>({});

    const loadBudgets = useCallback((files: File[]) => {
        setData({});

        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const fileReader = new FileReader();
            fileReader.onload = function (event: ProgressEvent<FileReader>) {
                let content: string = "";
                if (event.target !== null) {
                    content = event.target.result as string || "";
                }
                csvFileToArray(file.name, content);
            };
            fileReader.readAsText(file);
        }
    }, []);

    const csvFileToArray = (filename: string, csv: string) => {
        const lineSeperator1 = "\r\n";
        const lineSeperator2 = "\n";
        const fieldSeparator = ";";
        const headers = ["Tag","Amount"];

        let lineSeperator = "";
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
        const lines: IBudgetLine[] = csvRows.map(row => {
            const values = row.split(fieldSeparator).map((field) => field.replace(/['"]+/g, ''));

            const dataRow: IBudgetLine = {
                tag: values[headersIdx[0]],
                amount: parseFloat(values[headersIdx[1]])
            };

            return dataRow;
        })

        const data: TBudget = {};
        for (let i = 0; i < lines.length; i++) {
            data[lines[i].tag] = lines[i].amount;
        }

        setData(data);
    };

    useEffect(() => {
        if (files.length > 0)
        {
            console.log("load csv files: " + files);
            loadBudgets(files);
        }
    }, [files, loadBudgets]);

    useEffect(() => {
        onValuesChange(data);
    }, [data, onValuesChange]);

    return (
        <></>
    )
}