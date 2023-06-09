import { FC } from "react";

import { IWeather } from "@/interfaces/weather.interface";

interface SunRiseSetProps {
  sysWeather: IWeather["sys"];
}

const SunRiseSet: FC<SunRiseSetProps> = ({
  sysWeather: { sunrise, sunset },
}) => {
  // Get time
  interface IGetTime {
    (time: number): string;
  }
  const formatTime: IGetTime = (time) =>
    new Date(time * 1000).toLocaleString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

  const formattedSunrise = formatTime(sunrise);
  const formattedSunset = formatTime(sunset);

  return (
    <div className="weather__sun-rise-set sun-rise-set">
      <div className="sun-rise-set__body">
        <h2 className="sun-rise-set__title">Sunrise & Sunset</h2>
        <div className="sun-rise-set__box">
          <span>Sunrise: {`${formattedSunrise}`}</span>
          <span>Sunset: {`${formattedSunset}`}</span>
        </div>
      </div>
    </div>
  );
};

export default SunRiseSet;
