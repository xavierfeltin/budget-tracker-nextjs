import { useEffect, useRef, useState } from "react";
import {
    Chart as ChartJS,
    LinearScale,
    PointElement,
    LineElement,
    CategoryScale,
    Tooltip,
    Title,
    Legend,
    Filler
  } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { CHART_COLORS } from "./ColorBank";
import { IAccountLine, getBoxPlotsFromLines } from "../Data/Bank";
import { UtilMath } from "../Data/UtilMath";

export interface InputRangeProps {
    accountLines: IAccountLine[];
    allAccountLines: IAccountLine[];
}

export interface IChartDataset {
    label: string;
    yAxisID?: string;
    data: any;//number[];
    pointRadius?: number;
    fill?: any;
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
    Filler,
    Title,
    Tooltip,
    Legend
);

export function QuartileHistoryChart({
    accountLines,
    allAccountLines
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

    // Fill space between two lines: https://stackoverflow.com/questions/37866992/filling-area-between-two-lines-chart-js-v2
    useEffect(() => {

        const dataLabels: Date[] = [];
        const history: number[] = [];

        if (accountLines.length === 1) {
            dataLabels.push(accountLines[0].date);
            history.push(accountLines[0].balance);
        }
        else if (accountLines.length > 1) {
            let currentDate = accountLines[0].date;

            for(let i = 1; i < accountLines.length; i++)
            {
                if (accountLines[i].date.getTime() !== currentDate.getTime()) {
                    dataLabels.push(currentDate);
                    history.push(accountLines[i-1].balance);
                    currentDate = accountLines[i].date;
                }
            }

            dataLabels.push(currentDate);
            history.push(accountLines[accountLines.length - 1].balance);
        }

        const date = accountLines[accountLines.length-1].date;
        const maxDaysOfMonth = new Date(date.getFullYear(), date.getMonth()+1, 0).getDate();

        const boxPlots = getBoxPlotsFromLines(allAccountLines);
        const boxPlotLabels: Date[] = [];
        for (let i = 0; i < boxPlots.length; i++) {
            const dayInMonth = Math.round(UtilMath.map(boxPlots[i].pctInMonth, 1, 100, 1, maxDaysOfMonth));
            const dateBoxPlot = new Date(date.getFullYear(), date.getMonth(), dayInMonth);
            boxPlotLabels.push(dateBoxPlot)
        }

        const allLabels: Date[] = [...boxPlotLabels];
        for (let i = 0; i < dataLabels.length; i++) {
            if (allLabels.map((d) => d.getTime()).indexOf(dataLabels[i].getTime()) === -1) {
                allLabels.push(dataLabels[i]);
            }
        }
        allLabels.sort((a, b) => a.getTime() - b.getTime());

        let datasets: IChartDataset[] = [];
        let dataset: IChartDataset = {
            label: "Balance",
            yAxisID: 'y',
            data: history.map((data, idx) => {return {x: dataLabels[idx].toLocaleDateString("fr-FR"), y: data}}),
            backgroundColor: CHART_COLORS[0],
            fill: false, //fill until previous dataset
            datalabels: {
                anchor: 'center',
                align: 'bottom'
            }
        };
        datasets.push(dataset);

        dataset = {
            label: "First Quartile",
            yAxisID: 'y',
            data: boxPlots.map((box, idx) => {return {x: boxPlotLabels[idx].toLocaleDateString("fr-FR"), y: box.firstQuartile}}),
            backgroundColor: 'rgb(239, 248, 255)',
            borderColor: 'rgb(239, 248, 255)',
            pointRadius: 0,
            fill: false, //fill until previous dataset
            datalabels: {
                anchor: 'center',
                align: 'bottom'
            }
        };
        datasets.push(dataset);

        dataset = {
            label: "Third Quartile",
            yAxisID: 'y',
            data: boxPlots.map((box, idx) => {return {x: boxPlotLabels[idx].toLocaleDateString("fr-FR"), y: box.thirdQuartile}}),
            backgroundColor: 'rgb(239, 248, 255)',
            borderColor: 'rgb(239, 248, 255)',
            pointRadius: 0,
            fill: {
                target: '-1', //fill until previous dataset
                above: 'rgb(239, 248, 255)',   // Area will be red above the origin
            },
            datalabels: {
                anchor: 'center',
                align: 'bottom'
            }
        };
        datasets.push(dataset);

        let dataToDisplay: IChartData = {
            labels: allLabels.map((date) => date.toLocaleDateString("fr-FR")),
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
                    text: "Comparison of the account's balance"
                },
                datalabels: {
                    display: false
                }
            }
        }
        setChartOption(options);

   }, [accountLines, allAccountLines]);

    return (
        <div className="time-chart-wrapper">
            <Line ref={chartReference} options={chartOption} data={chartData}/>
        </div>
   )
}