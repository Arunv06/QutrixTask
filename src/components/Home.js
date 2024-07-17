import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../cssfiles/Home.css'; 

const Home = () => {
  const navigate = useNavigate();

  const handleButtonClick = (path) => {
    navigate(path);
  };

  return (
    <div className="home-page-container">
      <h1>Welcome To My Page</h1>
      <div className="button-container">
        <button onClick={() => handleButtonClick('/simplechartinput')} className="button">
          Simple Chart
        </button>
        <button onClick={() => handleButtonClick('/barchartinput')} className="button">
          Bar Chart
        </button>
        <button onClick={() => handleButtonClick('/linechartinput')} className="button">
          Line Chart
        </button>
      </div>
    </div>
  );
};

export default Home;
