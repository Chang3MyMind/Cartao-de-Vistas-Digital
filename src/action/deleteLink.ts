"use server";
import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

export default async function deleteLink(formData: FormData) {
  const id = formData.get("id");

  try {
    const supabase = await createClient();

    const { error } = await supabase.from("user_links").delete().eq("id", id);

    if (error) {
      console.error("Error deleting link:", error);
      return;
    }

    revalidatePath("/admin");
    revalidatePath("/");
  } catch (err) {
    console.error("Error deleting link:", err);
  }
}
