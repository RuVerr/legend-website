import Image from "next/image";
import React from "react";

interface AtomBackgroundProp {
  backgroundSRC: string;
}

export default function AtomBackground({ backgroundSRC }: AtomBackgroundProp) {
  if (!backgroundSRC) return null;
  return (
    <div className="fixed top-0 z-[-1] w-full h-screen overflow-hidden ">
      <Image
        src={backgroundSRC}
        alt="Legend music hall background image"
        fill
        priority
        className="object-cover max-lg:[object-position:80%_center] "
      />
    </div>
  );
}
