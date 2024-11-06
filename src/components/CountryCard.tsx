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
      className="rounded-[5px] shadow-custom overflow-hidden bg-white dark:bg-dark-blue-400 transition-all hover:scale-105"
    >
      <div className="w-[264px] h-[160px] overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={imagePath}
          alt={`flag of ${name}`}
        />
      </div>
      <div className="grid gap-4 p-6 pb-[46px]">
        <h1 className="text-dark-blue-300 dark:text-white text-2xl font-extrabold truncate">
          {name}
        </h1>
        <div className="grid gap-2">
            <CountryDetail label="Population" value={population.toLocaleString()} />
            <CountryDetail label="Region" value={region} />
            <CountryDetail label="Capital" value={capital} />
        </div>
      </div>
    </Link>
  );
}

interface CountryDetailProps {
  label: string;
  value: string | number | string[];
}

const CountryDetail = ({ label, value }: CountryDetailProps) => {
  return (
    <p className="text-base text-dark-blue-300 dark:text-white font-light">
      <span className="font-semibold">{label}: </span>
      {Array.isArray(value) ? (
        <span>
          {value.map((item, index) => (
            <span key={index}>
              {item}
              {index < value.length - 1 ? ", " : ""}
            </span>
          ))}
        </span>
      ) : (
        <span>{value}</span>
      )}
    </p>
  );
};
