import { z } from "zod";

export const countriesSchema = z.array(
  z.object({
    name: z.object({
      common: z.string(),
    }),
    cca3: z.string(),
    region: z.string(),
    population: z.number(),
    capital: z.array(z.string()),
    flags: z.object({
      svg: z.string().url(),
    }),
  })
);

const currencySchema = z.object({
  name: z.string(),
  symbol: z.string().optional(),
});

const languageSchema = z.string();
const nameSchema = z.object({
  common: z.string(),
  nativeName: z.record(
    z.object({
      official: z.string(),
    })
  ),
});

export const countrySchema = z.object({
  name: nameSchema,
  flags: z.object({
    svg: z.string().url(),
  }),
  population: z.number(),
  region: z.string(),
  subregion: z.string(),
  capital: z.array(z.string()),
  tld: z.array(z.string()),
  currencies: z.record(currencySchema),
  languages: z.record(languageSchema),
  borders: z.array(z.string()).optional(),
});

const borderCountrySchema = z.object({
  name: z.object({
    common: z.string(),
  }),
  cca3: z.string()
});

export const borderCountriesSchema = z.array(borderCountrySchema);
