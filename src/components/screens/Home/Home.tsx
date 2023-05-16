import { FC } from "react";

import Search from "./Search/Search";
import Weather from "./Weather/Weather";

const Home: FC = () => (
  <>
    <Search />
    <Weather />
  </>
);

export default Home;
