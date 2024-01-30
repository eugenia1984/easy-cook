import { FC } from "react";
import { TitleH2 } from "./HeadlineH2.Styles";

type HeadlineH2Props = {
  text: string;
  textcolor?: string;
};

export const HeadlineH2: FC<HeadlineH2Props> = ({
  text,
  textcolor
}) => {
  return (
    <TitleH2 textcolor={textcolor}>
      {text}
    </TitleH2>
  )
};

