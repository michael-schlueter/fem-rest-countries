export default function CountryCard() {
  return (
    <div className="rounded-[5px] shadow-md overflow-hidden">
      <img className="w-full" src="https://flagcdn.com/w320/af.png" />
      <div className="grid gap-4 p-6 pb-[46px] bg-white">
        <h2 className="text-dark-blue-300 text-2xl font-extrabold">
          United States of America
        </h2>
        <div>
          <p className="text-base text-dark-blue-300 font-light">
            <span className="font-semibold">Population: </span>323,947,000
          </p>
          <p className="text-base text-dark-blue-300 font-light">
            <span className="font-semibold">Region: </span>Americas
          </p>
          <p className="text-base text-dark-blue-300 font-light">
            <span className="font-semibold">Capital: </span>Washington D.C.
          </p>
        </div>
      </div>
    </div>
  );
}
