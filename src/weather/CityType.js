import React from "react";
import { City } from "../Utility/City";

export function CityType() {
  return City.map((item, index) => {
    return  <option key={index} value={index}>{item.cityname}</option>
    
  });
}
