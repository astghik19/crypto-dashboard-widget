import {memo, useMemo} from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  ChartData,
} from 'chart.js';
import {Line} from 'react-chartjs-2';
import {getRandomColor, getTime} from "../../utility/helpers.ts";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

const AppChart = ({data}: { data: { date: Date, price: number }[] }) => {

  const chartColor = useMemo(() => getRandomColor(), [])

  const lineData: ChartData<'line'> = useMemo(() => ({
    labels: data.map(({date}) => getTime(date)),
    datasets: [
      {
        data: data.map(({price}) => price),
        borderColor: chartColor,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  }), [data]);

  return <Line options={options} data={lineData} />;
}

export default memo(AppChart)
