import { z } from "zod";

export const appsettingsSchema = z.object({
  contact: z
    .object({
      email: z.string().email().optional(),
      socials: z
        .object({
          linkedin: z.string().url().optional(),
          github: z.string().url().optional(),
        })
        .optional(),
    })
    .optional(),
});

export type Appsettings = z.infer<typeof appsettingsSchema>;

// CHECKED 1.0
