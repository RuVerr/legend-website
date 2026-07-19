import Image from "next/image";
import React from "react";

interface AtomBackgroundProp {
  backgroundSRC: string;
}

export default function AtomBackground({ backgroundSRC }: AtomBackgroundProp) {
  if (!backgroundSRC) return null;
  return (
    <div className="pointer-events-none fixed inset-0 z-[-1]">
      <Image src={backgroundSRC} alt="Legend music hall background image" fill priority className="object-cover" />
    </div>
  );
}
