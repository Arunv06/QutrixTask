import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const BarChartInput = () => {
    const [data, setData] = useState([{ name: '', student: '', fees: '' }]);
    const navigate = useNavigate();

    const handleInputChange = (index, event) => {
      const values = [...data];
      values[index][event.target.name] = event.target.value;
      setData(values);
    };
  
    const handleAddFields = () => {
      setData([...data, { name: '', student: '', fees: '' }]);
    };
  
    const handleRemoveFields = (index) => {
      const values = [...data];
      values.splice(index, 1);
      setData(values);
    };
    const handleGenerateBarChart = () => {
        navigate('/barchart', { state: { data } });
      };
  return (
    <>
    
    <div className="container">
      <h1 className="title">Enter Data for Bar Chart</h1>
      {data.map((inputField, index) => (
        <div key={index} className="input-container">
          <div className="input-group">
            <label className="label">Name:</label>
            <input
              type="text"
              name="name"
              value={inputField.name}
              onChange={(event) => handleInputChange(index, event)}
              className="input-field"
            />
          </div>
          <div className="input-group">
            <label className="label">Students:</label>
            <input
              type="number"
              name="student"
              value={inputField.student}
              onChange={(event) => handleInputChange(index, event)}
              className="input-field"
            />
          </div>
          <div className="input-group">
            <label className="label">Fees:</label>
            <input
              type="number"
              name="fees"
              value={inputField.fees}
              onChange={(event) => handleInputChange(index, event)}
              className="input-field"
            />
          </div>
          <button className="button" onClick={() => handleRemoveFields(index)}>Remove</button>
        </div>
      ))}
      <div className='gen-btn'>
      <button className="button" onClick={handleAddFields}>Add More</button>
      <button className="button" onClick={handleGenerateBarChart}>Generate Bar Chart</button>
      </div>
    </div>
    </>
  )
}

export default BarChartInput