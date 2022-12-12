import { useMutation } from "@tanstack/react-query";
import useAuth from "~/hooks/useAuth";
import client from "~/utils/AxiosInterceptor";

export const useSendMessage = () => {
  const chatbot_auth_token = useAuth();
  return useMutation(
    async (message: string) =>
      await client.post("Chatbot/SendMessage", {
        message,
        token: chatbot_auth_token,
      })
  );
};
