import styled, { css, DefaultTheme } from "styled-components";

import { TextFieldProps } from ".";

type IconPositionProps = Pick<TextFieldProps, "iconPosition">;

type WrapperProps = Pick<TextFieldProps, "disabled"> & { error?: boolean };

export const InputWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    margin-top: 0.5rem;
    background: ${theme.colors.white};
    border-radius: ${theme.radii};
    padding: 0 ${theme.spacings.xsmall};
    border: 0.2rem solid ${theme.colors.gray};
    border-color: ${theme.colors.lightGray};
    transition: all 0.3s ease-in-out;

    &:focus-within {
      border: 0.2rem solid ${theme.colors.primary};
    }
  `}
`;

export const Input = styled.input<IconPositionProps>`
  ${({ theme, iconPosition }) => css`
    color: ${theme.colors.black};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.xsmall};
    padding: ${theme.spacings.xxsmall} 0;
    padding-${iconPosition}: ${theme.spacings.xsmall};
    background: transparent;
    border: 0;
    outline: none;
    width: ${iconPosition === "right" ? `calc(100% - 2.2rem)` : `100%`};
    &:-webkit-autofill {
      -webkit-box-shadow: 0 0 0 ${theme.spacings.small}
        ${theme.colors.lightGray} inset;
      filter: none;
      &::first-line {
        font-family: ${theme.font.family};
        font-size: ${theme.font.sizes.medium};
      }
    }
  `}
`;

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.gray};
    cursor: pointer;
    font-family: ${theme.font.family};
    font-weight: bold;
  `}
`;

export const Icon = styled.div<IconPositionProps>`
  ${({ theme, iconPosition }) => css`
    display: flex;
    color: ${theme.colors.lightGray};
    order: ${iconPosition === "right" ? 1 : 0};
    & > svg {
      width: 2.2rem;
      height: 100%;
    }
  `}
`;

export const Error = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.red};
    font-size: ${theme.font.sizes.xsmall};
  `}
`;

const wrapperModifiers = {
  error: (theme: DefaultTheme) => css`
    ${InputWrapper} {
      border-color: ${theme.colors.red};
    }
    ${Icon},
    ${Label} {
      color: ${theme.colors.red};
    }
  `,
  disabled: (theme: DefaultTheme) => css`
    ${Label},
    ${Input},
    ${Icon} {
      cursor: not-allowed;
      color: ${theme.colors.gray};
      &::placeholder {
        color: currentColor;
      }
    }
  `,
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, error, disabled }) => css`
    ${error && wrapperModifiers.error(theme)}
    ${disabled && wrapperModifiers.disabled(theme)}
  `}
`;
