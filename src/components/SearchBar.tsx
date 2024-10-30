import { Search } from "lucide-react";
import { useEffect, useState } from "react";

type SearchBarProps = {
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
};

export default function SearchBar({ setSearchTerm }: SearchBarProps) {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      setSearchTerm(inputValue);
    }, 300); // Debounce time of 300ms

    return () => {
      clearTimeout(handler);
    };
  }, [inputValue, setSearchTerm]);

  return (
    <div className="relative w-full max-w-[480px] shadow-custom-3">
      <div className="absolute inset-y-0 left-8 flex items-center pointer-events-none">
        <Search className="h-4 w-4 md:h-[18px] md:w-[18px] text-gray dark:text-white" />
      </div>
      <input
        type="text"
        placeholder="Search for a country..."
        className="w-full py-4 md:py-[18px] px-8 pl-16 rounded-[5px] text-xs md:text-lg text-dark-blue-300 dark:text-white placeholder:text-dim-gray bg-white dark:bg-dark-blue-400 focus:outline-none focus:ring-2 focus:ring-dark-gray"
        onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  );
}
