"use server";

import { validateformSchema } from "@/schema/validateForm";
import { promises as fs } from "fs";
import { revalidatePath } from "next/cache";
import path from "path";
import { v4 as uuidv4 } from "uuid";

export default async function addLink(formdata: FormData) {
  const title = formdata.get("title");
  const url = formdata.get("url");

  try {
    await validateformSchema.parseAsync({ title, url });

    const file = path.join(process.cwd(), "/bd.json");
    const jsonData = await fs.readFile(file, "utf8");
    const data = JSON.parse(jsonData);
    data.push({ id: uuidv4(), title, url });
    await fs.writeFile(file, JSON.stringify(data, null, 2)); // ###
    revalidatePath("/");
  } catch (err) {
    console.log("Erro de validação:", err);
    return;
  }
}
