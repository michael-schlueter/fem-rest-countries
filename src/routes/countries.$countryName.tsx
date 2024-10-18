import { createFileRoute, useParams } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/countries/$countryName")({
  component: CountryDetails,
});

function CountryDetails() {
  const { countryName } = useParams({ strict: false });
  return (
    <main className="grid gap-16 px-7 pt-10 pb-[60px]">
      <button className="max-w-[104px] flex justify-center items-center gap-2 px-6 py-1.5 text-dark-blue-300 dark:text-white bg-white dark:bg-dark-blue-100 rounded-[2px] shadow-custom-4">
        <ArrowLeft />
        <span className="text-xs">Back</span>
      </button>
      <div className="flex flex-col gap-[44px]">
        <div className="w-[320px] h-[229px] overflow-hidden rounded-[5px]">
          <img
            className="w-full h-full object-cover"
            src="https://flagcdn.com/be.svg"
          />
        </div>
        <div className="grid gap-[34px]">
          <div className="grid gap-4">
            <h2 className="text-dark-blue-300 dark:text-white font-extrabold text-[22px]">
              Belgium
            </h2>
            <div className="grid gap-8 text-dark-blue-300 dark:text-white text-[14] leading-8">
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
                  <span className="font-semibold">Caoital: </span>Brussels
                </p>
              </div>
              <div className="grid">
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
          <div className="grid gap-4">
            <h3 className="text-dark-blue-300 dark:text-white leading-6 font-bold">
              Border Countries:
            </h3>
            <div className="flex gap-[10px] flex-wrap text-[12px] text-dark-blue-300 dark:text-white">
              <div className="bg-white dark:bg-dark-blue-100 flex justify-center items-center py-1.5 min-w-24 rounded-[2px] shadow-custom-5">
                Germany
              </div>
              <div className="bg-white dark:bg-dark-blue-100 flex justify-center items-center py-1.5 min-w-24 rounded-[2px] shadow-custom-5">
                Netherlands
              </div>
              <div className="bg-white dark:bg-dark-blue-100 flex justify-center items-center py-1.5 min-w-24 rounded-[2px] shadow-custom-5">
                France
              </div>
              <div className="bg-white dark:bg-dark-blue-100 flex justify-center items-center py-1.5 min-w-24 rounded-[2px] shadow-custom-5">
                France
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
