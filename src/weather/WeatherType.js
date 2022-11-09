import React, { useState } from "react";
import "./WeatherType.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBars } from "@fortawesome/free-solid-svg-icons";
import { WeatherList } from "./WeatherList";
import { WeatherBox } from "./WeatherBox";
import { Link } from "react-router-dom";
import moment from "moment";
import { ImageType } from "./ImageType";
import { City } from "../Utility/City";
import { CityType } from "./CityType";

export function WeatherType() {
  const [data, setData] = useState({});
  const [todayweather, setTodayWeather] = useState([]);
  const [color, setColor] = useState({
    backgroundColor:
      "linear-gradient(119.54deg, #fee3bc 23.22%, #f39876 99.52%)",
  });
  const [citydata,setCityData]=useState(City[1].cityname);

  function getData(latitude,longitude,Timezone) {
    fetch(
      "https://api.open-meteo.com/v1/forecast?latitude="+latitude+"&longitude="+longitude+"&hourly=temperature_2m,rain,showers,windspeed_180m,temperature_180m&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_sum,rain_sum,precipitation_hours,windspeed_10m_max&current_weather=true&timezone="+Timezone+"&past_days=1"
    )
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  }

  React.useEffect(() => {
    setTimeout(() => {
      getData(City[1].latitude,City[1].longitude,City[1].Timezone);
    });
    // getData();
  }, []);

  React.useEffect(() => {
    if (Object.keys(data).length > 0) {
      const today = moment();
      const number = data.hourly.time.filter((item) => {
        return (
          today.format("L") === moment(item).format("L") &&
          today.format("HH:mm") < moment(item).format("HH mm")
        );
      });
      // console.log(number)
      setTodayWeather(number);
      sunset();
    }
  }, [data]);

 console.log(data)

  function sunset() {
    const suntype = moment();

    const sunsettype = data.daily.sunset.filter((item) => {
      return suntype.format("L") === moment(item).format("L");
    });
    console.log(sunsettype);
    const sunsettime = moment(sunsettype[0]).format("HH:mm");
    console.log(sunsettime);
    const date = moment().format("HH:mm");
    console.log(date);

    if (date > sunsettime) {
      setColor({
        backgroundImage: `url("./assects/images/night.png")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      });
    }
    else{
      
     setColor({   backgroundColor:
          "linear-gradient(119.54deg, #fee3bc 23.22%, #f39876 99.52%)",});
      
    }
  }
  function submit(event){
       const datatype=event.target.value;
       const long= City[datatype];
       getData(long.latitude,long.longitude,long.Timezone)       
       console.log(long);
       setCityData(long.cityname);
  } 
  

  if (Object.keys(data).length <= 0) {
    return <p>pleasewait</p>;
  }

  return (
    <div id="wrapper" style={color}>
      <div className="weather">
        <div className="header">
          <FontAwesomeIcon className="icon" icon={faMagnifyingGlass} />
          <select onChange={submit} className="form-select" aria-label="Default select example">
          <option  selected>{City[1].cityname}</option>
               <CityType />
               </select>
          <h2>Weather</h2>

          <FontAwesomeIcon className="icon" icon={faBars} />
        </div>
        <div className="section">
          <h3 className="section_top"> {citydata}</h3>

          <p className="section__top">{moment().format("ddd MMM DD")}</p>
          <div className="section_images">
            <div className="image_type">
              <ImageType data={data} />
            </div>
            <div className="degree">
              <h1>{data.current_weather.temperature}</h1>
              <p className="degree_top">Rainy</p>
            </div>
            <p className="degree_sign">°c</p>
          </div>
          <WeatherList value={data} />
        </div>
      </div>
      <WeatherBox {...data} time={todayweather} />
    </div>
  );
}
