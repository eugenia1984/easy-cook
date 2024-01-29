import { FC } from "react";
import { TextNormal } from "./NormalText.Styles";

type NormalTextProps = {
  text: string;
}

export const NormalText: FC<NormalTextProps> = ({ text }) => {
  return (
    <TextNormal>{text}</TextNormal>
  )
}