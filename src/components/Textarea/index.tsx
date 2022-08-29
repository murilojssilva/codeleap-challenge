import { TextareaHTMLAttributes } from "react";
import { TextareaContainer } from "./styles";

interface ITextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export function Textarea({ ...rest }: ITextareaProps) {
  return <TextareaContainer {...rest} />;
}
