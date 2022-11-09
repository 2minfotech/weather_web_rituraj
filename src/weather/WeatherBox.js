import React from "react";
import { Link } from "react-router-dom";
import './WeatherBox.css';
import moment from "moment/moment";
import { ImageType } from "./ImageType";


export function WeatherBox(props){

         return(
<div className="box">
          {props.time.map((item,index)=>
              
              <div className="box_type" key={index}>
                    <p className="time_type">{moment(item).format('HH:mm')}</p>
                    <ImageType data={props}/>
                    <h5 className="degree_type">{props.hourly.temperature_2m[index]}</h5>
               </div>
     
        
         )}
         </div>
         )
     }