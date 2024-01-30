import { ChangeEvent, FC } from "react";
import { Input, InputGroup, Label } from "./InputForm.Styles";

type InputFormProps = {
  labelText: string;
  id: string;
  placeholderText?: string;
  inputType?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
export const InputForm: FC<InputFormProps> = ({
  labelText,
  id,
  placeholderText,
  inputType,
  value,
  onChange
}) => {
  return (
    <InputGroup>
      <Label htmlFor={id}>{labelText}</Label>
      <Input
        id={id}
        type={inputType ?? 'text'}
        placeholder={placeholderText ?? ''}
        value={value}
        onChange={onChange}
      />
    </InputGroup>
  )
}