import { FC } from "react";

import { IWeather } from "@/interfaces/weather.interface";

interface DetailsProps {
  dataWeather: IWeather;
}

const Details: FC<DetailsProps> = ({
  dataWeather: {
    main: { humidity, pressure },
    visibility,
  },
}) => {
  const formattedVisibility = visibility / 1000;

  return (
    <div className="weather__details details">
      <div className="details__body">
        <h2 className="details__title">Details</h2>
        <ul className="details__list">
          <li className="details__item">Humidity: {humidity}%</li>
          <li className="details__item">Pressure: {pressure} mBar</li>
          <li className="details__item">
            Visibility: {formattedVisibility} km
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Details;
