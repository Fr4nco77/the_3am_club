import { Pause, Play } from "@assets/icons";
import type { ButtonHTMLAttributes } from "react";
import { usePlayerStore } from "src/store/playerStore";

interface PlayPauseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  podcast?: {
    id: string;
    title: string;
    image: string;
    audio: string;
  };
}

export default function PlayPauseButton({
  podcast,
  className,
  children,
  ...props
}: PlayPauseButtonProps) {
  const { currentPodcast, isPlaying, setIsPlaying, setCurrentPodcast } =
    usePlayerStore();

  const handlePlayPause = () => {
    if (podcast && currentPodcast?.id !== podcast.id) {
      setCurrentPodcast(podcast);
    }

    return setIsPlaying(!isPlaying);
  };

  return (
    <button
      className={`flex items-center justify-center cursor-pointer gap-2 bg-transparent ${className}`}
      onClick={handlePlayPause}
      aria-label={isPlaying ? "Pausar" : "Reproducir"}
      {...props}
    >
      {isPlaying ? <Pause /> : <Play />}
      {children}
    </button>
  );
}