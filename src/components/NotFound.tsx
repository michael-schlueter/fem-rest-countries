import BackButton from "./ui/BackButton";

type NotFoundProps = {
  type: "Page" | "Country";
};

export default function NotFound({ type }: NotFoundProps) {
  return (
    <div className="flex justify-center items-center flex-col gap-6 mt-28">
      <BackButton />
      <h2 className="font-extrabold text-3xl">{type} not found</h2>
    </div>
  );
}
