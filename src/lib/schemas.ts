import { z } from "zod";

export const countriesSchema = z.array(
  z.object({
    name: z.object({
      common: z.string(),
    }),
    region: z.string(),
    population: z.number(),
    capital: z.array(z.string()),
    flags: z.object({
      svg: z.string().url(),
    }),
  })
);
