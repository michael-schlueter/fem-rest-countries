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
    <main className="px-4 lg:px-20 pt-6 md:pt-12 flex flex-col gap-[30px] md:gap-12">
      <div className="flex flex-col sm:flex-row sm:justify-between gap-10">
        <SearchBar setSearchTerm={setSearchTerm} />
        <RegionFilter region={region} setRegion={setRegion} />
      </div>
      <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(0,264px))] gap-10 sm:gap-[75px] justify-center">
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
