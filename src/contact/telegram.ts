import type { ContactInput, SendResult, ContactSender } from "./types";
import { successMessage } from "./utils";

export default class TelegramSender implements ContactSender {
  provider = "telegram";

  async send(input: ContactInput): Promise<SendResult> {
    const token = import.meta.env.TELEGRAM_BOT_TOKEN;
    const chatId = import.meta.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
      return {
        success: false,
        error: "Telegram no configurado en el servidor",
      };
    }

    const text =
      `👋 *Nuevo mensaje de contacto*\n\n` +
      `👤 *Nombre:* ${input.name}\n` +
      `📧 *Email:* ${input.email}\n` +
      `💬 *Mensaje:*\n${input.message}`;

    try {
      const res = await fetch(
        `https://api.telegram.org/bot${token}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: chatId,
            text,
            parse_mode: "Markdown",
          }),
        },
      );

      if (!res.ok) {
        const body = await res.text();
        return {
          success: false,
          error: `Telegram API error [${res.status}]: ${body}`,
        };
      }

      return {
        success: true,
        info: successMessage(input.name),
      };
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : String(err);
      return {
        success: false,
        error: errorMessage,
      };
    }
  }
}
