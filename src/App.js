import logo from './logo.svg';
import { Routes, Route } from "react-router-dom";
import './App.css';
import { WeatherType } from './weather/WeatherType';
import { HeaderNext } from './WeatherNextDays/HeaderNext';
import { Details } from './Details/Details';

function App() {
  return (
    <Routes>
        <Route path="/" element={<WeatherType />} />
        <Route path="weather-next-7-days" element={<HeaderNext />} />
        <Route path="details/:time" element={<Details />} />
    </Routes>
  );
}

export default App;
