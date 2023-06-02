import { FC } from "react";

interface SunnyProps {
  description: string;
}

const Sunny: FC<SunnyProps> = ({ description }) => (
  <div data-icon="sunny" data-label={description}>
    <span className="sun"></span>
  </div>
);

export default Sunny;
