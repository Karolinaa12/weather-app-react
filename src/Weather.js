import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Type a city..."
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <h1>Lisbon</h1>
      <ul>
        <li>Last updated at Saturday 14:35</li>
        <li>Clouds</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img src="http://openweathermap.org/img/wn/03d@2x.png" alt="Clouds" />
          21 °C
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: 73%</li>
            <li>Wind: 17km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
