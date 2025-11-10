"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import { validateLoginSchema } from "@/schema/validateForm";

export default async function login(
  prevState: { message: string },
  formData: FormData
) {
  const supabase = await createClient();

  //Extrai dos dados do form
  const email = formData.get("email");
  const password = formData.get("password");

  //Extrai os dados do Schema
  const result = validateLoginSchema.safeParse({ email, password });

  //Varifica se a conexão não da erro
  if (!result.success) {
    const errorMessage = result.error.issues.map((e) => e.message).join(", ");
    return { message: errorMessage };
  }

  //Tenta fazer o login
  const { error } = await supabase.auth.signInWithPassword({
    email: result.data.email,
    password: result.data.password,
  });

  if (error) {
    //Caso houve erro, retorna esse erro
    return { message: error.message };
  } else {
    //Caso passe ele redireciona para a pagina do admin
    redirect("/admin");
  }
}
