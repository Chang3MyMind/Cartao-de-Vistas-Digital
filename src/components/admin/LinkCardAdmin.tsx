import LinkCard from "@/components/LinkCard";
import deleteLink from "@/action/deleteLink";
import Link from "next/link";

type LinkCardAdminProps = {
  id: string;
  title: string;
  url: string;
};

export default function LinkCardAdmin({ id, title, url }: LinkCardAdminProps) {
  return (
    <div className="flex items-center justify-between gap-4 p-2 bg-gray-100 rounded-md">
      <div className="flex-grow">
        <LinkCard title={title} url={url} />
      </div>

      <div className="flex gap-2">
        <form action={deleteLink}>
          <input type="hidden" name="id" value={id} />
          <button
            type="submit"
            className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition cursor-pointer"
          >
            Deletar
          </button>
        </form>
        <div className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
          <Link href={`/admin/edit/${id}`}>Editar</Link>
        </div>
      </div>
    </div>
  );
}
