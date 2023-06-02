import { FC } from "react";

interface SnowyProps {
  description: string;
}

const Snowy: FC<SnowyProps> = ({ description }) => (
  <div data-icon="snowy" data-label={description}>
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
);

export default Snowy;
