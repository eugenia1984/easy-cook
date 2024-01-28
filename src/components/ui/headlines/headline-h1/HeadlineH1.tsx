import { FC } from "react";

type HeadlineH1Props = {
  text: string;
};

export const HeadlineH1: FC<HeadlineH1Props> = ({ text }) => {
  return <h1>{text}</h1>;
};