import "./Chart.scss"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    {
      name: 'February',
      total: 4000,
    },
    {
      name: 'March',
      total: 3000,
  
    },
    {
      name: 'April',
      total: 2000,
 
    },
    {
      name: 'May',
      total: 2780,
  
    },
    {
      name: 'June',
      total: 1890,
   
    },
    {
      name: 'July',
      total: 2390,
   
    },
    {
      name: 'August',
      total: 3490,
 
    },
  ];

function Chart({aspect,title}){
    return(
        <>
        <div className="chart">
            <div className="title">{title} </div>
      <ResponsiveContainer width = "100%" aspect={aspect}>

  
        <AreaChart width={730} height={250} data={data}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
    
  </defs>
  <XAxis dataKey="name" stroke="grey" />

  <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
  <Tooltip />
  <Area type="monotone" dataKey="total" stroke="#8884d8" fillOpacity={1} fill="url(#total)" />
  <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
</AreaChart>
    </ResponsiveContainer>
        </div>
      
        </>
    )
}

export default Chart
