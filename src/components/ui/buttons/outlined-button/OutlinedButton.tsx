import { FC } from "react";
import { Button } from "./OutlinedButton.Styles";

type OutlinedButtonProps = {
  text: string;
};

export const OutlinedButton: FC<OutlinedButtonProps> = ({ text }) => {
  return (
    <Button aria-label={`${text} button`}>
      {text}
    </Button>
  )
};