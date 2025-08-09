import { VolumeOff, VolumeOn } from "@assets/icons";
import { useEffect, useRef } from "react";
import { usePlayerStore } from "src/store/playerStore";

interface SoundControlProps {
  audio: React.RefObject<HTMLAudioElement | null>;
}

export default function VolumeControl({ audio }: SoundControlProps) {
  const { volume, setVolume } = usePlayerStore();
  const previousVolumeRef = useRef(volume);

  useEffect(() => {
    if (audio.current) {
      audio.current.volume = volume;
    }
  }, [volume]);

  const handleMute = () => {
    if (volume < 0.1) {
      setVolume(previousVolumeRef.current || 0.1);
    } else {
      previousVolumeRef.current = volume;
      setVolume(0);
    }
  };

  return (
    <div className="flex w-28 items-center space-x-2 md:w-auto">
      <button
        onClick={handleMute}
        aria-label={volume > 0 ? "Silenciar" : "Activar sonido"}
        className="w-5 cursor-pointer text-white transition-transform duration-300 ease-in-out hover:scale-110"
      >
        {volume > 0 ? <VolumeOn /> : <VolumeOff />}
      </button>
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={(e) => setVolume(Number(e.target.value))}
        className="w-full cursor-pointer"
        aria-label="Control de volumen"
      />
    </div>
  );
}
