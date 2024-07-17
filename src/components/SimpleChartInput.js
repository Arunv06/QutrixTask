import React,{ useState } from 'react'
import { useNavigate } from 'react-router-dom';

const SimpleChartInput = () => {
    const [xAxis, setXAxis] = useState('');
    const [yAxis, setYAxis] = useState('');
    const navigate=useNavigate();
  
    const handleGeneratexyCharts = () => {
      const xAxisArray = xAxis.split(',').map(item => item.trim());
      const yAxisArray = yAxis.split(',').map(Number);
      navigate('/linebarxy', { state: { xAxis: xAxisArray, yAxis: yAxisArray } });
    };
  return (
    <div className="single-chart">
    <div className="container">
      <h1 className="title">Enter Data for Charts</h1>
      <div className="input-container">
        <div className="input-group">
          <label className="label">X Axis:</label>
          <input
            type="text"
            value={xAxis}
            onChange={(e) => setXAxis(e.target.value)}
            className="input-field"
            placeholder="Enter comma-separated values"
          />
        </div>
        <div className="input-group">
          <label className="label">Y Axis:</label>
          <input
            type="text"
            value={yAxis}
            onChange={(e) => setYAxis(e.target.value)}
            className="input-field"
            placeholder="Enter comma-separated values"
          />
        </div>
        <button className="button" onClick={handleGeneratexyCharts}>Generate Charts</button>
      </div>
    </div>
    </div>
  )
}

export default SimpleChartInput