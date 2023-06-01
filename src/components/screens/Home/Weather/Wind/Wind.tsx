import { FC } from "react";

import { IWeather } from "@/interfaces/weather.interface";

interface WindProps {
  windWeather: IWeather["wind"];
}

const Wind: FC<WindProps> = ({ windWeather }) => {
  const speed = Math.round(windWeather.speed * 3.6);
  const deg = windWeather.deg;

  const transformRotateStyle = {
    transform: `rotate(${deg}deg)`,
  };

  return (
    <div className="weather__wind wind">
      <h2 className="wind__title">Wind</h2>
      <div className="wind__body">
        <span className="wind__value">{speed}</span>
        <span className="wind__arrow" style={transformRotateStyle}>
          <span className="_icon-arrow"></span>
        </span>
        <span className="wind__unit">km/h</span>
      </div>
    </div>
  );
};

export default Wind;
