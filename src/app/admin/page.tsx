import addLink from "@/action/linkActions";

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
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
        >
          Adicionar Link
        </button>
      </form>
    </div>
  );
}
