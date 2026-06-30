import { useGeneratorStore } from "@/app/config"
import { useSpeechRecognition } from "../hook/useSpeechRecognition";
import VoiceButton from "@/app/ui/VoiceButton";

export default function Mood() {
  const mood = useGeneratorStore(s => s.design).mood;
  const updateDesign = useGeneratorStore(s => s.updateDesign);

  return (
    <div className="w-full max-w-4xl ">
      <label className="mb-2 block text-lg font-medium">Mood</label>

      <div className="relative">
        <textarea
        className="
          min-h-40
          w-full
          rounded-md
          dark:bg-taupe-800
          p-3
          pr-12
          border
          border-gray-700
          focus:outline-none
          focus:ring-2
          focus:ring-green-500
        "
        placeholder="Describe the desired mood..."
        value={mood}
        onChange={e => updateDesign({
          mood: e.currentTarget.value
        })}
      />
      <div  className=" absolute right-2 top-2">
        <VoiceButton
        onResult={(text)=>{
          console.log("Speech", text);
          updateDesign({
            mood:text,
          })
        }}/>
      </div>
      </div>
    </div>
  )
}
