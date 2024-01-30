import { FC } from "react";
import { TitleH3 } from "./HeadlineH3.Styles";

type HeadlineH3Props = {
  text: string;
  textColor?: string;
};

export const HeadlineH3: FC<HeadlineH3Props> = ({
  text,
  textColor
}) => {
  return (
    <TitleH3 textColor={textColor}>
      {text}
    </TitleH3>
  )
};

