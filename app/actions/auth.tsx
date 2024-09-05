"use server";

import { LoginFormSchema, FormState } from "../lib/definitions";

export const login = async (state: FormState, formData: FormData) => {
  // Validate form fields
  const validatedFields = LoginFormSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // Call the provider or db to login
  console.log("no error");
};
