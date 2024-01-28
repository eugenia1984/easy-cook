import { FC } from "react";

type PrimaryButtonProps = {
  text: string;
};

export const PrimaryButton: FC<PrimaryButtonProps> = ({ text }) => {
  return <button>{text}</button>;
};