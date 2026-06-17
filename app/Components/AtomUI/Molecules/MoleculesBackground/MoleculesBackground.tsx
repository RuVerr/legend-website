"use client";
import React from "react";
import AtomBackground from "../../Atoms/AtomBackground/AtomBackground";
import { usePathname } from "next/navigation";

export default function MoleculesBackground() {
  const pathname = usePathname();

  const backgroundImages = [
    { url: "/images/background/home-background.jpg", href: "/" },
    { url: "/images/background/home-background.jpg", href: "/menu" },
    { url: "/images/background/home-background.jpg", href: "/about-us" },
    { url: "/images/background/home-background.jpg", href: "/contacts" }
  ];

  const currentBackground = backgroundImages.find((image) => (pathname === image.href ? image.url : null));
  return (
    <>
      <AtomBackground backgroundSRC={currentBackground!.url} />
    </>
  );
}
