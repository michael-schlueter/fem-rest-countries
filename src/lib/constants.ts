export const API_URL = "https://api.restcountries.com/countries/v5";
export const API_KEY = import.meta.env.VITE_RESTCOUNTRIES_API_KEY as string;

export const FIELDS_BASIC =
  "response_fields=names,capitals,flag,population,region,codes";

export const FIELDS_COUNTRY =
  "response_fields=names,capitals,flag,population,region,subregion,tlds,currencies,languages,codes,borders";
