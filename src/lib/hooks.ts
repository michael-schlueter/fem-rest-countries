import { getBorderCountries, getCountries, getCountry } from "@/api/countries";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export function useCountries() {
  return useQuery({
    queryKey: ["countries"],
    queryFn: getCountries,
  });
}

export function useCountry(countryCode: string | undefined) {
  return useQuery({
    queryKey: ["country", countryCode],
    queryFn: () => getCountry(countryCode),
  });
}

export function useBorderCountries(borders: string[] | undefined) {
  return useQuery({
    queryKey: ["borderCountries", borders],
    queryFn: () => getBorderCountries(borders ?? []),
    enabled: !!borders, // only run query when we have border codes
  });
}

export function useDebounce<T>(value: T, delay: number = 300): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error(error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue] as const;
}

export function useDarkMode() {
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

  const [isDarkMode, setIsDarkMode] = useLocalStorage<boolean>(
    "darkMode",
    prefersDarkMode
  );

  useEffect(() => {
    document.body.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);

  return { isDarkMode, toggleDarkMode };
}
