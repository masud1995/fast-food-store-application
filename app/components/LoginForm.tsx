"use client";

import { login } from "@/app/actions/auth";
import TextInputField from "./ui/TextInputField";
import { Button } from "@/components/ui/button";
import { useFormState } from "react-dom";

const LoginForm = () => {
  const [state, action] = useFormState(login, undefined);
  return (
    <form action={action}>
      <TextInputField
        label="Email"
        type="email"
        name="email"
        placeholder="Enter email here"
        error={state?.errors?.email}
      />

      <TextInputField
        label="Password"
        type="password"
        name="password"
        placeholder="Enter password here"
        error={state?.errors?.password}
      />

      <Button type="submit" className="w-full">
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
