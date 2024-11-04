import { API_URL, FIELDS_BASIC, FIELDS_BORDER } from "@/lib/constants";
import { borderCountriesSchema, countriesSchema, countrySchema } from "@/lib/schemas";

export async function getCountries() {
  try {
    const response = await fetch(
      `${API_URL}/all?${FIELDS_BASIC}`
    );
    if (!response.ok) {
      throw new Error("Countries not found");
    }
    const data = await response.json();
    return countriesSchema.parse(data);
  } catch (error) {
    console.error("Error fetching countries:", error);
    throw error;
  }
}

export async function getCountry(countryCode: string | undefined) {
    try {
      const response = await fetch(
        `https://restcountries.com/v3.1/alpha/${countryCode}`
      );
      if (!response.ok) {
        throw new Error("Network Error");
      }
      const data = await response.json();
      return countrySchema.parse(data[0]);
    } catch (error) {
      console.error("Error fetching countries:", error);
      throw error;
    }
  }

export async function getBorderCountries(borders: string[]) {
    if (!borders.length) return [];
  
    const response = await fetch(
      `${API_URL}/alpha?codes=${borders.join(",")}&${FIELDS_BORDER}`
    );
  
    if (!response.ok) {
      throw new Error("Network Error");
    }
  
    const data = await response.json();
    return borderCountriesSchema.parse(data);
  }