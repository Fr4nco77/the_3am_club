import { defineAction } from "astro:actions";
import { z } from "astro:schema";

export const server = {
  contactAction: defineAction({
    accept: "form",
    input: z.object({
      name: z.string().min(1, "El nombre es obligatorio"),
      email: z.string().email("Email inválido"),
      message: z.string().min(5, "El mensaje es muy corto"),
    }),
    handler: async (input) => {
      try {
        // Aquí iría la lógica de envío (correo, BD, etc.)
        return {
          success: true,
          message: `¡${input.name} tu mensaje ha sido enviado con éxito!`,
        };
      } catch (err) {
        return {
          success: false,
          message: "Hubo un error al enviar el mensaje.",
        };
      }
    },
  }),
};
