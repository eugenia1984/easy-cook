import { FC } from "react";
import { TextNormal } from "./NormalText.Styles";

type NormalTextProps = {
  text: string;
  textColor?: string;
}

export const NormalText: FC<NormalTextProps> = ({
  text,
  textColor
}) => {
  return (
    <TextNormal textColor={textColor}>
      {text}
    </TextNormal>
  )
}