import { z } from "zod";

export const validateformSchema = z.object({
  title: z.string().min(3),
  url: z.url(),
});

export const validateLoginSchema = z.object({
  email: z.email("Insira um email válido"),
  password: z.string().min(8, "A senha deve ter no mínimo 8 caracteres"),
});
