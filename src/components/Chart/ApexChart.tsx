import React from 'react';
import ReactApexChart from 'react-apexcharts';
import ApexCharts, { ApexOptions } from 'apexcharts';

// Define the type for the chart series
interface ChartData {
    name: string;
    data: [number, number][];
}

const ApexChart = () => {
    const dates: [number, number][] = [
        [new Date('2022-01-01').getTime(), 120],
        [new Date('2022-01-02').getTime(), 135],
        [new Date('2022-01-03').getTime(), 145],
    ];

    const [state, setState] = React.useState<{
        series: ChartData[];
        options: ApexOptions;
    }>({
        series: [{
            name: 'XYZ MOTORS',
            data: dates,
        }],
        options: {
            chart: {
                type: 'area', // ApexCharts expects a specific string here
                stacked: false,
                height: 350,
                zoom: {
                    type: 'x',
                    enabled: true,
                    autoScaleYaxis: true,
                },
                toolbar: {
                    autoSelected: 'zoom',
                },
            },
            dataLabels: {
                enabled: false,
            },
            markers: {
                size: 0,
            },
            title: {
                text: 'Stock Price Movement',
                align: 'left',
            },
            fill: {
                type: 'gradient',
                gradient: {
                    shadeIntensity: 1,
                    inverseColors: false,
                    opacityFrom: 0.5,
                    opacityTo: 0,
                    stops: [0, 90, 100],
                },
            },
            yaxis: {
                labels: {
                    formatter: function (val: number) {
                        return (val / 1000000).toFixed(0);
                    },
                },
                title: {
                    text: 'Price',
                },
            },
            xaxis: {
                type: 'datetime',
            },
            tooltip: {
                shared: false,
                y: {
                    formatter: function (val: number) {
                        return (val / 1000000).toFixed(0);
                    },
                },
            },
        },
    });

    return (
        <div>
            <div id="chart">
                <ReactApexChart
                    options={state.options}
                    series={state.series}
                    type="area"
                    height={350}
                />
            </div>
        </div>
    );
};

export default ApexChart;
