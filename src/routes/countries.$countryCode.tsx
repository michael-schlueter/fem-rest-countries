import NotFound from "@/components/NotFound";
import { useBorderCountries, useCountry } from "@/lib/hooks";
import {
  createFileRoute,
  Link,
  useParams,
  useRouter,
} from "@tanstack/react-router";
import { ArrowLeft, Loader2 } from "lucide-react";

export const Route = createFileRoute("/countries/$countryCode")({
  component: CountryDetails,
});

function CountryDetails() {
  const { countryCode } = useParams({ strict: false });
  const router = useRouter();

  const { isPending, error, data: country } = useCountry(countryCode);

  const { data: borderCountries = [], isLoading: isBorderCountriesLoading } =
    useBorderCountries(country?.borders);

  if (error) return <NotFound type="Country" />;

  return (
    <main className="grid gap-16 px-7 pt-10 pb-[60px] xl:p-[80px]">
      <button
        onClick={() => router.history.back()}
        className="max-w-[104px] xl:max-w-[136px] flex justify-center items-center gap-2 xl:gap-[10px] py-1.5 xl:py-[10px] text-dark-blue-300 dark:text-white bg-white dark:bg-dark-blue-100 rounded-[2px] xl:rounded-[6px] shadow-custom-4 transition-all hover:scale-105 hover:opacity-80"
      >
        <ArrowLeft className="-ml-[4px]" />
        <span className="-ml-[2px] text-xs">Back</span>
      </button>
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
                  <p className="font-light">
                    <span className="font-semibold">Population: </span>
                    {country.population.toLocaleString()}
                  </p>
                  <p className="font-light">
                    <span className="font-semibold">Region: </span>
                    {country.region}
                  </p>
                  <p className="font-light">
                    <span className="font-semibold">Sub Region: </span>
                    {country.subregion}
                  </p>
                  <p className="font-light">
                    <span className="font-semibold">Capital: </span>
                    {country.capital.map((city, index) => (
                      <span key={index}>
                        {city}
                        {index < country.capital.length - 1 ? ", " : ""}
                      </span>
                    ))}
                  </p>
                </div>
                <div className="flex flex-col">
                  <p className="font-light">
                    <span className="font-semibold">Top Level Domain: </span>
                    {country.tld.map((domain, index) => (
                      <span key={index}>
                        {domain}
                        {index < country.tld.length - 1 ? ", " : ""}
                      </span>
                    ))}
                  </p>
                  <p className="font-light">
                    <span className="font-semibold">Currencies: </span>
                    {Object.values(country.currencies).map(
                      (currency, index) => (
                        <span key={index}>
                          {currency.name}
                          {index < Object.values(country.currencies).length - 1
                            ? ", "
                            : ""}
                        </span>
                      )
                    )}
                  </p>
                  <p className="font-light">
                    <span className="font-semibold">Languages: </span>
                    {Object.values(country.languages).map((language, index) => (
                      <span key={index}>
                        {language}
                        {index < Object.values(country.languages).length - 1
                          ? ", "
                          : ""}
                      </span>
                    ))}
                  </p>
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
                        {isBorderCountriesLoading
                          ? "Loading"
                          : matchingCountry?.name.common}
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
