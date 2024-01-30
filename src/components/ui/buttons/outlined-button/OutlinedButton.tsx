import { FC } from "react";
import { Button } from "./outlinedButton.Styles";

type OutlinedButtonProps = {
  text: string;
};

export const OutlinedButton: FC<OutlinedButtonProps> = ({ text }) => {
  return <Button aria-label={`${text} button`}>{text}</Button>;
};