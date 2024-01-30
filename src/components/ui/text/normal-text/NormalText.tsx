import { FC } from "react";
import { TextNormal } from "./NormalText.Styles";

type NormalTextProps = {
  text: string;
  textcolor?: string;
}

export const NormalText: FC<NormalTextProps> = ({
  text,
  textcolor
}) => {
  return (
    <TextNormal textcolor={textcolor}>
      {text}
    </TextNormal>
  )
}