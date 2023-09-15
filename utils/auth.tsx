import GoogleProvider from "next-auth/providers/google";
import { getServerSession } from "next-auth";


export const authOptions = {
  providers: [
    GoogleProvider({
        clientId: "",
        clientSecret: "",
      }),
  ],
};

export const getAuthSession = () => getServerSession(authOptions);