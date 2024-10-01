import React from "react";
import "./Form.css";
const Form = (props) => {
  return (
    <div className="container">
      <h1>my cities</h1>
      <div>
        <input
          type="text"
          placeholder="Enter City..."
          onChange={(e) => props.setCityName(e.target.value)}
        />
        <button
          onClick={() => {
            props.getWeather();
          }}
        >
          Get Weather
        </button>
      </div>
      {props.loading && <h1>loading...</h1>}
      {props.data ? (
        <div className="weather">
          <h2>{props.cityName} weather</h2>
          <div className="temp">
            <h3>Temp : {props.data.temp} c</h3>
          </div>
          <div className="temp">
            <h3>humidity : {props.data.humidity}</h3>
          </div>
          <div className="temp">
            <h3>pressure : {props.data.pressure} pa</h3>
          </div>
        </div>
      ) : (
        <h2> Enter a city... </h2>
      )}
    </div>
  );
};

export default Form;
