import { useEffect, useState } from "react";
import {
    Chart as ChartJS,
    LinearScale,
    CategoryScale,
    Tooltip,
    Title,
    Legend,
    LineElement,
    PointElement,
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
    datalabels?: any;
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
    PointElement,
    LineElement,
    CategoryScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export function TagHistoryMonthlyChart({
    accountLines,
    tag,
    }: InputRangeProps): JSX.Element {

    const [chartOption, setChartOption] = useState<IChartOption>({responsive: true, animation: {}, scales: {}, plugins: {}});
    const [chartData, setChartData] = useState<IChartData>({labels: [], datasets: []});

    useEffect(() => {
        let datasets: IChartDataset[] = [];
        //const taggedLines = tag === "" ? accountLines : accountLines.filter((line) => line.tags.indexOf(tag) !== -1);
        const taggedLines = tag === "" ? accountLines : filterLinesByTags(accountLines, tag);

        const groupByTag = aggregateByTags(taggedLines, -1, tag);
        const tags = Object.keys(groupByTag).sort();

        const groupByDate = aggregateByDate(taggedLines, true);
        const dateLabels =  Object.keys(groupByDate).sort((a, b) => {
            let dA = new Date(2023, parseInt(a.split("/")[1]) - 1, parseInt(a.split("/")[0]));
            let dB = new Date(2023, parseInt(b.split("/")[1]) - 1, parseInt(b.split("/")[0]));
            return dA > dB ? 1 : -1;
        });

        // Datasets to cover the sub tags
        const processedTags: string[] = [];
        for (let i = 0; i < tags.length; i++) {
            const subTaggedLines = taggedLines.filter((line) => line.tags.indexOf(tags[i]) !== -1 && !line.tags.some(t => processedTags.includes(t)));
            const groupSubTagByDate = aggregateByDate(subTaggedLines, true);

            let historyDebit = Object.keys(groupByDate).sort((a, b) => {
                let dA = new Date(2023, parseInt(a.split("/")[1]) - 1, parseInt(a.split("/")[0]));
                let dB = new Date(2023, parseInt(b.split("/")[1]) - 1, parseInt(b.split("/")[0]));
                return dA > dB ? 1 : -1;
            }).map((date) => groupSubTagByDate[date] ? groupSubTagByDate[date].debit : 0);

            let dataset: IChartDataset = {
                label: tags[i],
                yAxisID: 'y',
                data: historyDebit,
                backgroundColor: CHART_COLORS[(i+1)%CHART_COLORS.length]
            };
            datasets.push(dataset);
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
                    }
                },
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Amount'
                    },
                    grace: '5%'
                }
            },
            plugins: {
                legend: {
                   position: 'bottom' as const,
                },
                title: {
                    display: true,
                    text: "Debit monthly history of " + (tag || "Tous"),
                    padding: {
                        top: 5,
                        bottom: 25
                    }
                },
                datalabels: {
                    align: 'end',
                    anchor: 'end',
                    color: 'black',
                    display: (context: Context): boolean => {
                        const val: number = context.dataset.data[context.dataIndex] as number;
                        return val > 0;
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