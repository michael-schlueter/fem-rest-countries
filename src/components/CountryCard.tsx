type CountryCardProps = {
  name: string;
  imagePath: string;
  region: string;
  capital: string | undefined;
  population: number;
};

export default function CountryCard({
  name,
  imagePath,
  region,
  capital = "No capital",
  population,
}: CountryCardProps) {
  return (
    <div className="rounded-[5px] shadow-md overflow-hidden">
      <div className="w-[264px] h-[160px] overflow-hidden">
        <img className="w-full h-full object-cover" src={imagePath} />
      </div>
      <div className="grid gap-4 p-6 pb-[46px] bg-white dark:bg-dark-blue-400">
        <h2 className="text-dark-blue-300 dark:text-white text-2xl font-extrabold truncate">
          {name}
        </h2>
        <div className="grid gap-2">
          <p className="text-base text-dark-blue-300 dark:text-white font-light">
            <span className="font-semibold">Population: </span>
            {population}
          </p>
          <p className="text-base text-dark-blue-300 dark:text-white font-light">
            <span className="font-semibold">Region: </span>
            {region}
          </p>
          <p className="text-base text-dark-blue-300 dark:text-white font-light">
            <span className="font-semibold">Capital: </span>
            {capital}
          </p>
        </div>
      </div>
    </div>
  );
}
