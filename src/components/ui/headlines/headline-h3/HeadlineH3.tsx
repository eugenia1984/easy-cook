import { FC } from "react";

type HeadlineH3Props = {
  text: string;
};

export const HeadlineH3: FC<HeadlineH3Props> = ({ text }) => {
  return <h3>{text}</h3>;
};

