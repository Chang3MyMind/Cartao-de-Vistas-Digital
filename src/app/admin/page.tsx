import addLink from "@/action/linkActions";

export default function AdminPage() {
  return (
    <div className="flex min-h-screen justify-center items-center">
      <form action={addLink}>
        <div className="flex flex-col mb-3 gap-1">
          <label htmlFor="title">Titulo</label>
          <input
            type="text"
            name="title"
            placeholder="Digite o titulo da informação"
          />
        </div>
        <div className="flex flex-col mb-3 gap-1">
          <label htmlFor="url">URL</label>
          <input type="text" name="url" placeholder="Digite a url" />
        </div>
        <button>Adicionar Link</button>
      </form>
    </div>
  );
}
