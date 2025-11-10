import supabase from "./supabaseClient";

export async function getUserLinks() {
  const { data, error } = await supabase
    .from("user_links")
    .select("*")
    .order("created_at");

  if (error) {
    console.error("Error fetching links: ", error);

    return [];
  }

  return data;
}
