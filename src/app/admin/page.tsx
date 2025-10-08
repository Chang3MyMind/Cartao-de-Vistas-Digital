import addLink from "@/action/linkActions";
import AddButton from "../../components/admin/AddButton";

export default function AdminPage() {
  return (
    <div className="flex min-h-screen justify-center items-center p-4">
      <form
        action={addLink}
        className="w-full max-w-md bg-white shadow-md rounded-lg p-6"
      >
        <div className="flex flex-col mb-3 gap-1">
          <label htmlFor="title" className="text-sm font-medium text-gray-700">
            Titulo
          </label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Digite o titulo da informação"
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
            name="url"
            placeholder="Digite a url"
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <AddButton />
      </form>
    </div>
  );
}
