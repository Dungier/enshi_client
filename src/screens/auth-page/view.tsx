"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { IAuth } from "./types";

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

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Email или Логин:</label>
        <input {...register("emailOrLogin")} type="email" />
        {formState.errors.emailOrLogin && (
          <p>{formState.errors.emailOrLogin.message}</p>
        )}
      </div>
      <div>
        <label>Пароль:</label>
        <input {...register("password")} type="password" />
        {formState.errors.password && (
          <p>{formState.errors.password.message}</p>
        )}
      </div>
      <button type="submit">Login</button>
    </form>
  );
};
