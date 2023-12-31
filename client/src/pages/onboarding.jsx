import React from "react";
import Image from "next/image";
import { useStateProvider } from "@/context/StateContext";
function onboarding() {
  const [{ userInfo }] = useStateProvider
  console.log({userInfo})
  return (
  <div className="flex items-center justify-center flex-col bg-panel-header-background h-screen w-screen text-white">
    <div className="flex items-center justify-center gap-2">
      <Image src="/whatsapp.gif" alt="WhatsApp" height={300} width={300}/>
      <span className="text-7xl">WhatsApp</span>
    </div>
    <h2 className="text-2xl">Create Your Profile</h2>
    <div className="flex gap-6 mt-6">
      <div className="flex flex-col items-center justify-center mt-5 gap-6">

      </div>
    </div>
  </div>
  )
}

export default onboarding;
