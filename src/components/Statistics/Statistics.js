import { useLoaderData } from 'react-router-dom';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';

function Statistics() {
  const { data } = useLoaderData();
  return (
    <div className='container min-h-screen pt-40 flex justify-center'>
      <LineChart
        width={600}
        height={300}
        data={data}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <Line type='monotone' dataKey='total' stroke='#8884d8' />
        <CartesianGrid stroke='#ccc' strokeDasharray='5 5' />
        <XAxis dataKey='name' />
        <YAxis />
        <Tooltip />
      </LineChart>
    </div>
  );
}

export default Statistics;
