import { useEffect, useState } from "react";
import {
    Chart as ChartJS,
    LinearScale,
    CategoryScale,
    Tooltip,
    Title,
    Legend,
    BarElement
  } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { CHART_COLORS } from "./ColorBank";
import { IAccountLine, aggregateByDate, aggregateByTags, filterLinesByTags } from "../Data/Bank";
import { Context } from "chartjs-plugin-datalabels";

export interface InputRangeProps {
    accountLines: IAccountLine[];
    tag: string;
}

export interface IChartDataset {
    label: string;
    yAxisID?: string;
    data: number[];
    backgroundColor: string;
}

export interface IChartData {
    labels: string[];
    datasets: IChartDataset[];
}

export interface IChartOption {
    responsive: boolean;
    maintainAspectRatio?: boolean;
    scales: any;
    animation: any;
    plugins: any;
}

ChartJS.register(
    LinearScale,
    CategoryScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export function TagHistoryChart({
    accountLines,
    tag,
    }: InputRangeProps): JSX.Element {

    const [chartOption, setChartOption] = useState<IChartOption>({responsive: true, animation: {}, scales: {}, plugins: {}});
    const [chartData, setChartData] = useState<IChartData>({labels: [], datasets: []});

    useEffect(() => {
        debugger;
        let datasets: IChartDataset[] = [];

        const splittedTags= tag === "" ? [] : tag.split(">");
        const selectedTag = tag === "" ? "" : splittedTags[splittedTags.length - 1];
        //const taggedLines = tag === "" ? accountLines : accountLines.filter((line) => line.tags.indexOf(tag) !== -1);
        const taggedLines = tag === "" ? accountLines : filterLinesByTags(accountLines, tag);

        const groupByTag = aggregateByTags(taggedLines, -1, selectedTag);
        const tags = Object.keys(groupByTag).sort();

        const groupByDate = aggregateByDate(taggedLines);
        const dateLabels =  Object.keys(groupByDate).sort((a, b) => {
            let dA = new Date(parseInt(a.split("/")[2]), parseInt(a.split("/")[1]) - 1, parseInt(a.split("/")[0]));
            let dB = new Date(parseInt(b.split("/")[2]), parseInt(b.split("/")[1]) - 1, parseInt(b.split("/")[0]));
            return dA > dB ? 1 : -1;
        });

        const processedTags: string[] = [];
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
            const groupSubTagByDate = aggregateByDate(subTaggedLines);

            let historyDebit = Object.keys(groupByDate).sort((a, b) => {
                let dA = new Date(parseInt(a.split("/")[2]), parseInt(a.split("/")[1]) - 1, parseInt(a.split("/")[0]));
                let dB = new Date(parseInt(b.split("/")[2]), parseInt(b.split("/")[1]) - 1, parseInt(b.split("/")[0]));
                return dA > dB ? 1 : -1;
            }).map((date) => groupSubTagByDate[date] ? groupSubTagByDate[date].debit - groupSubTagByDate[date].credit: 0);

            let datasetDebit: IChartDataset = {
                label: tags[i],
                yAxisID: 'y',
                data: historyDebit,
                backgroundColor: CHART_COLORS[i%CHART_COLORS.length]
            };
            datasets.push(datasetDebit);

            processedTags.push(tags[i]);
        }

        let dataToDisplay: IChartData = {
            labels: dateLabels,
            datasets: datasets
        };

        setChartData(dataToDisplay);

        let options: IChartOption = {
            responsive: true,
            maintainAspectRatio: false,
            animation: {
                duration: 0
            },
            scales: {
                x: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Date'
                    },
                    stacked: true
                },
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Amount'
                    },
                    stacked: true,
                    grace: '5%'
                }
            },
            plugins: {
                legend: {
                   position: 'bottom' as const,
                },
                title: {
                    display: true,
                    text: "Debit history of " + (selectedTag || "Tous"),
                    padding: {
                        top: 5,
                        bottom: 25
                    }
                },
                datalabels: {
                    borderRadius: 25,
                    borderWidth: 2,
                    color: 'black',
                    display: (context: Context): boolean => {
                        const val: number = context.dataset.data[context.dataIndex] as number;
                        return val !== 0;
                    },
                    formatter: (value: number, context: Context): string => {
                        return Math.round(value).toString();
                    },
                    font: {
                      weight: 'bold'
                    },
                    padding: 6,
                    textAlign: "center"
                }
            }
        }
        setChartOption(options);

   }, [accountLines, tag]);

    return (
        <div className="time-chart-wrapper">
            <Bar options={chartOption} data={chartData}/>
        </div>
   )
}