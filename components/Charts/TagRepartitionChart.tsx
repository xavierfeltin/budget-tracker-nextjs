import { useEffect, useState } from "react";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Title,
    Legend
  } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { Context } from 'chartjs-plugin-datalabels';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { PIE_BACKGROUND_COLORS, PIE_BORDER_COLORS } from "./ColorBank";
import { IAccountLine, aggregateByTags, filterLinesByTags } from "../Data/Bank";

export interface InputRangeProps {
    accountLines: IAccountLine[];
    tag: string;
}

export interface IChartDataset {
    data: number[];
    backgroundColor: string | string[];
    borderColor?: string | string[];
    datalabels?: any;
}

export interface IChartData {
    labels: string[];
    datasets: IChartDataset[];
}

export interface IChartOption {
    responsive: boolean;
    animation: any;
    plugins: any;
    layout: any;
}

ChartJS.register(
    ArcElement,
    Title,
    Tooltip,
    Legend,
    ChartDataLabels
);

export function TagRepartitionChart({
    accountLines,
    tag,
    }: InputRangeProps): JSX.Element {

    const [chartOption, setChartOption] = useState<IChartOption>({responsive: true, animation: {}, plugins: {}, layout: {}});
    const [chartData, setChartData] = useState<IChartData>({labels: [], datasets: []});

    useEffect(() => {
        const splittedTags= tag === "" ? [] : tag.split(">");
        const selectedTag = tag === "" ? "" : splittedTags[splittedTags.length - 1];
        //const taggedLines = tag === "" ? accountLines : accountLines.filter((line) => line.tags.indexOf(tag) !== -1);
        const taggedLines = tag === "" ? accountLines : filterLinesByTags(accountLines, tag);

        const groupByTag = aggregateByTags(taggedLines, -1, selectedTag);

        // Datasets to cover the sub tags
        const tags = Object.keys(groupByTag).filter((subTag) => groupByTag[subTag].debit !== 0).sort();
        const processedTags: string[] = [];
        const data: number[] = [];
        for (let i = 0; i < tags.length; i++) {
            let subTaggedLines: IAccountLine[] = [];
            if (tag === "") {
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
            const debits = subTaggedLines.map((line) => line.debit || 0);
            const tagData: number = debits.length > 0 ? debits.reduce((a, sum) => a + sum) : 0;
            data.push(tagData);
            processedTags.push(tags[i]);
        }

        let datasets: IChartDataset[] = [];
        let dataset: IChartDataset = {
            data: data,
            backgroundColor: PIE_BACKGROUND_COLORS,
            borderColor: PIE_BORDER_COLORS,
            datalabels: {
                anchor: 'end',
                align: 'bottom'
            }
        };
        datasets.push(dataset);


        let dataToDisplay: IChartData = {
            labels: tags,
            datasets: datasets
        };

        setChartData(dataToDisplay);

        let options: IChartOption = {
            responsive: true,
            animation: {
                duration: 0
            },
            layout: {
                padding: {
                    left: 40,
                    right: 40,
                    top: 40,
                    bottom: 40
                }
            },
            plugins: {
                legend: {
                   position: 'top' as const,
                   display: false
                },
                title: {
                    display: false,
                    text: "Repartition of " + (selectedTag || "Tous")
                },
                datalabels: {
                    borderRadius: 25,
                    borderWidth: 2,
                    color: 'black',
                    font: {
                      weight: 'bold'
                    },
                    padding: 6,
                    formatter: function(value: number, context: Context): string {
                        const currentLabel = context.chart.data.labels ? context.chart.data.labels[context.dataIndex] : "";
                        return currentLabel + "\n" + Math.round(value).toString();
                    },
                    textAlign: "center"
                }
            }
        }
        setChartOption(options);

   }, [accountLines, tag]);

    return (
        <div className="month-chart-wrapper">
            <Pie className="centered-canvas" options={chartOption} data={chartData}/>
        </div>
   )
}