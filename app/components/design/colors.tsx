import { Plus, Trash2 } from "lucide-react";
import { useState } from "react";

export default function Colors() {
  const [colors, setColors] = useState([
    { role: "Primary", hex: "#000099" },
    { role: "Title Blue", hex: "#0d3d6e" },
    { role: "Primary Text", hex: "#030202" },
  ]);

  const deleteColor = (indexToDelete: number) => {
    setColors((prev) => prev.filter((_, index) => index !== indexToDelete));
  };
  const addColor = () => {
    setColors((prev) => [
      ...prev,
      {
        role: "",
        hex: "#000000",
      },
    ]);
  };


  return (
     <div className="w-full max-w-4xl">
      < label className="mb-2 block text-lg font-medium">Color Palette</label>
      <div className="w-full max-w-4xl rounded-lg border border-gray-700 p-4">
        <div className="mb-6 flex justify-between">
          <input
            type="text"
            placeholder="Enter palette name"
            className="w-48 border-0 border-b px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-green-500"
          />
          <button
            type="button"
            onClick={addColor}
            className="flex items-center gap-2 border-0 border-b px-3 py-2 text-sm active:bg-green-500 active:ring-1 active:ring-green-900 active:rounded-md active:text-white"
          >
            <Plus size={16} />
            Add Color
          </button>
        </div>

        <div className="space-y-2">
          {colors.map((color, index) => (
            <div key={index} className="flex items-center gap-3">
              <input
                type="color"
                value={color.hex}
                onChange={(e) => {
                  setColors((prev) =>
                    prev.map((c, i) =>
                      i === index ? { ...c, hex: e.target.value } : c,
                    ),
                  );
                }}
                className="h-10 w-10 cursor-pointer rounded-full border-none appearance-none p-0"
              />

              <input
                value={color.role}
                placeholder="Role"
                onChange={(e) => {
                  setColors((prev) =>
                    prev.map((c, i) =>
                      i === index ? { ...c, role: e.target.value } : c,
                    ),
                  );
                }}
                className="w-48 rounded border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />

              <input
                value={color.hex}
                onChange={(e) => {
                  setColors((prev) =>
                    prev.map((c, i) =>
                      i === index ? { ...c, hex: e.target.value } : c,
                    ),
                  );
                }}
                className="w-40 rounded border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />

              {
                colors.length > 1 && (
                  <button
              type="button"
              onClick={() => deleteColor(index)}
              className="rounded p-2 text-gray-400 transition-colors hover:bg-red-500/10 hover:text-red-500">
                <Trash2 size={18}/>
              </button>
                )
              }
            </div>
          ))}
        </div>
      </div>
     </div>
  )
}
