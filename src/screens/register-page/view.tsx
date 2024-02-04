"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { IRegister } from "./types";
import {
  FormDiv,
  StyledContainer,
  StyledDiv,
  StyledForm,
  StyledNotificationError,
} from "@/screens/register-page/styles";
import { Input } from "@/shared/components/input";
import { Button, useMediaQuery } from "@mui/material";
import Image from "next/image";
import authAnineSlider from "@/assets/images/animeSliderAuth.svg";

export const RegisterPage = () => {
  const { register, handleSubmit, setError, formState } = useForm<IRegister>();
  const router = useRouter();
  const pushLogin = () => {
    router.push("/login");
  };
  const onSubmit = async (data: IRegister) => {
    await axios.post("/api/register", data);
    pushLogin();
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
            Регистрация
          </StyledDiv>
          <StyledDiv>
            <Input
              {...register("email", {
                required: "Это поле является обязательным",
              })}
              type="email"
              placeholder={"E-mail"}
              style={{ width: "100%" }}
            />
          </StyledDiv>
          {formState.errors.email && (
            <StyledNotificationError>
              {formState.errors.email.message}
            </StyledNotificationError>
          )}
          <StyledDiv style={{ marginTop: "1.875rem" }}>
            <Input
              {...register("login", {
                required: "Это поле является обязательным",
              })}
              type="login"
              placeholder={"Введите логин"}
              style={{ width: "100%" }}
            />
          </StyledDiv>
          {formState.errors.login && (
            <StyledNotificationError>
              {formState.errors.login.message}
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
              Регистрация
            </Button>
            <Button
              type={"button"}
              onClick={pushLogin}
              sx={{ width: 250, background: "none", color: "#FFF" }}
            >
              Авторизация
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
