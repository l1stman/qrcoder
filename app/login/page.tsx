"use client";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Loader from "../components/Loader";
import { BsGoogle } from "react-icons/bs";

const LoginPage = () => {
  const [loading, setLoading] = useState(false);

  const { status } = useSession();
  const router = useRouter();
  if (status === "authenticated") {
    return router.push("/");
  }

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  const Login = () => {
    setLoading(true);
    signIn("google");
  };

  return (
    <div>
      <div className="flex justify-center items-center">
        {loading ? (
          <Loader/>
        ) : (
          <div className="text-center mt-10">
            <h1 className="text-5xl font-semibold mb-4 text-white">
              Sign in with Google
            </h1>
            <button
        onClick={Login}
        className="bg-blue-500 hover:bg-blue-600 text-white text-xl font-semibold py-4 px-6 rounded-full inline-flex items-center space-x-2 transition duration-300 ease-in-out"
      >
        <BsGoogle />
        <span>Sign in with Google</span>
      </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
