"use client";

import { signIn } from "next-auth/react";
import { FC } from "react";
import { useForm } from "react-hook-form";

export const AuthPage: FC = () => {
  const { register, handleSubmit, setError, formState } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    await signIn("credentials", {
      ...data,
      operation: "register",

      redirect: false,
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Email:</label>
        <input {...register("email")} type="email" />
        {formState.errors.email && <p>{formState.errors.email.message}</p>}
      </div>
      <div>
        <label>Login:</label>
        <input {...register("login")} type="login" />
        {formState.errors.email && <p>{formState.errors.email.message}</p>}
      </div>
      <div>
        <label>Password:</label>
        <input {...register("password")} type="password" />
        {formState.errors.password && (
          <p>{formState.errors.password.message}</p>
        )}
      </div>
      <button type="submit">Login</button>
    </form>
  );
};
