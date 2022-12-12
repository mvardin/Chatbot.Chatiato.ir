import client from "~/utils/AxiosInterceptor";

export const login = async ({
  username,
  password,
}: {
  username?: string;
  password?: string;
}) => {
   return await client.post("Account/Login", { username, password });
};
