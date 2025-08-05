import { useEffect, useRef } from "react";
import { usePlayerStore } from "src/store/playerStore";
import PlayPauseButton from "./PlayPauseButton";
import TimelineControl from "./TimelineControl";
import VolumeControl from "./VolumeControl";
import Stats from "./Fallback";

export default function Player() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const { currentPodcast, isPlaying, setIsPlaying, setCurrentTime } =
    usePlayerStore();

  // Cargar nuevo audio
  useEffect(() => {
    if (!audioRef.current || !currentPodcast) return;
    audioRef.current.src = currentPodcast.audio;
    audioRef.current.currentTime = 0;
    setCurrentTime(0);
  }, [currentPodcast]);

  // Play / Pause
  useEffect(() => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.play().catch(() => {
        // Si falla autoplay, setea el estado
        setIsPlaying(false);
      });
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  // Cuando termina el audio
  const handleEnded = () => {
    setIsPlaying(false);
    setCurrentTime(0);
  };

  return (
    <section
      className="flex w-full flex-col rounded-[10px] border-2 border-[#790063] bg-black/40 p-4 shadow-2xl backdrop-blur-sm"
      aria-label="Reproductor de podcast"
    >
      {!currentPodcast ? (
        <Stats />
      ) : (
        <div className="flex items-center space-x-4">
          {/* Miniatura */}
          <img
            src={currentPodcast.image}
            alt={`Miniatura del podcast ${currentPodcast.title}`}
            className="hidden aspect-square w-16 rounded-[10px] md:block"
          />

          <div className="flex flex-1 flex-col gap-y-3">
            <div className="flex items-center justify-between">
              {/* Título */}
              <div className="w-52 overflow-hidden md:w-92">
                <h2 className="truncate text-lg font-semibold text-white">
                  {currentPodcast.title || "Sin título"}
                </h2>
              </div>

              <VolumeControl audio={audioRef} />
            </div>

            <div className="flex items-center gap-x-2.5">
              <PlayPauseButton className="flex w-6 cursor-pointer place-items-center rounded-lg border border-white p-1 text-white transition-all hover:scale-110 hover:bg-white hover:text-black/80" />
              <TimelineControl audio={audioRef} />
            </div>
          </div>
        </div>
      )}

      <audio ref={audioRef} onEnded={handleEnded} />
    </section>
  );
}
