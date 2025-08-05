import { useEffect } from "react";
import { usePlayerStore } from "src/store/playerStore";

interface SoundControlProps {
  audio: React.RefObject<HTMLAudioElement | null>;
}

export default function TimelineControl({ audio }: SoundControlProps) {
  const { currentTime, setCurrentTime } = usePlayerStore();

  useEffect(() => {
    const el = audio.current;
    if (!el) return;

    const handleTimeUpdate = () => setCurrentTime(el.currentTime);

    el.addEventListener("timeupdate", handleTimeUpdate);
    return () => el.removeEventListener("timeupdate", handleTimeUpdate);
  }, [audio]);

  /** Formatea segundos a hh:mm:ss */
  const formatTime = (time: number) => {
    if (!time || Number.isNaN(time)) return `00:00:00`;

    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = Math.floor(time % 60);

    return [
      hours.toString().padStart(2, "0"),
      minutes.toString().padStart(2, "0"),
      seconds.toString().padStart(2, "0"),
    ].join(":");
  };

  const duration = audio?.current?.duration ?? 0;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = Number(e.target.value);
    if (audio.current) {
      audio.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  return (
    <div className="flex flex-1 items-center gap-x-1 text-sm">
      <span className="text-right font-bold text-white/50">
        {formatTime(currentTime)}
      </span>

      <input
        type="range"
        value={currentTime}
        max={duration}
        min={0}
        step={0.01}
        className="flex-1 cursor-pointer bg-purple-500"
        aria-label="Barra de progreso"
        onChange={handleChange}
      />

      <span className="font-bold text-white/50">
        {duration ? formatTime(duration) : "00:00:00"}
      </span>
    </div>
  );
}
