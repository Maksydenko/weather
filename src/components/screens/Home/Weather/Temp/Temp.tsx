import { FC } from "react";

import { IWeather } from "@/interfaces/weather.interface";

interface ITempProps {
  tempWeather: IWeather["main"];
}

const Temp: FC<ITempProps> = ({ tempWeather }) => {
  const feelsLike = Math.round(tempWeather.feels_like);
  const temp = Math.round(tempWeather.temp);
  const tempMax = Math.round(tempWeather.temp_max);
  const tempMin = Math.round(tempWeather.temp_min);

  return (
    <div className="weather__temp temp">
      <div className="temp__body">
        <span className="temp__feels-like">Feels like {feelsLike}°</span>
        <span className="temp__current">{temp}°C</span>
        <span className="temp__min-max">
          <span>Day {tempMax}°</span>
          <span>Night {tempMin}°</span>
        </span>
      </div>
    </div>
  );
};

export default Temp;
