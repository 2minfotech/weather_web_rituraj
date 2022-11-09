import React from "react";
import "./WeatherTime.css";
import moment from "moment";
import { ImageType } from "../weather/ImageType";

export function WeatherTime({data}) {
  var today=moment();
  var d0 = today.format('dddd')
  return (
    <div className="section_one">
      <div className="section_types">
        <div className="section_left">
          <p>{moment(today).add(1, 'days').format('dddd')}</p>
        </div>
        <div className="section_topp">
          <p className="section_right">{data.daily.temperature_2m_max[2]+data.hourly_units.temperature_180m}</p>
          <ImageType data={data} date={moment().add(1, "days").format("YYYY-MM-DD")}/>
        </div>
      </div>
      <div className="section_bottom">
      <div className="section_image">
      <img src='./assects/images/umbrella.png' alt=''/>
     </div>
      <div className="section_image">
      <img src='./assects/images/vector.png' alt=''/>
      </div>
      <div className="section_image">
      <img src='./assects/images/icon1.png' alt=''/>
      </div>
      </div>
      <div className="section_bottom">
        <div className="section__bottom">
            <p>{data.daily.rain_sum[0]+data.daily_units.precipitation_sum}</p>
        </div>
        <div className="section__bottom">
            <p>{data.current_weather.windspeed+data.hourly_units.windspeed_180m}</p>
        </div>
        <div className="section__bottom">
            <p>{data.current_weather.winddirection+data.hourly_units.temperature_180m}</p>
        </div>

      </div>
    </div>
  );
}
