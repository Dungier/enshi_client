"use client";

import { FC, forwardRef } from "react";
import { InputStyles } from "./styles";
import { clsx } from "clsx";
import { InputPropsWithRef } from "./types";

export const Input: FC<InputPropsWithRef> = forwardRef<
  HTMLInputElement,
  InputPropsWithRef
>(
  (
    {
      isError,
      isDisabled,
      type,
      value,
      placeholder,
      onChange,
      onFocus,
      isAlignCenter,
      defaultValue,
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <InputStyles
        {...props}
        ref={ref}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onFocus={onFocus}
        disabled={isDisabled}
        defaultValue={defaultValue}
        className={clsx(
          isError
            ? "Input-error"
            : "" || isDisabled
              ? "Input-disabled"
              : "" || isAlignCenter
                ? ""
                : "Input-align-left",
          className,
        )}
      />
    );
  },
);
