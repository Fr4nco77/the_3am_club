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
  description: `"Atraviesa la noche con curiosidad y sin prisa, explorando mundos visibles e invisibles.
Cada idea, cada pensamiento, es un portal hacia nuevas perspectivas; y cada instante, una chispa que ilumina la vastedad de lo posible."`,
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
  description: `"Entre humo, soledad y tinta, halló la forma más humana de hablar del amor y la pérdida.
Sus palabras, tan crudas como sinceras, viajaban sin miedo por las calles vacías de la madrugada, encontrando belleza en lo roto y poesía en aquello que la mayoría preferiría olvidar."`,
  descriptionColor: "text-purple-400",
};
