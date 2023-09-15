"use client";
import Link from "next/link";
import React from "react";
import { useSession, signOut } from "next-auth/react";

const Navbar = () => {
  const { data } = useSession();
  const LogOut = () => {
    signOut();
  };

  return (
    <nav className="bg-blue-500 text-lg font-semibold p-4 flex justify-between items-center">
      <div className="text-white text-2xl font-bold">QrCoder</div>
      <ul className="flex space-x-4">
        <Link href="/">
          <li>
            <h3 className="text-white hover:text-gray-300 text-lg font-semibold">
              Home
            </h3>
          </li>
        </Link>
        {data?.user ? (
          <li>
            <h3
              onClick={LogOut}
              className="text-white hover:text-gray-300 text-lg font-semibold cursor-pointer"
            >
              Logout
            </h3>
          </li>
        ) : (
          <Link href="/login">
            <li>
              <h3 className="text-white hover:text-gray-300 text-lg font-semibold">
                Login
              </h3>
            </li>
          </Link>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
