import { create } from "zustand";

export interface Podcast {
  title: string;
  image: string;
  audio: string;
}

export interface PlayerStore {
  isPlaying: boolean;
  currentPodcast: Podcast | null;
  currentTime: number;
  volume: number;
  setIsPlaying: (isPlaying: boolean) => void;
  setCurrentPodcast: (podcast: Podcast) => void;
  setCurrentTime: (time: number) => void;
  setVolume: (volume: number) => void;
}

export const usePlayerStore = create<PlayerStore>((set) => ({
  isPlaying: false,
  currentPodcast: {
    title: "Title Podcast",
    image: "/podcast_image.webp",
    audio: "/mp3s/Sample1.mp3"
  },
  currentTime: 0,
  volume: 0.1,
  setIsPlaying: (isPlaying: boolean) => set({ isPlaying }),
  setCurrentPodcast: (podcast: Podcast) => set({ currentPodcast: podcast }),
  setCurrentTime: (time: number) => set({ currentTime: time }),
  setVolume: (volume: number) => set({ volume }),
}));
