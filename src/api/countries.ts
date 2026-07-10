import { API_KEY, API_URL, FIELDS_BASIC, FIELDS_COUNTRY } from "@/lib/constants";
import {
  countriesSchema,
  countrySchema,
  rawCountriesEnvelopeSchema,
  rawCountryEnvelopeSchema,
  RawCountryDetail,
  RawCountryListItem,
} from "@/lib/schemas";

const PAGE_LIMIT = 100;
const MAX_PAGES = 10;

function authHeaders() {
  return { Authorization: `Bearer ${API_KEY}` };
}

function mapListItem(raw: RawCountryListItem) {
  return {
    name: { common: raw.names.common },
    cca3: raw.codes.alpha_3,
    region: raw.region,
    population: raw.population,
    capital: raw.capitals?.map((capital) => capital.name) ?? [],
    flags: { svg: raw.flag.url_svg },
  };
}

function mapCountryDetail(raw: RawCountryDetail) {
  return {
    name: {
      common: raw.names.common,
      nativeName: raw.names.native ?? {},
    },
    flags: { svg: raw.flag.url_svg },
    population: raw.population,
    region: raw.region,
    subregion: raw.subregion,
    capital: raw.capitals?.map((capital) => capital.name) ?? [],
    tld: raw.tlds ?? [],
    currencies: Object.fromEntries(
      (raw.currencies ?? []).map((currency) => [
        currency.code,
        { name: currency.name, symbol: currency.symbol },
      ])
    ),
    languages: Object.fromEntries(
      (raw.languages ?? []).map((language) => [
        language.bcp47 ?? language.iso639_1 ?? language.name,
        language.name,
      ])
    ),
    borders: raw.borders,
  };
}

export async function getCountries() {
  try {
    const items: RawCountryListItem[] = [];

    for (let page = 0; page < MAX_PAGES; page++) {
      const offset = page * PAGE_LIMIT;
      const response = await fetch(
        `${API_URL}?limit=${PAGE_LIMIT}&offset=${offset}&${FIELDS_BASIC}`,
        { headers: authHeaders() }
      );
      if (!response.ok) {
        throw new Error("Countries not found");
      }
      const json = await response.json();
      const parsed = rawCountriesEnvelopeSchema.parse(json);

      items.push(...parsed.data.objects);

      const gotFullPage = parsed.data.objects.length === PAGE_LIMIT;
      const more = parsed.data.meta.more ?? gotFullPage;
      if (!more || parsed.data.objects.length === 0) break;
    }

    const recognizedItems = items.filter(
      (item) => item.codes.alpha_3 && item.flag.url_svg
    );

    return countriesSchema.parse(recognizedItems.map(mapListItem));
  } catch (error) {
    console.error("Error fetching countries:", error);
    throw error;
  }
}

export async function getCountry(countryCode: string | undefined) {
  try {
    if (!countryCode) {
      throw new Error("Country code is required");
    }
    const response = await fetch(
      `${API_URL}/codes.alpha_3/${countryCode}?${FIELDS_COUNTRY}`,
      { headers: authHeaders() }
    );
    if (!response.ok) {
      throw new Error("Network Error");
    }
    const json = await response.json();
    const parsed = rawCountryEnvelopeSchema.parse(json);
    const raw = parsed.data.objects[0];
    if (!raw) {
      throw new Error("Country not found");
    }
    return countrySchema.parse(mapCountryDetail(raw));
  } catch (error) {
    console.error("Error fetching countries:", error);
    throw error;
  }
}
