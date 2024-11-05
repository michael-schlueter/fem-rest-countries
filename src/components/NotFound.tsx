import { useRouter } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

type NotFoundProps = {
  type: "Page" | "Country";
};

export default function NotFound({ type }: NotFoundProps) {
  const router = useRouter();
  
  return (
    <div className="flex justify-center items-center flex-col gap-6 mt-28">
      <button
        onClick={() => router.history.back()}
        className="w-full max-w-[104px] xl:max-w-[136px] flex justify-center items-center gap-2 xl:gap-[10px] py-1.5 xl:py-[10px] text-dark-blue-300 dark:text-white bg-white dark:bg-dark-blue-100 rounded-[2px] xl:rounded-[6px] shadow-custom-4 transition-all hover:scale-105 hover:opacity-80"
      >
        <ArrowLeft className="-ml-[4px]" />
        <span className="-ml-[2px] text-xs">Back</span>
      </button>
      <h2 className="font-extrabold text-3xl">{type} not found</h2>
    </div>
  );
}
