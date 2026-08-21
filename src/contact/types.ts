export type ContactInput = {
  name: string;
  email: string;
  message: string;
};

export type SendResult = {
  success: boolean;
  info?: string;
  error?: string;
};

export interface ContactSender {
  send(input: ContactInput): Promise<SendResult>;
}
