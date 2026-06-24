"use client";

import { Plus, X } from "lucide-react";
import { useState } from "react";
import Colors from "./colors";

export default function Design() {
  const [philosophies, setPhilosophies] = useState([
    "Professional",
    "Casual",
    "Premium",
    "Modern",
    "Minimal",
    "Bold",
    "Playful",
    "Trustworthy",
    "Corporate",
    "Friendly",
    "Elegant",
    "Technical",
    "User-Centric",
    "Accessibility-First",
    "Mobile-First",
    "Performance-Oriented",
    "Content-Focused",
    "Dashboard-Centric",
    "Spacious",
    "Compact",
  ]);

  

  const [selected, setSelected] = useState<string[]>([]);

  const toggleSelection = (value: string) => {
    setSelected((prev) =>
      prev.includes(value) ? prev.filter((x) => x !== value) : [...prev, value],
    );
  };  

  return (
    <div className="flex flex-col items-center gap-6">
      {/* Mood */}
      <div className="w-full max-w-4xl ">
        <label className="mb-2 block text-lg font-medium">Mood</label>

        <textarea
          className="
            min-h-40
            w-full
            rounded-md
            bg-taupe-800
            p-3
            border
            border-gray-700
            focus:outline-none
            focus:ring-2
            focus:ring-green-500
          "
          placeholder="Describe the desired mood..."
        />
      </div>

      {/* Design Philosophy */}
      <div className="w-full max-w-4xl">
        <label className="mb-2 block text-lg font-medium">
          Design Philosophy
        </label>

        <div className="flex flex-wrap gap-2 rounded-md border border-gray-700 p-3">
          {philosophies.map((item) => {
            const isSelected = selected.includes(item);

            return (
              <button
                key={item}
                type="button"
                onClick={() => toggleSelection(item)}
                className={`
                  flex items-center gap-1 rounded-md border px-3 py-1 text-sm transition
                  ${
                    isSelected
                      ? "border-green-600 bg-green-500 text-white"
                      : "border-gray-600 bg-gray-800 text-gray-200 hover:bg-gray-700"
                  }
                `}
              >
                <span>{item}</span>

                {isSelected ? (
                  <X
                    size={14}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleSelection(item); // unselect
                    }}
                    className="cursor-pointer"
                  />
                ) : (
                  <Plus size={14} className="cursor-pointer" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      <Colors />
    </div>
  );
}
