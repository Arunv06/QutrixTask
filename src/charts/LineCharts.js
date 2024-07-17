import React from 'react'
import { useLocation } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const LineCharts = () => {
  const location = useLocation();
  const data = location.state?.data || [];

  return (
    <div>
      <h1>Generated Chart</h1>
      <ResponsiveContainer width="80%" height={400}>
      <LineChart
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="student" stroke="#E9121F" name="Students" />
        <Line type="monotone" dataKey="fees" stroke="#E98112" name="Fees" />
      </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default LineCharts