import { useGeneratorStore } from "@/app/config"
import { Plus, Trash2 } from "lucide-react";

export default function Gotchas() {
  const gotchas = useGeneratorStore(s => s.stack).gotchas;
  const updateStack = useGeneratorStore(s => s.updateStack);

  return (
    <div className="flex flex-col outline-1 dark:bg-taupe-800 dark:outline-0 rounded-md p-2">
      {gotchas.map((gotcha, i) => (
        <div className="mb-2 flex gap-2" key={i}>
          <input
            type="text"
            className="py-1 px-2 rounded-md outline outline-blue-400 w-full"
            defaultValue={gotcha}
            placeholder="Some gotcha or rule..."
            onChange={(e) => {
              const newGotchas = [...gotchas];
              newGotchas[i] = e.currentTarget.value;

              updateStack({
                gotchas: newGotchas,
              });
            }}
          />
          <button onClick={() => {
            updateStack({
              gotchas: gotchas.filter((_, index) => index !== i),
            });
          }}>
            <Trash2 />
          </button>
        </div>
      ))}
      <div>
        <button
          className="flex p-2 rounded border cursor-pointer"
          onClick={() => {
            updateStack({
              gotchas: [...gotchas, ""],
            });
          }}
        >
          Add gotcha <Plus />
        </button>
      </div>
    </div>
  )
}
