import { FC } from "react";
import { TitleH3 } from "./HeadlineH3.Styles";

type HeadlineH3Props = {
  text: string;
  textcolor?: string;
};

export const HeadlineH3: FC<HeadlineH3Props> = ({
  text,
  textcolor
}) => {
  return (
    <TitleH3 textcolor={textcolor}>
      {text}
    </TitleH3>
  )
};

