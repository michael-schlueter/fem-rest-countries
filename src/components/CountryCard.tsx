type CountryCardProps = {
  name: string;
  imagePath: string;
  region: string;
  capital: string | undefined;
  population: number;
};

export default function CountryCard({ name, imagePath, region, capital = "No capital", population }: CountryCardProps) {
  return (
    <div className="rounded-[5px] shadow-md overflow-hidden">
      <img className="w-full" src={imagePath} />
      <div className="grid gap-4 p-6 pb-[46px] bg-white">
        <h2 className="text-dark-blue-300 text-2xl font-extrabold">{name}</h2>
        <div>
          <p className="text-base text-dark-blue-300 font-light">
            <span className="font-semibold">Population: </span>{population}
          </p>
          <p className="text-base text-dark-blue-300 font-light">
            <span className="font-semibold">Region: </span>{region}
          </p>
          <p className="text-base text-dark-blue-300 font-light">
            <span className="font-semibold">Capital: </span>{capital}
          </p>
        </div>
      </div>
    </div>
  );
}
