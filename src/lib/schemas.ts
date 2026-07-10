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
  subregion: z.string().optional(),
  capital: z.array(z.string()),
  tld: z.array(z.string()),
  currencies: z.record(currencySchema),
  languages: z.record(languageSchema),
  borders: z.array(z.string()).optional(),
});

// Raw REST Countries v5 API shapes (https://restcountries.com/docs)

const rawNameSchema = z.object({
  common: z.string(),
  native: z
    .record(
      z.object({
        official: z.string(),
      })
    )
    .optional(),
});

const rawCapitalSchema = z.object({
  name: z.string(),
});

const rawFlagSchema = z.object({
  url_svg: z.string(),
});

const rawCodesSchema = z.object({
  alpha_3: z.string(),
});

const rawCurrencySchema = z.object({
  code: z.string(),
  name: z.string(),
  symbol: z.string().optional(),
});

const rawLanguageSchema = z.object({
  bcp47: z.string().optional(),
  iso639_1: z.string().optional(),
  name: z.string(),
});

export const rawCountryListItemSchema = z.object({
  names: rawNameSchema,
  capitals: z.array(rawCapitalSchema).optional(),
  flag: rawFlagSchema,
  population: z.number(),
  region: z.string(),
  codes: rawCodesSchema,
});

export const rawCountryDetailSchema = rawCountryListItemSchema.extend({
  subregion: z.string().optional(),
  tlds: z.array(z.string()).optional(),
  currencies: z.array(rawCurrencySchema).optional(),
  languages: z.array(rawLanguageSchema).optional(),
  borders: z.array(z.string()).optional(),
});

function rawEnvelopeSchema<T extends z.ZodTypeAny>(objectSchema: T) {
  return z.object({
    data: z.object({
      objects: z.array(objectSchema),
      meta: z
        .object({
          total: z.number().optional(),
          more: z.boolean().optional(),
        })
        .passthrough(),
    }),
  });
}

export const rawCountriesEnvelopeSchema = rawEnvelopeSchema(
  rawCountryListItemSchema
);
export const rawCountryEnvelopeSchema = rawEnvelopeSchema(
  rawCountryDetailSchema
);

export type RawCountryListItem = z.infer<typeof rawCountryListItemSchema>;
export type RawCountryDetail = z.infer<typeof rawCountryDetailSchema>;
