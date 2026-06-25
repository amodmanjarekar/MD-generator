import { Plus, Trash2, X } from "lucide-react";
import { useState } from "react";

export default function Colors() {

  const [palettes, setPalettes] = useState([
  {
      name: "",
      colors: [
        { role: "Primary", hex: "#000099" },
        { role: "Title Blue", hex: "#0d3d6e" },
        { role: "Primary Text", hex: "#030202" },
      ],
    },
 ]);

  const addPalette = () => {
    setPalettes((prev) => [
      ...prev,
      {
        name: "",
        colors: [{ role: "", hex: "#000000" }],
      },
    ]);
  };
  
  const deleteColor = (
  paletteIndex: number,
  colorIndex: number
  ) => {
    setPalettes((prev) =>
      prev.map((p, i) =>
        i === paletteIndex
          ? {
              ...p,
              colors: p.colors.filter(
                (_, idx) => idx !== colorIndex
              ),
            }
          : p
      )
    );
  };

  const addColor = (paletteIndex: number) => {
    setPalettes((prev) =>
      prev.map((p, i) =>
        i === paletteIndex
          ? {
              ...p,
              colors: [...p.colors, { role: "", hex: "#000000" }],
            }
          : p
        )
      );
   };

  const deletePalette = (paletteIndex: number) => {
    if (palettes.length === 1) return;

    setPalettes((prev) =>
      prev.filter((_, index) => index !== paletteIndex)
    );
  };

  return (
     <div className="w-full max-w-4xl">
      < label className="mb-2 block text-lg font-medium">Color Palette</label>
      <div className="w-full max-w-4xl rounded-lg border border-gray-700 p-4">  
      {
        palettes.map((palette, paletteIndex)=>(
          <div 
           key={paletteIndex}
           className="border-0 border-b-2 mb-5 pb-6">
             <div className="mb-6 flex justify-between">
          <input
            type="text"
            placeholder="Enter palette name"
            className="w-48 border-0 border-b-2 border-black-900 px-3 py-2 text-sm focus:border-b-2 focus:outline-none focus:border-green-500"
          />
         {palettes.length > 1 && (
            <button
              type="button"
              onClick={() => deletePalette(paletteIndex)}
              className=" cursor-pointer active:text-red-500"
            >
              <X />
            </button>
          )}
        </div>

        <div className="space-y-2 mb-5">
          {palette.colors.map((color, index) => (
            <div key={index} className="flex items-center gap-3">
              <input
                type="color"
                value={color.hex}
                onChange={(e) => {
                  setPalettes((prev) =>
                    prev.map((p, pIndex) =>
                      pIndex === paletteIndex
                        ? {
                            ...p,
                            colors: p.colors.map((c, i) =>
                              i === index
                                ? { ...c, role: e.target.value }
                                : c
                            ),
                          }
                        : p
                    )
                  );
                }}
                className="h-10 w-10 cursor-pointer rounded-full border-none appearance-none p-0"
              />

              <input
                value={color.role}
                placeholder="Role"
                onChange={(e) => {
                  setPalettes((prev) =>
                    prev.map((p, pIndex) =>
                      pIndex === paletteIndex
                        ? {
                            ...p,
                            colors: p.colors.map((c, i) =>
                              i === index
                                ? { ...c, role: e.target.value }
                                : c
                            ),
                          }
                        : p
                    )
                  );
                }}
                className="w-48 rounded border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />

              <input
                value={color.hex}
                onChange={(e) => {
                  setPalettes((prev) =>
                    prev.map((p, pIndex) =>
                      pIndex === paletteIndex
                        ? {
                            ...p,
                            colors: p.colors.map((c, i) =>
                              i === index
                                ? { ...c, role: e.target.value }
                                : c
                            ),
                          }
                        : p
                    )
                  );
                }}
                className="w-40 rounded border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />

              {
                palette.colors.length > 1 && (
                  <button
              type="button"
              onClick={() => deleteColor(paletteIndex, index)}
              className="rounded p-2 text-gray-400 transition-colors hover:bg-red-500/10 hover:text-red-500">
                <Trash2 size={18}/>
              </button>
                )
              }
            </div>
          ))}
        </div>
         <button
            type="button"
            onClick={()=> addColor(paletteIndex)}
            className="flex items-center gap-2 border-1 rounded px-3 py-2 text-sm active:bg-green-500 active:ring-1 active:ring-green-900 active:rounded-md active:text-white hover:bg-gray-400"
          >
            <Plus size={16} />
            Add Color
          </button>
          </div>
        ))
      }
      <button
        type="button"
        onClick={addPalette}
        className="mt-4 rounded px-4 py-2 border active:bg-green-500 hover:bg-gray-400 hover:ring-green-700 active:text-white"
      >
        Add Palette
      </button>

      </div>
     </div>
  )
}
