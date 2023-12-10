"use client";
import axios from "axios";
import { redirect, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { IRegister } from "./types";

export const RegisterPage = () => {
  const { register, handleSubmit, setError, formState } = useForm<IRegister>();
  const router = useRouter();
  const onSubmit = async (data: IRegister) => {
    await axios.post("/api/register", data);
    router.push("/login");
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
      <button type="submit">Register</button>
    </form>
  );
};
