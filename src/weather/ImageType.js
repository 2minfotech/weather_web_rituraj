import React from "react";
import moment from "moment";

export function ImageType({ data,date }) {
  return (
    <img
      src={`./assects/images/${
        data.daily.weathercode[
          data.daily.time.findIndex(
            (element) => element === moment(date).format("YYYY-MM-DD")
          )
        ]
      }.png`}
      alt="0"
    />
  );
}
