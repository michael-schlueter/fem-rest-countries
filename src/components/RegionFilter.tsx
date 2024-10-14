import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type RegionFilterProps = {
  setRegion: React.Dispatch<React.SetStateAction<string>>;
  region: string;
};

export default function RegionFilter({ setRegion, region }: RegionFilterProps) {
  return (
    <Select value={region} onValueChange={(value) => setRegion(value)}>
      <SelectTrigger className="w-[200px] text-xs text-dark-blue-300 border-none shadow-md ">
        <SelectValue placeholder="Filter by Region" />
      </SelectTrigger>
      <SelectContent className="text-xs text-dark-blue-300 border-none">
        <SelectItem value="reset">Filter by Region</SelectItem>
        <SelectItem value="africa">Africa</SelectItem>
        <SelectItem value="americas">America</SelectItem>
        <SelectItem value="asia">Asia</SelectItem>
        <SelectItem value="europe">Europe</SelectItem>
        <SelectItem value="oceania">Oceania</SelectItem>
      </SelectContent>
    </Select>
  );
}
