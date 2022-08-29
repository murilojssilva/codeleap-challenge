import { InputHTMLAttributes } from "react";
import { InputContainer } from "./styles";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input({ ...rest }: IInputProps) {
  return <InputContainer {...rest} />;
}
