import { glob } from "astro/loaders";
import { z, defineCollection } from "astro:content";

const podcast = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/podcast" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    audio: z.string(),
    duration: z.string(),
    image: z.string(),
    cover: z.string(),
    category: z.enum(["Entrevista", "Social", "Entrenimiento"]),
    created_at: z.string()
  }),
});

export const collections = { podcast };
