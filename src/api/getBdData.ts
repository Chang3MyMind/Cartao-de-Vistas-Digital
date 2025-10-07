import { promises as fs } from "fs";
import path from "path";

export default async function getBdData() {
  const file = path.join(process.cwd(), "/bd.json");
  const jsonData = await fs.readFile(file, "utf8");
  const data = JSON.parse(jsonData);

  return data;
}
