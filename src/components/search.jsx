import { MagnifyingGlass } from "@phosphor-icons/react";

export function Search() {
  return (
    <div
      className="w-full flex items-center justify-between"
    >
      <input
        className="
        border-0
        outline-0
        bg-indigo-200
        text-indigo-900
        py-[0.625rem]
        px-[1.625rem]
        h-[3.75rem]
        rounded-3xl
        w-9/12
        text-[1.12rem]
        "
        type="text"
        placeholder="Enter City Name"
        spellCheck="false"
      />
      <button
        className="
       border-0
       outline-0
       bg-indigo-200
       rounded-full
       w-[3.75rem]
       h-[3.75rem]  
       cursor-pointer
     text-indigo-900"
      >
        <MagnifyingGlass size={24} className="mx-auto" />
      </button>
    </div>
  );
}
