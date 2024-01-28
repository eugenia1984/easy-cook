import { FC } from "react";

type HeadlineH2Props = {
  text: string;
};

export const HeadlineH2: FC<HeadlineH2Props> = ({ text }) => {
  return <h2>{text}</h2>;
};

