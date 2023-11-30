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
import { IAccountLine, TBudget } from "../Data/Bank";

export interface InputRangeProps {
    accountLines: IAccountLine[];
    tag: string;
    allowedAmount: number;
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

export function TagBudgetConsumptionChart({
    accountLines,
    allowedAmount,
    tag
    }: InputRangeProps): JSX.Element {

    const [chartOption, setChartOption] = useState<IChartOption>({responsive: true, animation: {}, scales: {}, plugins: {}});
    const [chartData, setChartData] = useState<IChartData>({labels: [], datasets: []});

    const chartReference = useRef(null);

    useEffect(() => {

        const dateLabels: string[] = [];
        const budgetConsumption: number[] = [];
        let consumed = 0;

        if (accountLines.length === 1) {
            dateLabels.push(accountLines[0].date.toLocaleDateString("fr-FR"));
            consumed = accountLines[0].debit || 0;
            budgetConsumption.push(consumed);
        }
        else if (accountLines.length > 1) {
            let currentDate = accountLines[0].date;
            let currentConsumption = accountLines[0].debit || 0;

            for(let i = 1; i < accountLines.length; i++)
            {
                if (accountLines[i].date.getTime() !== currentDate.getTime()) {
                    dateLabels.push(currentDate.toLocaleDateString("fr-FR"));
                    consumed += currentConsumption;
                    budgetConsumption.push(consumed);

                    currentConsumption = accountLines[i].debit || 0;
                    currentDate = accountLines[i].date;
                }
                else {
                    currentConsumption += accountLines[i].debit || 0;
                }
            }

            // Push last date
            dateLabels.push(currentDate.toLocaleDateString("fr-FR"));
            consumed += currentConsumption;
            budgetConsumption.push(consumed);
        }

        let datasets: IChartDataset[] = [];
        let dataset: IChartDataset = {
            label: "Evolution",
            yAxisID: 'y',
            data: budgetConsumption,
            backgroundColor: CHART_COLORS[0],
            datalabels: {
                anchor: 'center',
                align: 'bottom'
            }
        };
        datasets.push(dataset);

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
                    },
                    grace: '5%'
                }
            },
            plugins: {
                legend: {
                   position: 'top' as const,
                },
                title: {
                    display: true,
                    text: ["Budget consumption for " + tag, budgetConsumption[budgetConsumption.length-1].toFixed(2) + " / " + allowedAmount.toFixed(2)],
                    color: budgetConsumption[budgetConsumption.length-1] <= allowedAmount ? "#039487" : "#cc0000"
                },
                datalabels: {
                    display: false
                }
            }
        }
        setChartOption(options);

   }, [accountLines, allowedAmount, tag]);

    return (
        <div className="month-chart-wrapper">
            <Line ref={chartReference} options={chartOption} data={chartData}/>
        </div>
   )
}