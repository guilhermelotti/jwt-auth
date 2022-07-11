import * as S from "./styles";

import { Button } from "../../components/Button";
import { TextField } from "../../components/Input";

export function Login() {
  return (
    <S.Container>
      <S.FormContainer>
        <S.HeadingContainer>
          <S.Heading>Login</S.Heading>
        </S.HeadingContainer>
        <S.Form>
          <S.FieldGroup>
            <TextField label="Email address" />
            <TextField label="Password" />
          </S.FieldGroup>
          <S.FormFooter>
            <Button size="small" fullWidth>
              Sign in
            </Button>
          </S.FormFooter>
        </S.Form>
      </S.FormContainer>
    </S.Container>
  );
}
