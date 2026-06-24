import { Plus, Trash2 } from "lucide-react";
import { useState } from "react";

export default function Colors() {
  const [colors, setColors] = useState([
    { role: "Primary", hex: "#000099" },
    { role: "Title Blue", hex: "#0d3d6e" },
    { role: "Primary Red", hex: "#E80011" },
    { role: "Secondary Accent", hex: "#d53643" },
    { role: "Background", hex: "#ffffff" },
    { role: "Surface", hex: "#f2f2f2" },
    { role: "Border", hex: "#cfcfcf" },
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
    <div className="w-full max-w-4xl rounded-lg border border-gray-700 p-4">
        <div className="mb-4 flex justify-between">
          <h3 className="text-lg font-medium">Color Palette</h3>

          <button
            type="button"
            onClick={addColor}
            className="flex items-center gap-2 rounded-md border border-gray-600 px-3 py-2 text-sm hover:bg-gray-800"
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
                className="w-48 rounded border px-3 py-2 text-sm"
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
                className="w-40 rounded border px-3 py-2 text-sm"
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
  )
}
