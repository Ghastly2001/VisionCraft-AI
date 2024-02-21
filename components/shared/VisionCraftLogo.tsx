"use client";
import React from "react";
import { SparklesCore } from "../ui/sparkles";
import Image from "next/image";

export function VisionCraftLogo() {
  return (
    <div className="h-full, w-full bg-transparent flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="flex justify-center items-center gap-1">
        {" "}
        <Image src="/logo-icon.png" width={20} height={20} alt="logo" />
        <h1 className="md:text-xl text-3xl lg:text-2xl font-bold text-center text-indigo-500 relative z-20">
          VisionCraft AI
        </h1>
      </div>
      <div className="w-[40rem] h-5 relative">
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-1/4" />

        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="rgb(139, 103, 240)"
        />
      </div>
    </div>
  );
}
