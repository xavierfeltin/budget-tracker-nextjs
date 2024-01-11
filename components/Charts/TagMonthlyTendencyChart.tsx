import { useEffect, useRef, useState } from "react";
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
import { Line } from 'react-chartjs-2';
import { CHART_COLORS } from "./ColorBank";
import { IAccountLine, aggregateByDate, aggregateByTags } from "../Data/Bank";
import { Context } from "chartjs-plugin-datalabels";

export interface InputRangeProps {
    accountLines: IAccountLine[];
    allowedAmount: number;
    tag: string;
}

export interface IChartDataset {
    label: string;
    yAxisID?: string;
    data: number[];
    pointRadius?: number;
    borderColor?: string;
    backgroundColor: string;
    datalabels?: any;
}

export interface IChartData {
    labels: string[];
    datasets: IChartDataset[];
}

export interface IChartOption {
    responsive: boolean;
    layout?: any;
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

export function TagMonthlyTendencyChart({
    accountLines,
    allowedAmount,
    tag,
    }: InputRangeProps): JSX.Element {

    const [chartOption, setChartOption] = useState<IChartOption>({responsive: true, animation: {}, scales: {}, plugins: {}});
    const [chartData, setChartData] = useState<IChartData>({labels: [], datasets: []});

    const chartReference = useRef(null);

    useEffect(() => {
        let datasets: IChartDataset[] = [];
        const taggedLines = tag === "" ? accountLines : accountLines.filter((line) => line.tags.indexOf(tag) !== -1);
        const groupByTag = aggregateByTags(taggedLines, -1, tag);
        const tags = Object.keys(groupByTag).sort();

        const groupByDate = aggregateByDate(taggedLines, true);
        const dateLabels =  Object.keys(groupByDate).sort((a, b) => {
            let dA = new Date(2023, parseInt(a.split("/")[1]) - 1, parseInt(a.split("/")[0]));
            let dB = new Date(2023, parseInt(b.split("/")[1]) - 1, parseInt(b.split("/")[0]));
            return dA > dB ? 1 : -1;
        });

        // Dataset to cover the tag
        let tagHistoryDebit = Object.keys(groupByDate).sort((a, b) => {
            let dA = new Date(2023, parseInt(a.split("/")[1]) - 1, parseInt(a.split("/")[0]));
            let dB = new Date(2023, parseInt(b.split("/")[1]) - 1, parseInt(b.split("/")[0]));
            return dA > dB ? 1 : -1;
        }).map((date) => groupByDate[date] ? groupByDate[date].debit : 0);

        let dataset: IChartDataset = {
            label: tag || "Tous",
            yAxisID: 'y',
            data: tagHistoryDebit,
            backgroundColor: CHART_COLORS[0]
        };
        datasets.push(dataset);

        if (allowedAmount > 0) {
            const budgetLimit: number[] = Array(dateLabels.length).fill(allowedAmount);
            dataset = {
                label: "Budget limit",
                yAxisID: 'y',
                data: budgetLimit,
                pointRadius: 0,
                borderColor: CHART_COLORS[1],
                backgroundColor: CHART_COLORS[1],
                datalabels: {
                    anchor: 'center',
                    align: 'bottom'
                }
            };
            datasets.push(dataset);
        }

        let dataToDisplay: IChartData = {
            labels: dateLabels,
            datasets: datasets
        };

        setChartData(dataToDisplay);

        let title = ["Debit monthly history of " + (tag || "Tous")];
        if (allowedAmount > 0) {
            title.push("Allowed budget " + allowedAmount.toFixed(2));
        }

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
                    offset: true
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
                   position: 'bottom' as const
                },
                title: {
                    display: true,
                    text: title,
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
                        return val > 0 && context.datasetIndex === 0;
                    },
                    formatter: (value: number, context: Context): string => {
                        return Math.round(value).toString();
                    },
                    font: {
                      weight: 'bold'
                    },
                    padding: 3,
                    textAlign: "center"
                }
            }
        }
        setChartOption(options);

   }, [accountLines, allowedAmount, tag]);

    return (
        <div className="time-chart-wrapper">
            <Line ref={chartReference} options={chartOption} data={chartData}/>
        </div>
   )
}