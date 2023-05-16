import { FC } from "react";

import { IWeather } from "@/interfaces/weather.interface";

interface ISunProps {
  sysWeather: IWeather["sys"];
}

const SunRiseSet: FC<ISunProps> = ({ sysWeather }) => {
  // Get time
  interface IGetTime {
    (time: number): string;
  }
  const getTime: IGetTime = (time) =>
    new Date(time * 1000).toLocaleString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

  const sunrise = getTime(sysWeather.sunrise);
  const sunset = getTime(sysWeather.sunset);

  return (
    <div className="weather__sun-rise-set sun-rise-set">
      <div className="sun-rise-set__body">
        <h2 className="sun-rise-set__title">Sunrise & sunset</h2>
        <div className="sun-rise-set__box">
          <span>Sunrise: {`${sunrise}`}</span>
          <span>Sunset: {`${sunset}`}</span>
        </div>
      </div>
    </div>
  );
};

export default SunRiseSet;
