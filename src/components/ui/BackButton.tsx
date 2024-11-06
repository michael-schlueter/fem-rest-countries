import { useRouter } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

type BackButtonProps = {
    className?: string;
}

export default function BackButton({ className = "" }) {
    const router = useRouter();
  return (
    <button
      onClick={() => router.history.back()}
      className={`w-full max-w-[104px] xl:max-w-[136px] flex justify-center items-center gap-2 xl:gap-[10px] py-1.5 xl:py-[10px] text-dark-blue-300 dark:text-white bg-white dark:bg-dark-blue-100 rounded-[2px] xl:rounded-[6px] shadow-custom-4 transition-all hover:scale-105 hover:opacity-80 ${className}`}
    >
      <ArrowLeft className="-ml-[4px]" />
      <span className="-ml-[2px] text-xs">Back</span>
    </button>
  );
}
