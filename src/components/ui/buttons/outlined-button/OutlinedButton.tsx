import { FC } from "react";

type OutlinedButtonProps = {
  text: string;
};

export const OutlinedButton: FC<OutlinedButtonProps> = ({ text }) => {
  return <button>{text}</button>;
};