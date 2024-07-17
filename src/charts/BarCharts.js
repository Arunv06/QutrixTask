import React from 'react'
import { useLocation } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,ResponsiveContainer } from 'recharts';

const BarCharts = () => {
    const location = useLocation();
    const data = location.state?.data || [];
  return (
    <div>
      <h1>Generated Bar Chart</h1>
      <ResponsiveContainer width="80%" height={400}>
      <BarChart
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="student" fill="#E9121F" name="Students" />
        <Bar dataKey="fees" fill="#E98112" name="Fees" />
      </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default BarCharts;