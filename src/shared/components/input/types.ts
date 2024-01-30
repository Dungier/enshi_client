import { InputHTMLAttributes, Ref } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  isError?: boolean;
  isDisabled?: boolean;
  isAlignCenter?: boolean;
}

export interface InputPropsWithRef extends InputProps {
  ref?: Ref<HTMLInputElement>;
}
