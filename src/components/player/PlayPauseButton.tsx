import { Pause, Play } from "@assets/iconsPlayer";
import type { ButtonHTMLAttributes } from "react";
import { usePlayerStore } from "src/store/playerStore";

export default function PlayPauseButton({
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  const { currentPodcast, isPlaying, setIsPlaying } = usePlayerStore();

  const handlePlayPause = () => {
    if (!currentPodcast) return;
    setIsPlaying(!isPlaying);
  };

  return (
    <button
      className={className}
      onClick={handlePlayPause}
      aria-label={isPlaying ? "Pausar" : "Reproducir"}
      {...props}
    >
      {isPlaying ? <Pause /> : <Play />}
    </button>
  );
}
