import "./Chart.scss"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    {
      name: 'Page A',
      total: 4000,
    },
    {
      name: 'Page B',
      total: 3000,
  
    },
    {
      name: 'Page C',
      total: 2000,
 
    },
    {
      name: 'Page D',
      total: 2780,
  
    },
    {
      name: 'Page E',
      total: 1890,
   
    },
    {
      name: 'Page F',
      total: 2390,
   
    },
    {
      name: 'Page G',
      total: 3490,
 
    },
  ];

function Chart(){
    return(
        <>
        <div className="chart">
            <div className="title">Last 6 Months (Revenue) </div>
    
        <AreaChart width={730} height={250} data={data}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis dataKey="name" />
  <YAxis />
  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip />
  <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
  <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
</AreaChart>

        </div>
      
        </>
    )
}

export default Chart
