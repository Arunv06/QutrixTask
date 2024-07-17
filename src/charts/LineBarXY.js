import React from 'react'
import { useLocation } from 'react-router-dom';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const LineBarXY = () => {
    const location = useLocation();
    const { xAxis, yAxis } = location.state || { xAxis: [], yAxis: [] };
  
    const data = xAxis.map((x, index) => ({
      x: x,
      y: yAxis[index]
    }));
    console.log(data);
  
    return (
      <div className="charts-container">
        <h1 className="title">Generated Charts</h1>
        <div className="chart-wrapper">
          <h2>Line Chart</h2>
          <ResponsiveContainer width="60%" height={400}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="x"  />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="y" stroke="#E9121F" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="chart-wrapper">
          <h2>Bar Chart</h2>
          <ResponsiveContainer width="60%" height={400}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="x" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="y" stroke="#E9121F" fill='#E9121F' />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  }
  

export default LineBarXY;