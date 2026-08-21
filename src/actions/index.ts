import { defineAction } from "astro:actions";
import { z } from "astro:schema";
import { getSender } from "src/contact";
import { PROVIDERS } from "src/contact/providers";
import { successMessage } from "src/contact/utils";

export const server = {
  contactAction: defineAction({
    accept: "form",
    input: z.object({
      name: z.string().trim().min(1, "El nombre es obligatorio"),
      email: z.string().trim().email("Email inválido"),
      message: z.string().trim().min(5, "El mensaje es muy corto"),
      provider: z
        .enum(PROVIDERS, {
          message:
            "Error 500: Por favor intente comunicarse con el administrador",
        })
        .optional(),
    }),
    handler: async (input) => {
      try {
        if (input.provider) {
          const sender = getSender(input.provider);
          const { success, error, info } = await sender.send(input);

          if (!success) {
            console.error("[Contact Action Error]:", error);
            return {
              success,
              message: "Hubo un error al procesar tu solicitud.",
            };
          }

          return {
            success,
            message: info as string,
          };
        }

        // Si no hay provider especificado (modo por defecto)
        return {
          success: true,
          message: successMessage(input.name),
        };
      } catch (err) {
        console.error("[Action Server Exception]:", err);
        return {
          success: false,
          message: "Ocurrió un fallo en el servidor.",
        };
      }
    },
  }),
};
