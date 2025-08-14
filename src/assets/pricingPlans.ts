export interface Plan {
  image?: string;
  hoverImage?: string;
  planName: string;
  price: string;
  details: Array<string>;
  textColor: string;
  border: string;
  hoverBorder: string;
  button: string;
  hoverButton: string;
}

export const plan1: Plan = {
  image: "/pricing/mencion_astral.webp",
  hoverImage: "group-hover:border-green-400",
  planName: "MENCIÓN ASTRAL",
  price: "99",
  details: ["Mención de 30 segundos", "Alcance interdimensional"],
  textColor: "text-green-400",
  border: "border-green-500/50",
  hoverBorder: "hover:border-green-400",
  button: "bg-green-500",
  hoverButton: "hover:bg-green-400",
};

export const plan2: Plan = {
  image: "/pricing/portal_dimensional.webp",
  hoverImage: "group-hover:border-cyan-400",
  planName: "PORTAL DIMENSIONAL",
  price: "179",
  details: [
    "Mención de 60 segundos",
    "Integración en conversación",
    "Mención en redes sociales",
  ],
  textColor: "text-cyan-400",
  border: "border-cyan-500/50",
  hoverBorder: "hover:border-cyan-400",
  button: "bg-cyan-500",
  hoverButton: "hover:bg-cyan-400",
};

export const plan3: Plan = {
  image: "/pricing/consiencia_cosmica.webp",
  hoverImage: "group-hover:border-purple-400",
  planName: "CONSCIENCIA CÓSMICA",
  price: "299",
  details: [
    "Segmento de 2 minutos",
    "Conversación dedicada",
    "Contenido exclusivo",
    "Promoción en todas las redes",
  ],
  textColor: "text-purple-400",
  border: "border-purple-500/50",
  hoverBorder: "hover:border-purple-400",
  button: "bg-purple-500",
  hoverButton: "hover:bg-purple-400",
};
