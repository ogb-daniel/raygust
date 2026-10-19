"use client";

import { useState, useRef, useEffect } from "react";
import { Search, X } from "lucide-react";

interface SidebarSearchProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
}

export default function SidebarSearch({
  placeholder = "Search",
  onSearch,
}: SidebarSearchProps) {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      const activeEl = document.activeElement;
      const isInputActive =
        activeEl instanceof HTMLInputElement ||
        activeEl instanceof HTMLTextAreaElement ||
        (activeEl as HTMLElement)?.isContentEditable;

      if (isInputActive && activeEl !== inputRef.current) return;

      if (e.key === "/" && !isInputActive) {
        e.preventDefault();
        inputRef.current?.focus();
      } else if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        inputRef.current?.focus();
      } else if (
        e.key === "Escape" &&
        document.activeElement === inputRef.current
      ) {
        inputRef.current?.blur();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setQuery(val);
    if (onSearch) onSearch(val);
  };

  const handleClear = () => {
    setQuery("");
    if (onSearch) onSearch("");
    inputRef.current?.focus();
  };

  return (
    <div
      onClick={() => inputRef.current?.focus()}
      className={`group relative flex w-full items-center gap-2.5 rounded-xl border bg-white px-3 py-2 text-sm shadow-2xs transition-all duration-150 cursor-text ${
        isFocused
          ? "border-accent/40 ring-2 ring-accent/15 shadow-xs"
          : "border-zinc-200/80 hover:border-zinc-300"
      }`}
    >
      <Search
        className={`h-4 w-4 shrink-0 transition-colors duration-150 ${
          isFocused ? "text-accent" : "text-zinc-400 group-hover:text-zinc-500"
        }`}
      />

      <input
        ref={inputRef}
        type="text"
        value={query}
        onChange={handleChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={placeholder}
        className="w-full bg-transparent text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none leading-none"
      />

      <div className="flex items-center shrink-0">
        {query ? (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleClear();
            }}
            className="cursor-pointer rounded-md p-0.5 text-zinc-400 hover:bg-zinc-100 hover:text-zinc-600 transition-colors"
            title="Clear search"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        ) : (
          <kbd
            className={`pointer-events-none inline-flex h-5 w-5 select-none items-center justify-center rounded-md border border-zinc-200/70 bg-zinc-100/70 text-[11px] font-medium text-zinc-400 transition-opacity duration-150 ${
              isFocused ? "opacity-30" : "opacity-100"
            }`}
          >
            /
          </kbd>
        )}
      </div>
    </div>
  );
}
