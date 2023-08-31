import { z } from "zod";

export const nameSchema = z.object({
  name: z
    .string()
    .min(1, { message: "The characters length must be at least 1 character!" })
    .regex(/[\w]/gi, {
      message: "The characters must be alphabet, or number!",
    }),
});
