export interface Host {
  borderCardColor: string;
  borderAvatarColor: string;
  liveColor: string;
  avatarImage: string;
  name: string;
  job: string;
  jobColor: string;
  description: string;
  descriptionColor: string;
}

export const Franco: Host = {
  borderCardColor: "border-purple-500/30",
  borderAvatarColor: "border-purple-500",
  liveColor: "bg-cyan-400",
  avatarImage: "/avatars/avatar_franco.webp",
  name: "Franco Carreras",
  job: "FILÓSOFO & HOST PRINCIPAL",
  jobColor: "text-purple-300",
  description: `"La verdad se revela en las horas más oscuras del alma"`,
  descriptionColor: "text-cyan-400",
};

export const Charles: Host = {
     borderCardColor: "border-cyan-500/30",
  borderAvatarColor: "border-cyan-500",
  liveColor: "bg-pink-400",
  avatarImage: "/avatars/avatar_bukowski.webp",
  name: "Charles Bukowski",
  job: " ESCRITOR & CO-HOST",
  jobColor: "text-cyan-300",
  description: `"La mente es el portal hacia realidades infinitas"`,
  descriptionColor: "text-purple-400",
};
