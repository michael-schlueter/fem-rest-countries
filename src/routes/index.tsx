import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import RegionFilter from "../components/RegionFilter";
import SearchBar from "../components/SearchBar";
import CountryCard from "@/components/CountryCard";
import countries from "@/data.json";

export type Countries = typeof countries;

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  const [defaultCountries, setDefaultCountries] = React.useState(countries);
  const [filteredCountries, setFilteredCountries] = React.useState(countries);
  
  return (
    <main className="px-4 pt-6 flex flex-col gap-[30px]">
      <div className="flex flex-col gap-10">
        <SearchBar />
        <RegionFilter
          defaultCountries={defaultCountries}
          setFilteredCountries={setFilteredCountries}
        />
      </div>
      <div className="max-w-[336px] grid gap-10 mx-auto ov">
        {filteredCountries.map((country) => (
          <CountryCard
            key={country.alpha3Code}
            name={country.name}
            imagePath={country.flags["svg"]}
            region={country.region}
            capital={country.capital}
            population={country.population}
          />
        ))}
      </div>
    </main>
  );
}
