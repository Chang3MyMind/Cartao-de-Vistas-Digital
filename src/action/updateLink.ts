import path from "path";
import { promises as fs } from "fs";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export default async function updateLink(formData: FormData) {
  const id = formData.get("id");
  const title = formData.get("title");
  const url = formData.get("url");

  try {
    const file = path.join(process.cwd(), "/bd.json");
    const jsonData = await fs.readFile(file, "utf8");
    const data = JSON.parse(jsonData);
    const updatedData = data.map(
      (item: { id: string; title: string; url: string }) => {
        if (item.id === id) {
          return { ...item, title: title, url: url };
        }
        return item;
      }
    );
    await fs.writeFile(file, JSON.stringify(updatedData, null, 2));
    revalidatePath("/admin");
    revalidatePath("/");
    redirect("/admin");
  } catch (err) {
    console.error("Error updating link:", err);
    redirect("/admin");
  }
}
