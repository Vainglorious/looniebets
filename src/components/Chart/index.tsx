import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register required Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);


const chartData = {
    labels: ['October', 'November', 'December', 'January', 'February', 'March', 'April'],
    datasets: [
        {
            label: 'Peter Poilievre',
            data: [80, 65, 50, 37, 35, 15, 20],
            borderColor: 'rgba(75,192,192,1)',
            backgroundColor: 'rgba(75,192,192,0.2)',
            fill: true,
        },
        {
            label: 'Mark Carney',
            data: [20, 35, 50, 63, 65, 85, 80],
            borderColor: 'rgba(75,192,19,1)',
            backgroundColor: 'rgba(175,192,192,0.2)',
            fill: true,
        },
    ],
};

const chartOptions = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        tooltip: {
            mode: 'index' as const,
            intersect: false,
        },
    },
};


const LineChart = () => {
    return <Line data={chartData} options={chartOptions} className='w-full'/>;
};

export default LineChart;