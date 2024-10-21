import { useQuery } from "@tanstack/react-query";
import { createFileRoute, Link, useParams, useRouter } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/countries/$countryCode")({
  component: CountryDetails,
});

function CountryDetails() {
  const { countryCode } = useParams({ strict: false });
  const router = useRouter();

  return (
    <main className="grid gap-16 px-7 pt-10 pb-[60px] xl:p-[80px]">
      <button
        onClick={() => router.history.back()}
        className="max-w-[104px] xl:max-w-[136px] flex justify-center items-center gap-2 xl:gap-[10px] py-1.5 xl:py-[10px] text-dark-blue-300 dark:text-white bg-white dark:bg-dark-blue-100 rounded-[2px] xl:rounded-[6px] shadow-custom-4"
      >
        <ArrowLeft />
        <span className="text-xs">Back</span>
      </button>
      <div className="grid xl:grid-cols-[9fr_10fr] gap-[44px] xl:gap-[144px] xl:justify-between items-center">
        <div className="max-w-[320px] xl:max-w-none xl:w-[560px] xl:h-[400px] overflow-hidden rounded-[5px] xl:rounded-[10px]">
          <img
            className="w-full h-full object-cover"
            src="https://flagcdn.com/be.svg"
          />
        </div>
        <div className="grid gap-[34px]">
          <div className="grid gap-4 xl:gap-6">
            <h2 className="text-dark-blue-300 dark:text-white font-extrabold text-[22px] xl:text-[32px]">
              Belgium
            </h2>
            <div className="flex flex-col xl:flex-row gap-8 xl:gap-[118px] text-dark-blue-300 dark:text-white text-[14] leading-8">
              <div className="grid">
                <p className="font-light">
                  <span className="font-semibold">Native Name: </span>Belgie
                </p>
                <p className="font-light">
                  <span className="font-semibold">Population: </span>11,319,511
                </p>
                <p className="font-light">
                  <span className="font-semibold">Region: </span>Europe
                </p>
                <p className="font-light">
                  <span className="font-semibold">Sub Region: </span>Western
                  Europe
                </p>
                <p className="font-light">
                  <span className="font-semibold">Capital: </span>Brussels
                </p>
              </div>
              <div className="flex flex-col">
                <p className="font-light">
                  <span className="font-semibold">Top Level Domain: </span>.be
                </p>
                <p className="font-light">
                  <span className="font-semibold">Currencies: </span>Euro
                </p>
                <p className="font-light">
                  <span className="font-semibold">Languages: </span>Dutch,
                  French, German
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col xl:flex-row gap-4">
            <h3 className="text-dark-blue-300 dark:text-white leading-6 font-bold">
              Border Countries:
            </h3>
            <div className="flex gap-[10px] flex-wrap text-[12px] text-dark-blue-300 dark:text-white">
              <Link to="/countries/$countryCode" params={{
                countryCode: "Germany"
              }} className="bg-white dark:bg-dark-blue-100 flex justify-center items-center py-1.5 min-w-24 rounded-[2px] shadow-custom-5">
                Germany
              </Link>
              <Link to="/countries/$countryCode" params={{
                countryCode: "Netherlands"
              }} className="bg-white dark:bg-dark-blue-100 flex justify-center items-center py-1.5 min-w-24 rounded-[2px] shadow-custom-5">
                Netherlands
              </Link>
              <Link to="/countries/$countryCode" params={{
                countryCode: "France"
              }} className="bg-white dark:bg-dark-blue-100 flex justify-center items-center py-1.5 min-w-24 rounded-[2px] shadow-custom-5">
                France
              </Link>
              <Link to="/countries/$countryCode" params={{
                countryCode: "France"
              }} className="bg-white dark:bg-dark-blue-100 flex justify-center items-center py-1.5 min-w-24 rounded-[2px] shadow-custom-5">
                France
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
