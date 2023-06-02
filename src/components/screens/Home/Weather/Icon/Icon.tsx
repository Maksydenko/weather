import { FC } from "react";

import Sunny from "./Items/Sunny";

import Cloudy from "./Items/Cloudy";
import Snowy from "./Items/Snowy";
import Stormy from "./Items/Stormy";

import { IWeather } from "@/interfaces/weather.interface";

interface IconProps {
  iconsWeather: IWeather["weather"];
}

const Icon: FC<IconProps> = ({ iconsWeather }) => {
  const icon = iconsWeather[0];
  const { main, description } = icon;

  let IconItem = null;

  switch (main) {
    case "Clear":
      IconItem = <Sunny description={description} />;
      break;
    case "Clouds":
      IconItem = <Cloudy description={description} />;
      break;
    case "Snow":
      IconItem = <Snowy description={description} />;
      break;
    case "Rain":
    case "Thunderstorm":
      IconItem = <Stormy description={description} />;
      break;
    default:
      return null;
  }

  return IconItem ? <div className="weather__icon icon">{IconItem}</div> : null;
};

export default Icon;
