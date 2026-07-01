import { Font, Typography, useGeneratorStore } from "@/app/config";
import { Trash2 } from "lucide-react";

export default function Fonts() {
  const fonts = useGeneratorStore((s) => s.design.fonts);
  const updateDesign = useGeneratorStore((s) => s.updateDesign);
  const typography = useGeneratorStore((s) => s.design.typography);
  const updateFonts = (updater: (fonts: Font[]) => Font[]) => {
    updateDesign({
      fonts: updater(fonts),
    });
  };

  const addFont = () => {
    updateFonts((prev) => [
      ...prev,
      {
        type: "",
        family: "",
        usedFor: [""],
      },
    ]);
  };

  const deleteFont = (fontIndex: number) => {
    if (fonts.length === 1) return;

    updateFonts((prev) => prev.filter((_, i) => i !== fontIndex));
  };

  const addUsage = (fontIndex: number) => {
    updateFonts((prev) =>
      prev.map((font, i) =>
        i === fontIndex
          ? {
              ...font,
              usedFor: [...font.usedFor, ""],
            }
          : font,
      ),
    );
  };

  const deleteUsage = (fontIndex: number, usageIndex: number) => {
    updateFonts((prev) =>
      prev.map((font, i) =>
        i === fontIndex
          ? {
              ...font,
              usedFor: font.usedFor.filter((_, j) => j !== usageIndex),
            }
          : font,
      ),
    );
  };

  const updateTypography = (
    updater: (typography: Typography[]) => Typography[],
  ) => {
    updateDesign({
      typography: updater(typography),
    });
  };

  const addTypography = () => {
    updateTypography((prev) => [
      ...prev,
      {
        element: "",
        size: "",
      },
    ]);
  };

  const deleteTypography = (index: number) => {
    if (typography.length === 1) return;

    updateTypography((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="w-full max-w-4xl">
      <label className="mb-2 block text-lg font-medium">Typography Rules</label>

      <div className="rounded-lg border border-gray-700 p-4">
        <label className="font-medium ">Font Families</label>
        {fonts.map((font, index) => (
          <div key={index} className="mb-5 border-b pb-6 last:border-b-0">
            <div className=" flex justify-end">
              {fonts.length > 1 && (
                <button
                  type="button"
                  onClick={() => deleteFont(index)}
                 className=" cursor-pointer active:text-red-500"
                >
                  X
                </button>
              )}
            </div>

            <div className="mb-4">
              <label className="mb-1 block ">Font type</label>
              <input
                type="text"
                value={font.type}
                onChange={(e) => {
                  updateFonts((prev) =>
                    prev.map((f, i) =>
                      i === index ? { ...f, type: e.target.value } : f,
                    ),
                  );
                }}
                placeholder="Primary font"
                className=" w-full mb-3 rounded border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <div className="mb-4">
                <label className="mb-1 block ">Font Family</label>
                <input
                  type="text"
                  value={font.family}
                  onChange={(e) => {
                    updateFonts((prev) =>
                      prev.map((f, i) =>
                        i === index ? { ...f, family: e.target.value } : f,
                      ),
                    );
                  }}
                  placeholder="Poppins"
                  className="w-full rounded border px-3 py-2  text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <label className="mb-1 block">Used for</label>
                {font.usedFor.map((item, usageIndex) => (
                  <div
                    key={usageIndex}
                    className="mb-2 flex items-center gap-2"
                  >
                    <input
                      type="text"
                      value={item}
                      onChange={(e) => {
                        updateFonts((prev) =>
                          prev.map((f, i) =>
                            i === index
                              ? {
                                  ...f,
                                  usedFor: f.usedFor.map((u, j) =>
                                    j === usageIndex ? e.target.value : u,
                                  ),
                                }
                              : f,
                          ),
                        );
                      }}
                      placeholder="Body Text"
                      className="flex-1 rounded border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                    />

                    {font.usedFor.length > 1 && (
                      <button
                        type="button"
                        onClick={() => deleteUsage(index, usageIndex)}
                        className="rounded p-2 text-gray-500 hover:bg-red-100 hover:text-red-500"
                      >
                        <Trash2 size={16} />
                      </button>
                    )}
                  </div>
                ))}

                <button
                  type="button"
                  onClick={() => addUsage(index)}
                  className="mt-2 rounded border px-3 py-2 text-sm active:bg-green-500 active:ring-1 active:ring-green-900 active:rounded-md active:text-white hover:bg-gray-400"
                >
                  + Add usage
                </button>
              </div>
            </div>
          </div>
        ))}
        <button
          type="button"
          onClick={addFont}
          className="mt-4 rounded border  text-sm px-4 py-2 active:bg-green-500 active:ring-1 active:ring-green-900 active:rounded-md active:text-white hover:bg-gray-400"
        >
          Add Font
        </button>

        <div className="mt-8 rounded-lg border border-gray-700 p-4">
          <label className="mb-4 block font-medium">Typography Hierarchy</label>
          {typography.map((item, index) => (
            <>
              <div key={index} className="mb-3 flex items-center gap-3">
                <input
                  type="text"
                  value={item.element}
                  placeholder="Hero"
                  onChange={(e) => {
                    updateTypography((prev) =>
                      prev.map((t, i) =>
                        i === index
                          ? {
                              ...t,
                              element: e.target.value,
                            }
                          : t,
                      ),
                    );
                  }}
                  className="flex-1 rounded border px-3 py-2"
                />

                <input
                  type="text"
                  value={item.size}
                  placeholder="65px"
                  onChange={(e) => {
                    updateTypography((prev) =>
                      prev.map((t, i) =>
                        i === index
                          ? {
                              ...t,
                              size: e.target.value,
                            }
                          : t,
                      ),
                    );
                  }}
                  className="w-32 rounded border px-3 py-2"
                />
                {typography.length > 1 && (
                  <button
                    type="button"
                    onClick={() => deleteTypography(index)}
                    className="rounded p-2 text-gray-500 hover:bg-red-100 hover:text-red-500"
                  >
                    <Trash2 size={16} />
                  </button>
                )}
              </div>
            </>
          ))}
          <button
            type="button"
            onClick={addTypography}
            className="mt-2 mb-4 rounded border px-3 py-2 text-sm active:bg-green-500 active:ring-1 active:ring-green-900 active:rounded-md active:text-white hover:bg-gray-400"
          >
            + Add Typography
          </button>
        </div>
      </div>

    </div>
  );
}
