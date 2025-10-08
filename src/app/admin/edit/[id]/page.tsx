"use server";
import path from "path";
import { promises as fs } from "fs";
import { redirect } from "next/navigation";
import updateLink from "@/action/updateLink";

type EditPageProps = {
  params: {
    id: string;
  };
  // É uma boa prática já incluir os searchParams, mesmo que não os use agora.
  searchParams?: { [key: string]: string | string[] | undefined };
};

export default async function EditPage({ params }: EditPageProps) {
  const { id } = params;
  let item;

  try {
    const file = path.join(process.cwd(), "/bd.json");
    const jsonData = await fs.readFile(file, "utf8");
    const data = JSON.parse(jsonData);
    item = data.find((item: { id: string }) => item.id === id);
    if (!item) {
      return redirect("/admin");
    }
  } catch (err) {
    console.log("Error fetching item:", err);
    redirect("/admin");
  }

  return (
    <div className="flex min-h-screen justify-center items-center p-4">
      <form
        action={updateLink}
        className="w-full max-w-md bg-white shadow-md rounded-lg p-6"
      >
        <div className="flex flex-col mb-3 gap-1">
          <label htmlFor="title" className="text-sm font-medium text-gray-700">
            Título
          </label>
          <input
            type="text"
            id="title"
            defaultValue={item.title}
            name="title"
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div className="flex flex-col mb-6 gap-1">
          <label htmlFor="url" className="text-sm font-medium text-gray-700">
            URL
          </label>
          <input
            type="url"
            id="url"
            defaultValue={item.url}
            name="url"
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <input type="hidden" name="id" value={item.id} />
        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
        >
          Atualizar Link
        </button>
      </form>
    </div>
  );
}
