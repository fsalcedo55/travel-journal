import React from "react";
import { GlobeIcon } from "@heroicons/react/outline";

export default function Navbar() {
  return (
    <div className="flex bg-red-600 h-16 items-center justify-center">
      <GlobeIcon className="h-7 text-white m-1" />
      <h1 className="font-sans text-xl text-white">my travel journal</h1>
    </div>
  );
}
