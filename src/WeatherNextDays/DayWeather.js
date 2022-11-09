import React from "react";
import './Footer.css';
import Card from 'react-bootstrap/Card';


export function DayWeather({day,degree,image}){
    return(
        <div className="footer">
       <Card>
       <Card.Body className='footer_type'>
        <div >
        <p className='footer_last' >{day}</p>
        </div>
        <div className="footer_mid" >
        <div>
        <p className='footer_mid' >{degree}</p>
        </div>
        <div className='footer_image'>
        <p>{image}</p>
        </div>
        </div>
       
         </Card.Body>
       </Card>
        </div>
    )
}