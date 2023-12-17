import { FC } from "react";

type HeadlineH1Props = {
  text: string;
};
const HeadlineH1: FC<HeadlineH1Props> = ({ text }) => {
  return <h1>{text}</h1>;
};

export default HeadlineH1;
