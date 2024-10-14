import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function RegionFilter() {
  return (
    <Select>
      <SelectTrigger className="w-[200px] text-xs text-dark-blue-300 border-none shadow-md ">
        <SelectValue placeholder="Filter by Region" />
      </SelectTrigger>
      <SelectContent className="text-xs text-dark-blue-300 border-none">
        <SelectItem value="africa">Africa</SelectItem>
        <SelectItem value="america">America</SelectItem>
        <SelectItem value="asia">Asia</SelectItem>
        <SelectItem value="europe">Europe</SelectItem>
        <SelectItem value="oceania">Oceania</SelectItem>
      </SelectContent>
    </Select>
  );
}
