import { z } from "zod";

export const validateformSchema = z.object({
  title: z.string().min(3),
  url: z.url(),
});
