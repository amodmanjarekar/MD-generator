import { useGeneratorStore } from "@/app/config";
import { philosophies } from "./options";
import { Plus, X } from "lucide-react";

export default function Philosophies() {
  const selected = useGeneratorStore(s => s.design).philosophies;
  const updatePhilosophies = useGeneratorStore(s => s.updateDesign);

  function toggleSelection(item: string, isSelected: boolean) {
    const updated = isSelected
      ? selected.filter((x) => x !== item)
      : [...selected, item];
    
    updatePhilosophies({
      philosophies: updated
    })
  }

  return (
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
              onClick={() => toggleSelection(item, isSelected)}
              className={`
                flex items-center gap-1 rounded-md border px-3 py-1 text-sm transition
                ${
                  isSelected
                    ? "border-green-600 bg-green-500 text-white"
                    : "border-gray-600 bg-gray-300 dark:bg-gray-800 dark:text-gray-200 hover:bg-gray-100"
                }
              `}
            >
              <span>{item}</span>

              {isSelected ? (
                <X
                  size={14}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleSelection(item, isSelected);
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
  )
}
