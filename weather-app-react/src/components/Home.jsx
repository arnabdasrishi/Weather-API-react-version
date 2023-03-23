import React from "react";
import "../index.css";

const Home = ({ weather, humidity, wind, city, temp, time, img }) => {
    let date = new Date();
    let weatherIcon = `http://openweathermap.org/img/wn/${img}@2x.png`
    date = date.toString().slice(0,25);
  return (
    <div className="home__main__div">
      <div className="home__city__temp__details__left">
        <h3>Weather Detials</h3>
        <div className="temp__details">
          <p>{weather}</p>
          {/* Could not find the  weather condition % */}
          <p>{humidity - 14}%</p>
        </div>
        <div className="temp__details">
          <p>Humidity</p>
          <p>{humidity}%</p>
        </div>
        <div className="temp__details">
          <p>Wind</p>
          <p>{Math.floor(wind)} km/h</p>
        </div>
      </div>

      <div className="home__weather__details__right">
        <h1>{Math.round(temp)}°</h1>
        <div>
          <h3>{city}</h3>
          <p>{date}</p>
        </div>
        <img src={weatherIcon} alt="_weather_icon" style={{filter: "brightness(0) invert(1)"}}/>
      </div>
    </div>
  );
};

export default Home;
