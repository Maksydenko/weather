import { ChangeEvent, FormEvent, FC, useState } from "react";
import { useDispatch } from "react-redux";

import { AppDispatch } from "@/provider/store";
import { fetchWeather } from "@/provider/weather/weatherSlice";

const Search: FC = () => {
  const [location, setLocation] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  // Handle change
  interface IHandleChange {
    ({ target: { value } }: ChangeEvent<HTMLInputElement>): void;
  }
  const handleChange: IHandleChange = ({ target: { value } }) =>
    setLocation(value);

  // Handle submit
  interface IHandleSubmit {
    (e: FormEvent<HTMLFormElement>): void;
  }
  const handleSubmit: IHandleSubmit = (e) => {
    if (location) {
      dispatch(fetchWeather(location));
      setLocation("");
    }
    e.preventDefault();
  };

  return (
    <section className="search">
      <div className="search__container">
        <form action="#" className="search__form" onSubmit={handleSubmit}>
          <input
            className="search__input"
            type="search"
            placeholder="Enter location"
            value={location}
            onChange={handleChange}
          ></input>
          <button className="search__submit" type="submit">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Search;
