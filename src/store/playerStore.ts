import { create } from "zustand";

export interface Podcast {
  id: string;
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
  currentPodcast: null,
  currentTime: 0,
  volume: 0.8,
  setIsPlaying: (isPlaying: boolean) => set({ isPlaying }),
  setCurrentPodcast: (podcast: Podcast) => set({ currentPodcast: podcast }),
  setCurrentTime: (time: number) => set({ currentTime: time }),
  setVolume: (volume: number) => set({ volume }),
}));
