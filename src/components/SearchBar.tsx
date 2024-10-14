import { Search } from "lucide-react";

type SearchBarProps = {
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
};

export default function SearchBar({ setSearchTerm }: SearchBarProps) {
  return (
    <div className="relative w-full">
      <div className="absolute inset-y-0 left-8 flex items-center pointer-events-none">
        <Search className="h-4 w-4 text-gray" />
      </div>
      <input
        type="text"
        placeholder="Search for a country..."
        className="w-full py-4 px-8 pl-16 rounded-[5px] shadow-md text-xs text-dark-blue-300 placeholder:text-dim-gray bg-white focus:outline-none focus:ring-2 focus:ring-dark-gray"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}
