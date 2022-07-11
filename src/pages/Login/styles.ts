import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;

export const FormContainer = styled.div`
  background-color: white;
  padding: 4rem;
  border-radius: 8px;
  min-width: 25%;
  box-shadow: ${({ theme }) => theme.boxShadow};
`;

export const HeadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
`;

export const Heading = styled.h1`
  ${({ theme }) => css`
    font-size: 2rem;
    font-family: ${theme.font.family};
    color: ${theme.colors.lightBlack};
  `}
`;

export const Form = styled.form``;

export const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const FormFooter = styled.div`
  margin-top: 3rem;
`;
