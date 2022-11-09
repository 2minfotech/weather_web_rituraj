import React from "react";
import moment from "moment";
import { ImageType } from "../weather/ImageType";
import { DayWeather } from "./DayWeather";

export function Footer({ fdata }) {
 

  return (
    <div>
      <DayWeather
        day={moment().add(2, "days").format("dddd")}
        degree={fdata.daily.temperature_2m_max[3]+fdata.hourly_units.temperature_180m}
        image={<ImageType data={fdata} date={moment().add(2, "days").format("YYYY-MM-DD")} />}
      />
      <DayWeather
        day={moment().add(3, "days").format("dddd")}
        degree={fdata.daily.temperature_2m_max[4]+fdata.hourly_units.temperature_180m}
        image={<ImageType data={fdata} date={moment().add(3, "days").format("YYYY-MM-DD")}/>}
      />
      <DayWeather
        day={moment().add(4, "days").format("dddd")}
        degree={fdata.daily.temperature_2m_max[5]+fdata.hourly_units.temperature_180m}
        image={<ImageType data={fdata} date={moment().add(4, "days").format("YYYY-MM-DD")}/>}
      />
      <DayWeather
        day={moment().add(5, "days").format("dddd")}
        degree={fdata.daily.temperature_2m_max[6]+fdata.hourly_units.temperature_180m}
        image={<ImageType data={fdata} date={moment().add(5, "days").format("YYYY-MM-DD")}/>}
      />
      <DayWeather
        day={moment().add(6, "days").format("dddd")}
        degree={fdata.daily.temperature_2m_max[7]+fdata.hourly_units.temperature_180m}
        image={<ImageType data={fdata} date={moment().add(6, "days").format("YYYY-MM-DD")}/>}
      />
      <DayWeather
        day={moment().add(7, "days").format("dddd")}
        degree={fdata.daily.temperature_2m_max[1]+fdata.hourly_units.temperature_180m}
        image={<ImageType data={fdata} date={moment().add(0, "days").format("YYYY-MM-DD")} />}
      />
    </div>
  );
}
