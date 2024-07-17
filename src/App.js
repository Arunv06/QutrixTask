import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import BarChartInput from './components/BarChartInput'
import LineChartInput from './components/LineChartInput'
import SimpleChartInput from './components/SimpleChartInput'
import  BarCharts  from './charts/BarCharts';
import  LineCharts  from './charts/LineCharts';
import  LineBarXY  from './charts/LineBarXY';
import NavBar from './navbar/NavBar';
function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <div className="container">
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/barchartinput' element={<BarChartInput />} />
        <Route path='/linechartinput' element={<LineChartInput />} />
        <Route path='/simplechartinput' element={<SimpleChartInput />} />
        <Route path='/barchart' element={<BarCharts />} />
        <Route path='/linechart' element={<LineCharts />} />        
        <Route path='/linebarxy' element={<LineBarXY />} /> 
        </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
