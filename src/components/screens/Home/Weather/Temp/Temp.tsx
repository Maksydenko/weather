import { FC } from "react";

import { IWeather } from "@/interfaces/weather.interface";

interface TempProps {
  tempWeather: IWeather["main"];
}

const Temp: FC<TempProps> = ({
  tempWeather: { feels_like, temp, temp_max, temp_min },
}) => {
  const roundedFeelsLike = Math.round(feels_like);
  const roundedTemp = Math.round(temp);
  const roundedTempMax = Math.round(temp_max);
  const roundedTempMin = Math.round(temp_min);

  return (
    <div className="weather__temp temp">
      <div className="temp__body">
        <span className="temp__feels-like">Feels like {roundedFeelsLike}°</span>
        <span className="temp__current">{roundedTemp}°C</span>
        <span className="temp__min-max">
          <span>Day {roundedTempMax}°</span>
          <span>Night {roundedTempMin}°</span>
        </span>
      </div>
    </div>
  );
};

export default Temp;
