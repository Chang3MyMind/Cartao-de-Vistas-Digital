"use server";
import path from "path";
import { promises as fs } from "fs";
import { revalidatePath } from "next/cache";

export default async function deleteLink(formData: FormData) {
  const id = formData.get("id");

  try {
    const file = path.join(process.cwd(), "/bd.json");
    const jsonData = await fs.readFile(file, "utf8");
    const data = JSON.parse(jsonData);
    const filteredData = data.filter((item: { id: string }) => item.id !== id);
    await fs.writeFile(file, JSON.stringify(filteredData, null, 2));
    revalidatePath("/admin");
    revalidatePath("/");
  } catch (err) {
    console.error("Error deleting link:", err);
  }
}
