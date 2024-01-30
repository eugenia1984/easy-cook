import { FC } from "react";
import { TitleH1 } from "./HeadlineH1.Styles";

type HeadlineH1Props = {
  text: string;
  textColor?: string;
};

export const HeadlineH1: FC<HeadlineH1Props> = ({
  text,
  textColor
}) => {
  return (
    <TitleH1 textColor={textColor}>
      {text}
    </TitleH1>
  )
};