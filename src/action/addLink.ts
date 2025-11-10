"use server";

import { validateformSchema } from "@/schema/validateForm";
import { revalidatePath } from "next/cache";
import { createClient } from "@/utils/supabase/server";
import { v4 as uuidv4 } from "uuid";

export default async function addLink(formdata: FormData) {
  const title = formdata.get("title");
  const url = formdata.get("url");
  const created_at = new Date();

  try {
    await validateformSchema.parseAsync({ title, url });

    const supabase = await createClient();

    const { error } = await supabase.from("user_links").insert({
      id: uuidv4(),
      title,
      url,
      created_at,
    });

    if (error) {
      console.log("Erro ao inserir link:", error);
      return;
    }
    revalidatePath("/");
  } catch (err) {
    console.log("Erro de validação:", err);
    return;
  }
}
