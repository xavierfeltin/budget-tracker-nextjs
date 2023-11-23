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
import { Context } from "chartjs-plugin-datalabels";

export interface InputRangeProps {
    tag: string;
    period: string;
    labels: string[];
    data: number[];
}

export interface IChartDataset {
    label: string;
    yAxisID?: string;
    data: number[];
    backgroundColor: string[];
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

export function TagMonthBarChart({
    tag,
    period,
    labels,
    data
    }: InputRangeProps): JSX.Element {

    const [chartOption, setChartOption] = useState<IChartOption>({responsive: true, animation: {}, scales: {}, plugins: {}});
    const [chartData, setChartData] = useState<IChartData>({labels: [], datasets: []});

    useEffect(() => {
        const sortedIdx = data.map((d: number, idx: number) => {return {id: idx, data: d}}).sort((a, b) => b.data - a.data).map((t) => t.id);

        const sortedLabels: string[] = [];
        const sortedData: number[] = [];
        const colors: string[] = [];
        for (let i = 0; i < sortedIdx.length; i++) {
            const idx = sortedIdx[i];
            sortedLabels.push(labels[idx]);
            sortedData.push(data[idx]);
            colors.push(CHART_COLORS[(i+1)%CHART_COLORS.length])
        }

        const dataset: IChartDataset = {
            label: tag + " for " + period,
            yAxisID: 'y',
            data: sortedData,
            backgroundColor: colors
        };

        let dataToDisplay: IChartData = {
            labels: sortedLabels,
            datasets: [dataset]
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
                        display: false
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
                   position: 'top' as const,
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

   }, [tag, period, data, labels]);

    return (
        <div className="month-chart-wrapper">
            <Bar options={chartOption} data={chartData}/>
        </div>
   )
}