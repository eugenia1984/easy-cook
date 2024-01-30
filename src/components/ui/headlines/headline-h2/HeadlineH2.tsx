import { FC } from "react";
import { TitleH2 } from "./HeadlineH2.Styles";

type HeadlineH2Props = {
  text: string;
  textColor?: string;
};

export const HeadlineH2: FC<HeadlineH2Props> = ({
  text,
  textColor
}) => {
  return (
    <TitleH2 textColor={textColor}>
      {text}
    </TitleH2>
  )
};

