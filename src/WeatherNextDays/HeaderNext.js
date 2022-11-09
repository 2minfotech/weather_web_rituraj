import React from "react";
import './HeaderNext.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { WeatherTime } from "./WeatherTime";
import { Footer } from "./Footer";
import { Link } from "react-router-dom";
import { useState } from 'react';







export function HeaderNext(){
      
  const [data, setData] = useState({});
  function getData() {
      fetch("https://api.open-meteo.com/v1/forecast?latitude=26.89&longitude=75.74&hourly=temperature_2m,rain,showers,windspeed_180m,temperature_180m&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_sum,rain_sum,precipitation_hours,windspeed_10m_max&current_weather=true&timezone=Asia%2FKolkata&past_days=1")
          .then(res => res.json())
          .then(res => {
              setData(res);
          })
  }
  React.useEffect(() => {
      setTimeout(() => {
          getData();
      },);
  }, []);
  console.log(data);
  if (Object.keys(data).length <= 0) {
      return null;
  }

    return(
       <div id="wrapper">
        <div className="weather_top">
        <div className="header_tool">
          <div className="header_top" >
            <Link to="/">
              <FontAwesomeIcon className="icon_arrow" icon={faArrowLeft}/>
            </Link>
            
          </div>
          <div >
            <h3 className="header_right">Next 7 Days</h3>
          </div>
          </div>
          <WeatherTime data={data}/>
          <Footer fdata={data}/>
          </div>
       </div>

    )
}