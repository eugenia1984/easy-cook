import { FC } from "react";
import { TitleH1 } from "./HeadlineH1.Styles";

type HeadlineH1Props = {
  text: string;
  textcolor?: string;
};

export const HeadlineH1: FC<HeadlineH1Props> = ({
  text,
  textcolor
}) => {
  return (
    <TitleH1 textcolor={textcolor}>
      {text}
    </TitleH1>
  )
};