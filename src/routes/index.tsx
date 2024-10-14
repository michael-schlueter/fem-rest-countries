import { createFileRoute } from "@tanstack/react-router";
import RegionFilter from "../components/RegionFilter";
import SearchBar from "../components/SearchBar";
import CountryCard from "@/components/CountryCard";
import countries from "@/data.json";
import { useState } from "react";

export type Countries = typeof countries;

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  const [searchTerm, setSearchTerm] = useState("");
  const [region, setRegion] = useState("");

  const filteredCountries = countries
    .filter((country) => {
      if (searchTerm === "") {
        return country;
      } else if (
        country.name.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return country;
      } else {
        return false;
      }
    })
    .filter((filteredCountry) => {
      if (region === "" || region === "reset") {
        return filteredCountry;
      } else if (filteredCountry.region.toLowerCase() === region) {
        return filteredCountry;
      } else {
        return false;
      }
    });

  return (
    <main className="px-4 pt-6 flex flex-col gap-[30px]">
      <div className="flex flex-col gap-10">
        <SearchBar setSearchTerm={setSearchTerm} />
        <RegionFilter region={region} setRegion={setRegion} />
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
