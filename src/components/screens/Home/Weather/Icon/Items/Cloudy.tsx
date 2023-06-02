import { FC } from "react";

interface CloudyProps {
  description: string;
}

const Cloudy: FC<CloudyProps> = ({ description }) => (
  <div data-icon="cloudy" data-label={description}>
    <span className="cloud"></span>
    <span className="cloud"></span>
  </div>
);

export default Cloudy;
