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
      <SelectTrigger className="w-[200px] h-12 md:h-14 text-xs md:text-lg text-dark-blue-300 dark:text-white dark:bg-dark-blue-400 py-[14px] md:py-[18px] px-6 border-none shadow-custom-3">
        <SelectValue placeholder="Filter by Region" />
      </SelectTrigger>
      <SelectContent className="text-xm text-dark-blue-300 dark:text-white dark:bg-dark-blue-400 border-none">
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
