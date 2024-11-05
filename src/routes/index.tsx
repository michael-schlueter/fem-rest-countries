import { createFileRoute } from "@tanstack/react-router";
import RegionFilter from "../components/RegionFilter";
import SearchBar from "../components/SearchBar";
import CountryCard from "@/components/CountryCard";
import { useMemo, useState } from "react";
import { useCountries } from "@/lib/hooks";
import { Loader2 } from "lucide-react";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  const [searchTerm, setSearchTerm] = useState("");
  const [region, setRegion] = useState("");

  const { isPending, error, data: countries = [] } = useCountries();

  if (error) return <div>Error: {error.message}</div>;

  const filteredCountries = useMemo(() => {
    return countries
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
  }, [countries, searchTerm, region]);

  return (
    <main className="px-4 lg:px-20 pt-6 md:pt-12 flex flex-col gap-[30px] md:gap-12">
      <div className="flex flex-col sm:flex-row sm:justify-between gap-10">
        <SearchBar setSearchTerm={setSearchTerm} />
        <RegionFilter region={region} setRegion={setRegion} />
      </div>
      {isPending ? (
        <div className="flex justify-center items-center min-h-[400px]">
          <Loader2 className="h-8 w-8 animate-spin" />
        </div>
      ) : (
        <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(0,264px))] gap-10 sm:gap-[75px] justify-center">
          {filteredCountries.map((country) => (
            <CountryCard
              key={country.cca3}
              name={country.name.common}
              imagePath={country.flags["svg"]}
              region={country.region}
              capital={country.capital}
              population={country.population}
              countryCode={country.cca3}
            />
          ))}
        </div>
      )}
    </main>
  );
}
