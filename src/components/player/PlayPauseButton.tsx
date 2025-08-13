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
      className={`flex cursor-pointer items-center justify-center gap-2 bg-transparent ${className}`}
      onClick={handlePlayPause}
      aria-label={isPlaying ? "Pausar" : "Reproducir"}
      {...props}
    >
      {podcast ? (
        isPlaying && currentPodcast?.id === podcast.id ? (
          <Pause />
        ) : (
          <Play />
        )
      ) : isPlaying ? (
        <Pause />
      ) : (
        <Play />
      )}

      {children}
    </button>
  );
}
