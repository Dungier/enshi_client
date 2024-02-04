"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { IAuth } from "./types";
import { Button, useMediaQuery } from "@mui/material";
import { Input } from "@/shared/components/input";
import {
  FormDiv,
  StyledContainer,
  StyledDiv,
  StyledForm,
  StyledNotificationError,
} from "@/screens/auth-page/styles";
import authAnineSlider from "@/assets/images/animeSliderAuth.svg";
import Image from "next/image";

export const AuthPage: FC = () => {
  const { register, handleSubmit, setError, formState } = useForm<IAuth>();
  const router = useRouter();
  const onSubmit = async (data: IAuth) => {
    const res = await signIn("credentials", {
      email: data.emailOrLogin,
      login: data.emailOrLogin,
      password: data.password,
      redirect: false,
    });

    res?.ok && router.push("/");
  };
  const goRegistration = () => {
    router.push("/register");
  };
  const isMobile = useMediaQuery("(max-width: 1600px)");
  return (
    <StyledContainer>
      <FormDiv>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <StyledDiv
            style={{
              color: "#FFF",
              fontFamily: "Montserrat",
              fontStyle: "bold",
              fontWeight: 700,
              fontSize: "30px",
              marginBottom: "3.1875rem",
              letterSpacing: "2px",
            }}
          >
            Авторизация
          </StyledDiv>
          <StyledDiv>
            <Input
              {...register("emailOrLogin", {
                required: "Это поле является обязательным",
              })}
              type="text"
              placeholder={"E-mail или логин"}
              style={{ width: "100%" }}
            />
          </StyledDiv>
          {formState.errors.emailOrLogin && (
            <StyledNotificationError>
              {formState.errors.emailOrLogin.message}
            </StyledNotificationError>
          )}
          <StyledDiv style={{ marginTop: "1.875rem" }}>
            <Input
              {...register("password", {
                required: "Это поле является обязательным",
                minLength: {
                  value: 6,
                  message: "Пароль должен быть не менее 6 символов",
                },
              })}
              type="password"
              placeholder={"Введите пароль"}
              style={{ width: "100%" }}
            />
          </StyledDiv>
          {formState.errors.password && (
            <StyledNotificationError>
              {formState.errors.password.message}
            </StyledNotificationError>
          )}
          <StyledDiv
            style={{ justifyContent: "space-around", marginTop: "1.875rem" }}
          >
            <Button type="submit" style={{ width: "63%" }}>
              Войти на сайт
            </Button>
            <Button
              type={"button"}
              onClick={goRegistration}
              sx={{ width: 250, background: "none", color: "#FFF" }}
            >
              Регистрация
            </Button>
          </StyledDiv>
        </StyledForm>
      </FormDiv>
      {!isMobile && (
        <StyledDiv style={{ height: "100%", width: "50%" }}>
          <Image
            alt={"Аниме слайдер на загрузочной странице"}
            src={authAnineSlider}
            height={1000}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              overflow: "hidden",
            }}
          />
        </StyledDiv>
      )}
    </StyledContainer>
  );
};
