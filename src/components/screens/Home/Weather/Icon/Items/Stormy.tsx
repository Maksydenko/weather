import { FC } from "react";

interface StormyProps {
  description: string;
}

const Stormy: FC<StormyProps> = ({ description }) => (
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
);

export default Stormy;
