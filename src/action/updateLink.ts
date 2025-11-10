"use server";

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export default async function updateLink(formData: FormData) {
  const id = formData.get("id") as string;
  const title = formData.get("title") as string;
  const url = formData.get("url") as string;

  if (!id || !title || !url) {
    console.error("Dados de formulário ausentes.");
    return redirect("/admin");
  }

  let error;

  try {
    const supabase = await createClient();

    const { error: updateError } = await supabase
      .from("user_links")
      .update({ title, url })
      .eq("id", id);

    error = updateError;
  } catch (err) {
    console.error("Erro de execução do Update:", err);
    error = err as Error;
  }

  if (error) {
    console.error("Erro ao atualizar o link:", error);
  }

  revalidatePath("/admin");
  revalidatePath("/");

  redirect("/admin");
}
