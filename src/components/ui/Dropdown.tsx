import { ChevronDown } from "lucide-react";

import { useState } from "react";

export default function Dropdown({
  items,
  text,
}: {
  items: { name: string; link: string }[];
  text: string;
}) {
  const [isActiveDropdown, setIsActiveDropdown] = useState(false);

  return (
    <div
      data-state={isActiveDropdown ? "open" : "closed"}
      className="relative group text-black"
    >
      <button
        aria-haspopup="listbox"
        aria-expanded={isActiveDropdown}
        onBlur={() => {
          setIsActiveDropdown(false);
        }}
        onClick={() => {
          setIsActiveDropdown(!isActiveDropdown);
        }}
        className="brutalDropdown bg-white"
      >
        <div className="mx-auto flex items-center justify-center min-w-[150px] w-full">
          {text}
          <ChevronDown
            className={
              "ml-2 h-5 w-5 transition-transform group-data-[state=open]:rotate-180 group-data-[state=closed]:rotate-0 ease-in-out"
            }
          />
        </div>
      </button>
      <div
        role="listbox"
        className="absolute left-2 w-full group-data-[state=open]:top-11 group-data-[state=open]:opacity-100 group-data-[state=closed]:invisible group-data-[state=closed]:top-[50px] group-data-[state=closed]:opacity-0 group-data-[state=open]:visible rounded-md border-2 border-border dark:border-darkBorder text-center font-base shadow-light dark:shadow-dark transition-all"
      >
        {items.map((item, index) => {
          return (
            <a
              key={index}
              href={item.link}
              target="_blank"
              className="block w-full border-b border-border dark:border-darkBorder bg-white hover:bg-slate-100 px-7 py-3 no-underline first:rounded-t-md last:rounded-b-md hover:bg-mainAccent"
            >
              {item.name}
            </a>
          );
        })}
      </div>
    </div>
  );
}
