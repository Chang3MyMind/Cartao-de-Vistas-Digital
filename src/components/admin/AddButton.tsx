"use client";

import { useFormStatus } from "react-dom";

export default function AddButton() {
  const { pending } = useFormStatus();
  return (
    <>
      <button
        type="submit"
        disabled={pending}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
      >
        {pending ? "Adicionando..." : "Adicionar Link"}
      </button>
    </>
  );
}
