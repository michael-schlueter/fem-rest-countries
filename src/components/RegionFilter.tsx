import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { Countries } from "@/routes/index";

type RegionFilterProps = {
  setFilteredCountries: React.Dispatch<React.SetStateAction<Countries>>;
  defaultCountries: Countries;
};

export default function RegionFilter({
  setFilteredCountries,
  defaultCountries,
}: RegionFilterProps) {
  const [region, setRegion] = useState("");

  const handleChange = (value: string) => {
    setRegion(value);
    setFilteredCountries(
      defaultCountries.filter((country) => {
        return country.region.toLowerCase() === value;
      })
    );
  };

  return (
    <Select value={region} onValueChange={handleChange}>
      <SelectTrigger className="w-[200px] text-xs text-dark-blue-300 border-none shadow-md ">
        <SelectValue placeholder="Filter by Region" />
      </SelectTrigger>
      <SelectContent className="text-xs text-dark-blue-300 border-none">
        <SelectItem value="africa">Africa</SelectItem>
        <SelectItem value="americas">America</SelectItem>
        <SelectItem value="asia">Asia</SelectItem>
        <SelectItem value="europe">Europe</SelectItem>
        <SelectItem value="oceania">Oceania</SelectItem>
      </SelectContent>
    </Select>
  );
}
