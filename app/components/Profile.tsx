"use client"
import Image from 'next/image'
import { useSession } from "next-auth/react";
import QRCodeGenerator from './QRCode';

export default function Profile() {
  const { status, data } = useSession();
  let user;
  if (status === "authenticated") {
    user = data.user
  } 

  return (
    <div>
      <h1 className='text-white text-2xl'>{user ? `Welcome Back, ${user.name}` : "Welcome Back, let's login" }</h1>
      {user ? (
        <QRCodeGenerator/>
      ): null}
    </div>
  )
}

