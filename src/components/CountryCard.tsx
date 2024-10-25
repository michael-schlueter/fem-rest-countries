import { Link } from "@tanstack/react-router";

type CountryCardProps = {
  name: string;
  imagePath: string;
  region: string;
  capital: string[] | undefined;
  population: number;
  countryCode: string;
};

export default function CountryCard({
  name,
  imagePath,
  region,
  capital = ["No capital"],
  population,
  countryCode,
}: CountryCardProps) {
  return (
    <Link
      to="/countries/$countryCode"
      params={{
        countryCode: countryCode,
      }}
      className="rounded-[5px] shadow-custom overflow-hidden bg-white dark:bg-dark-blue-400"
    >
      <div className="w-[264px] h-[160px] overflow-hidden">
        <img className="w-full h-full object-cover" src={imagePath} />
      </div>
      <div className="grid gap-4 p-6 pb-[46px">
        <h2 className="text-dark-blue-300 dark:text-white text-2xl font-extrabold truncate">
          {name}
        </h2>
        <div className="grid gap-2">
          <p className="text-base text-dark-blue-300 dark:text-white font-light">
            <span className="font-semibold">Population: </span>
            {population.toLocaleString()}
          </p>
          <p className="text-base text-dark-blue-300 dark:text-white font-light">
            <span className="font-semibold">Region: </span>
            {region}
          </p>
          <p className="text-base text-dark-blue-300 dark:text-white font-light">
            <span className="font-semibold">Capital: </span>
            {capital.map((city, index) => (
              <span key={index}>
                {city}
                {index < capital.length - 1 ? ", " : ""}
              </span>
            ))}
          </p>
        </div>
      </div>
    </Link>
  );
}
