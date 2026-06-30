import { Mic } from "lucide-react";
import { useSpeechRecognition } from "../components/hook/useSpeechRecognition";

type VoiceButtonProps = {
  onResult: (text: string) => void;
};

export default function VoiceButton({ onResult }: VoiceButtonProps) {
  const {
    startListening,
    stopListening,
    isListening,
  } = useSpeechRecognition();

  const handleClick = () => {
    if (isListening) {
      stopListening();
    } else {
      startListening(onResult);
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="rounded p-2 hover:bg-gray-100"
      title={isListening ? "Stop" : "Speak"}
    >
      <Mic
        size={20}
        className={isListening ? "text-red-500" : ""}
      />
    </button>
  );
}