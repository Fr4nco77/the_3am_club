import type { Provider } from "./providers";
import TelegramSender from "./telegram";
import type { ContactSender } from "./types";

// Registro de medios de contacto
export const registry: Record<Provider, ContactSender> = {
  telegram: new TelegramSender(),
};

// Orquestador
export function getSender(name: Provider): ContactSender {
  const sender = registry[name];
  if (!sender) throw new Error(`Proveedor de contacto desconocido: ${name}`);
  return sender;
}
