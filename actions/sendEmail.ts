"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  if (!message || typeof message !== "string") {
    return {
      error: "Invalid message",
    };
  }

  if (!senderEmail || typeof senderEmail !== "string") {
    return {
      error: "Invalid email",
    };
  }

  try {
    resend.emails.send({
      from: senderEmail,
      to: "neha.n.deshpande@gmail.com",
      subject: "Message from contact form",
      reply_to: senderEmail,
      text: message,
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return {
        error: error.message,
      };
    } else if (error && typeof error === "object" && "message" in error) {
      return {
        error: error.message,
      };
    } else if (error && typeof error === "string") {
      return {
        error,
      };
    }
    return {
      error: "Something went wrong.",
    };
  }
};
