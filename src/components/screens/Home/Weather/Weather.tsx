import { FC } from "react";
import { useSelector } from "react-redux";

import {
  selectWeatherData,
  selectWeatherStatus,
} from "@/provider/weather/weatherSlice";

import Loader from "@/components/shared/Loader/Loader";
import Temp from "./Temp/Temp";
import Icon from "./Icon/Icon";
import Details from "./Details/Details";
import Wind from "./Wind/Wind";
import SunRiseSet from "./SunRiseSet/SunRiseSet";

import { IWeather } from "@/interfaces/weather.interface";
import { StatusType } from "@/types/status.type";

const Weather: FC = () => {
  const weatherData: IWeather | null = useSelector(selectWeatherData);
  const status: StatusType = useSelector(selectWeatherStatus);

  const isLoading = status === "loading";

  return (
    <section className="weather">
      <div className="weather__container">
        {isLoading && <Loader />}
        {weatherData && (
          <>
            <div className="weather__row">
              <h1 className="weather__location">{weatherData.name}</h1>
              <Temp tempWeather={weatherData.main} />
              <Icon iconsWeather={weatherData.weather} />
            </div>
            <div className="weather__row weather__row_more">
              <Details dataWeather={weatherData} />
              <Wind windWeather={weatherData.wind} />
              <SunRiseSet sysWeather={weatherData.sys} />
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Weather;
