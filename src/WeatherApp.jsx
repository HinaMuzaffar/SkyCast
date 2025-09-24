import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
  let [weatherInfo, setWeatherInfo] = useState({
    city: "Islamabad",
    weather: "overcast clouds",
    feelsLike: 30.72,
    humidity: 70,
    temp: 28.03,
    tempMax: 28.03,
    tempMin: 28.03,
  });

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };
  return (
    <div>
      <h2>SkyCast</h2>
      <SearchBox updateInfo={updateInfo}></SearchBox>
      <InfoBox info={weatherInfo}></InfoBox>
    </div>
  );
}
