import * as S from "./styles";

import { Button } from "../../components/Button";
import { TextField } from "../../components/Input";

import { HiOutlineMail } from "react-icons/hi";
import { BiKey } from "react-icons/bi";

export function Login() {
  return (
    <S.Container>
      <S.FormContainer>
        <S.HeadingContainer>
          <S.Heading>Login</S.Heading>
        </S.HeadingContainer>
        <S.Form>
          <S.FieldGroup>
            <TextField label="Email address" icon={<HiOutlineMail />} />
            <TextField label="Password" icon={<BiKey />} type="password" />
          </S.FieldGroup>
          <S.FormFooter>
            <Button size="medium" fullWidth>
              Sign in
            </Button>
          </S.FormFooter>
        </S.Form>
      </S.FormContainer>
    </S.Container>
  );
}
