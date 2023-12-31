import { useEffect, useRef, useState } from "react";
import {
    Chart as ChartJS,
    LinearScale,
    PointElement,
    LineElement,
    CategoryScale,
    Tooltip,
    Title,
    Legend
  } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { CHART_COLORS } from "./ColorBank";
import { IAccountLine } from "../Data/Bank";

export interface InputRangeProps {
    accountLines: IAccountLine[];
}

export interface IChartDataset {
    label: string;
    yAxisID?: string;
    data: number[];
    pointRadius?: number;
    borderColor?: string;
    backgroundColor: string;
    datalabels: any;
}

export interface IChartData {
    labels: string[];
    datasets: IChartDataset[];
}

export interface IChartOption {
    responsive: boolean;
    maintainAspectRatio?: boolean;
    scales: any;
    animation?: any;
    animations?: any;
    plugins: any;
}

ChartJS.register(
    LinearScale,
    PointElement,
    LineElement,
    CategoryScale,
    Title,
    Tooltip,
    Legend
);

export function BalanceHistoryChart({
    accountLines
    }: InputRangeProps): JSX.Element {

    const [chartOption, setChartOption] = useState<IChartOption>({responsive: true, animation: {}, scales: {}, plugins: {}});
    const [chartData, setChartData] = useState<IChartData>({labels: [], datasets: []});

    const chartReference = useRef(null);

    useEffect(() => {
        if (chartReference) {
            const chart = chartReference.current as ChartJS|null;
            if (chart && chartData.datasets.length > 0) {
                const width = chart.ctx.canvas.parentElement?.style.width ? chart.ctx.canvas.width : 1370;
                chart.resize(width, chart.canvas.height);
                chart.update();
            }
        }
    },[chartReference, chartData]);


    useEffect(() => {

        const dateLabels: string[] = [];
        const history: number[] = [];

        if (accountLines.length === 1) {
            dateLabels.push(accountLines[0].date.toLocaleDateString("fr-FR"));
            history.push(accountLines[0].balance);
        }
        else if (accountLines.length > 1) {
            let currentDate = accountLines[0].date;

            for(let i = 1; i < accountLines.length; i++)
            {
                if (accountLines[i].date.getTime() !== currentDate.getTime()) {
                    dateLabels.push(currentDate.toLocaleDateString("fr-FR"));
                    history.push(accountLines[i-1].balance);
                    currentDate = accountLines[i].date;
                }
            }

            dateLabels.push(currentDate.toLocaleDateString("fr-FR"));
            history.push(accountLines[accountLines.length - 1].balance);
        }

        let datasets: IChartDataset[] = [];
        let dataset: IChartDataset = {
            label: "Balance",
            yAxisID: 'y',
            data: history,
            backgroundColor: CHART_COLORS[0],
            datalabels: {
                anchor: 'center',
                align: 'bottom'
            }
        };
        datasets.push(dataset);

        let dataToDisplay: IChartData = {
            labels: dateLabels,
            datasets: datasets,
        };

        setChartData(dataToDisplay);

        let options: IChartOption = {
            responsive: true,
            maintainAspectRatio: false,
            animations: false,
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
                    }
                }
            },
            plugins: {
                legend: {
                   position: 'top' as const,
                },
                title: {
                    display: true,
                    text: "Evolution of the account's balance"
                },
                datalabels: {
                    display: false
                }
            }
        }
        setChartOption(options);

   }, [accountLines]);

    return (
        <div className="time-chart-wrapper">
            <Line ref={chartReference} options={chartOption} data={chartData}/>
        </div>
   )
}