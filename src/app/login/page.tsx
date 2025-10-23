"use client";

import login from "@/lib/login";
import SubmitButton from "@/components/login/SubmitButton";
import { useActionState } from "react";

export default function LoginPage() {
  const initialState = { message: "" };

  const [state, formAction] = useActionState(login, initialState);

  return (
    <div className="flex min-h-screen justify-center items-center p-4">
      <form
        action={formAction}
        className="w-full max-w-md bg-white shadow-md rounded-lg p-6"
      >
        {state?.message && (
          <div className="mb-4 text-center text-red-500">{state.message}</div>
        )}

        <div className="flex flex-col mb-3 gap-1">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>
        <div className="flex flex-col mb-6 gap-1">
          <label
            htmlFor="password"
            className="text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>

        <SubmitButton />
      </form>
    </div>
  );
}
