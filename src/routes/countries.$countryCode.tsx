import NotFound from "@/components/NotFound";
import BackButton from "@/components/ui/BackButton";
import { useBorderCountries, useCountry } from "@/lib/hooks";
import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import { Loader2 } from "lucide-react";

export const Route = createFileRoute("/countries/$countryCode")({
  component: CountryDetails,
});

function CountryDetails() {
  const { countryCode } = useParams({ strict: false });

  const { isPending, error, data: country } = useCountry(countryCode);

  const { data: borderCountries = [], isLoading: isBorderCountriesLoading } =
    useBorderCountries(country?.borders);

  if (error) return <NotFound type="Country" />;

  return (
    <main className="grid gap-16 px-7 pt-10 pb-[60px] xl:p-[80px]">
      <BackButton />
      {isPending ? (
        <div className="flex justify-center items-center min-h-[400px]">
          <Loader2 className="h-8 w-8 animate-spin" />
        </div>
      ) : (
        <div className="grid xl:grid-cols-[9fr_10fr] gap-[44px] xl:gap-[144px] xl:justify-between items-center">
          <div className="max-w-[320px] xl:max-w-none xl:w-[560px] xl:h-[400px] overflow-hidden rounded-[5px] xl:rounded-[10px]">
            <img
              className="w-full h-full object-cover"
              src={country.flags["svg"]}
              alt={`flag of ${country.name}`}
            />
          </div>
          <div className="grid gap-[34px]">
            <div className="grid gap-4 xl:gap-6">
              <h1 className="text-dark-blue-300 dark:text-white font-extrabold text-[22px] xl:text-[32px]">
                {country.name.common}
              </h1>
              <div className="flex flex-col xl:flex-row gap-8 xl:gap-[118px] text-dark-blue-300 dark:text-white text-[14] leading-8">
                <div className="grid">
                  <p className="font-light">
                    <span className="font-semibold">Native Name: </span>
                    {Object.values(country.name.nativeName).map(
                      (native, index) => (
                        <span key={index}>
                          {native.official}
                          {index <
                          Object.values(country.name.nativeName).length - 1
                            ? ", "
                            : ""}
                        </span>
                      )
                    )}
                  </p>
                  <CountryFact
                    label="Population"
                    value={country.population.toLocaleString()}
                  />
                  <CountryFact label="Region" value={country.region} />
                  <CountryFact label="Sub Region" value={country.subregion} />
                  <CountryFact label="Capital" value={country.capital} />
                </div>
                <div className="flex flex-col">
                  <CountryFact label="Top Level Domain" value={country.tld} />
                  <CountryFact label="Currencies" value={country.currencies} />
                  <CountryFact label="Languages" value={country.languages} />
                </div>
              </div>
            </div>
            <div className="flex flex-col xl:flex-row gap-4">
              <h3 className="text-dark-blue-300 dark:text-white leading-6 font-bold">
                Border Countries:
              </h3>
              {country.borders && (
                <div className="flex gap-[10px] flex-wrap text-[12px] text-dark-blue-300 dark:text-white">
                  {country.borders.map((borderCountry) => {
                    const matchingCountry = borderCountries.find(
                      (country) => country.cca3 === borderCountry
                    );

                    return (
                      <Link
                        key={borderCountry}
                        to={`/countries/${borderCountry}`}
                        params={{
                          countryCode: borderCountry,
                        }}
                        className="bg-white dark:bg-dark-blue-100 flex justify-center items-center py-1.5 min-w-24 rounded-[2px] shadow-custom-5 transition-all hover:scale-105 hover:opacity-80"
                      >
                        {isBorderCountriesLoading ? (
                          <Loader2 />
                        ) : (
                          matchingCountry?.name.common
                        )}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

type Fact = string | number;
type FactObject = Record<string, { name: string } | string>;

interface CountryFactProps {
  label: string;
  value?: Fact | Fact[] | FactObject;
  separator?: string;
}

function CountryFact({ label, value, separator = ", " }: CountryFactProps) {
  const renderValue = () => {
    if (!value) return null;

    if (typeof value === "string") {
      return value;
    }

    if (typeof value === "number") {
      return value.toString();
    }

    if (Array.isArray(value)) {
      return value.join(separator);
    }

    if (typeof value === "object") {
      return Object.values(value).map((item, index, array) => {
        const displayValue = typeof item === "object" ? item.name : item;
        return index === array.length - 1
          ? displayValue
          : `${displayValue}${separator}`;
      });
    }
    return null;
  };

  return (
    <p className="font-light">
      <span className="font-semibold">{label}: </span>
      {renderValue()}
    </p>
  );
}
