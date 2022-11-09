import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './WeatherList.css';
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function WeatherList({value}) {
  return (
    <div className='card__type'>
    <Card>
      <Card.Body className='cards'>
        <div className='card_top'>
        <img src='./assects/images/umbrella.png' alt=''/>
        </div>
        <div>
        <p className='card_mid' >RainFall</p>
        </div>
        <div>
            <p className='card_last' >{value.daily.rain_sum[0]+value.daily_units.precipitation_sum}</p>
        </div>
       
      </Card.Body>
    </Card>
     <Card>
     <Card.Body className='cards'>
        <div className='card_top'>
        <img src='./assects/images/vector.png' alt=''/>
        </div>
        <div>
        <p className='card_mid' >Wind</p>
        </div>
        <div>
            <p className='card_last' >{value.current_weather.windspeed+value.hourly_units.windspeed_180m}</p>
        </div>
       
      </Card.Body>
   </Card>
    <Card>
    <Card.Body className='cards'>
        <div className='card_top'>
        <img src='./assects/images/icon1.png' alt=''/>
        </div>
        <div>
        <p className='card_mid' >Humidity</p>
        </div>
        <div>
            <p className='card_last' >{value.current_weather.winddirection+value.hourly_units.temperature_180m}</p>
        </div>
       
      </Card.Body>
  </Card>
  <div className="days_type">
            <div className="type_active" >
                <h5>Today</h5>
            </div>
            <p className="alert">Tomorrow</p>
            <div className="alert_type">
                <Link to='weather-next-7-days' >Next 7 days</Link>
            </div>
            <FontAwesomeIcon className="icon_type" icon={faGreaterThan} />
        </div>
  </div>
  
   
    
    
  );
}

