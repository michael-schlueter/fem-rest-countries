import { createFileRoute } from "@tanstack/react-router";
import RegionFilter from "../components/RegionFilter";
import SearchBar from "../components/SearchBar";
import CountryCard from "@/components/CountryCard";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { countriesSchema } from "@/lib/schemas";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  const [searchTerm, setSearchTerm] = useState("");
  const [region, setRegion] = useState("");

  const {
    isPending,
    error,
    data: countries,
  } = useQuery({
    queryKey: ["countries"],
    queryFn: getCountries,
  });

  if (isPending) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const filteredCountries = countries
    .filter((country) => {
      if (searchTerm === "") {
        return country;
      } else if (
        country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
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

  async function getCountries() {
    const response = await fetch(
      "https://restcountries.com/v3.1/all?fields=name,capital,flags,population,region"
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return countriesSchema.parse(data);
  }

  return (
    <main className="px-4 lg:px-20 pt-6 md:pt-12 flex flex-col gap-[30px] md:gap-12">
      <div className="flex flex-col sm:flex-row sm:justify-between gap-10">
        <SearchBar setSearchTerm={setSearchTerm} />
        <RegionFilter region={region} setRegion={setRegion} />
      </div>
      <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(0,264px))] gap-10 sm:gap-[75px] justify-center">
        {filteredCountries.map((country) => (
          <CountryCard
            key={country.name.common}
            name={country.name.common}
            imagePath={country.flags["svg"]}
            region={country.region}
            capital={country.capital[0]}
            population={country.population}
          />
        ))}
      </div>
    </main>
  );
}
