import { InputHTMLAttributes } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";

import * as S from "./styles";

export type TextFieldProps = {
  register: UseFormRegister<any>;
  onInputChange?: (value: string) => void;
  label?: string;
  initialValue?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  disabled?: boolean;
  error?: FieldError | undefined;
  name: string;
} & InputHTMLAttributes<HTMLInputElement>;

export function TextField({
  register,
  icon,
  iconPosition = "left",
  label,
  name,
  initialValue = "",
  error,
  disabled = false,
  onInputChange,
  ...props
}: TextFieldProps) {
  return (
    <S.Wrapper disabled={disabled} error={!!error}>
      {!!label && <S.Label htmlFor={name}>{label}</S.Label>}
      <S.InputWrapper>
        {!!icon && <S.Icon iconPosition={iconPosition}>{icon}</S.Icon>}
        <S.Input
          type="text"
          iconPosition={iconPosition}
          disabled={disabled}
          {...register(name)}
          {...(label ? { id: name } : {})}
          {...props}
        />
      </S.InputWrapper>
      {!!error && <S.Error>{error.message}</S.Error>}
    </S.Wrapper>
  );
}
