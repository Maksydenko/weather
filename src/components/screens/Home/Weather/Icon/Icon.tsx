import { FC } from "react";

import { IWeather } from "@/interfaces/weather.interface";

interface IconProps {
  iconsWeather: IWeather["weather"];
}

const Icon: FC<IconProps> = ({ iconsWeather }) => {
  const icon = iconsWeather[0];
  const description = icon.description;

  switch (icon.main) {
    case "Clear":
      return (
        <div className="weather__icon icon">
          <div data-icon="sunny" data-label={description}>
            <span className="sun"></span>
          </div>
        </div>
      );
    case "Clouds":
      return (
        <div className="weather__icon icon">
          <div data-icon="cloudy" data-label={description}>
            <span className="cloud"></span>
            <span className="cloud"></span>
          </div>
        </div>
      );
    case "Snow":
      return (
        <div className="weather__icon icon">
          <div data-icon="snowy" data-label={description}>
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
      );
    case "Rain":
    case "Thunderstorm":
      return (
        <div className="weather__icon icon">
          <div data-icon="stormy" data-label={description}>
            <span className="cloud"></span>
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
      );
    default:
      return null;
  }
};

export default Icon;
