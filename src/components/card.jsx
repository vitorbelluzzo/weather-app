import { Info } from "./info";
import { Search } from "./search";

export function Card() {
  return (
    <div
      className="w-[90%] max-w-[29.375rem] text-center mt-[6.25rem] mx-auto mb-0 py-10 px-[2rem] rounded-2xl text-white bg-gradient-to-r from-sky-500 to-indigo-500"
    >
      <Search />
      <Info />
    </div>
  );
}
