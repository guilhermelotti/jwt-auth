import * as S from "./styles";

import { Button } from "../../components/Button";
import { TextField } from "../../components/Input";
import { Spinner } from "../../components/Spinner";

import { HiOutlineMail as MailIcon } from "react-icons/hi";
import { BiKey as KeyIcon } from "react-icons/bi";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signInFormSchema } from "../../utils/yup/schema";

type FormValues = {
  email: string;
  password: string;
};

export function Login() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<FormValues>({
    resolver: yupResolver(signInFormSchema),
  });

  function handleSignIn({ email, password }: FormValues) {
    console.log({ email, password });
  }

  return (
    <S.Container>
      <S.FormContainer>
        <S.HeadingContainer>
          <S.Heading>Login</S.Heading>
        </S.HeadingContainer>
        <S.Form onSubmit={handleSubmit(handleSignIn)}>
          <S.FieldGroup>
            <TextField
              register={register}
              name="email"
              label="Email address"
              icon={<MailIcon type="email" />}
              error={errors.email}
              autoComplete="email"
            />
            <TextField
              register={register}
              name="password"
              label="Password"
              icon={<KeyIcon />}
              type="password"
              error={errors.password}
              autoComplete="current-password"
            />
          </S.FieldGroup>
          <S.FormFooter>
            <Button type="submit" size="medium" fullWidth>
              {isSubmitting ? <Spinner /> : "Sign in"}
            </Button>
          </S.FormFooter>
        </S.Form>
      </S.FormContainer>
    </S.Container>
  );
}
