import { ButtonContainer } from "./styles";

import { ButtonHTMLAttributes } from "react";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

export function Button({ text, ...rest }: IButtonProps) {
  return <ButtonContainer {...rest}>{text}</ButtonContainer>;
}
