import { FC, ReactEventHandler } from "react";
import { Button } from "./PrimaryButton.Styles";

type PrimaryButtonProps = {
  text: string;
  onClick?: ReactEventHandler;
};

export const PrimaryButton: FC<PrimaryButtonProps> = ({ text, onClick }) => {
  return (
    <Button
      aria-label={`${text} button`}
      onClick={onClick}
    >
      {text}
    </Button>
  )
};