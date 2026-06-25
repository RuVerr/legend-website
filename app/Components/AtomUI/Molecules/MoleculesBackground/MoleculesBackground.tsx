"use client";
import React from "react";
import AtomBackground from "../../Atoms/AtomBackground/AtomBackground";
import { usePathname } from "next/navigation";

export default function MoleculesBackground() {
  const pathname = usePathname();

  const backgroundImages = [
    { url: "/images/background/home-background.jpg", href: "/" },
    { url: "/images/background/menu-background.jpg", href: "/menu" },
    { url: "/images/background/menu-background.jpg", href: "/legend-cafe-menu" },
    { url: "/images/background/about-us-background.jpg", href: "/about-us" }
  ];

  const currentBackground = backgroundImages.find((image) => (pathname === image.href ? image.url : null));
  return (
    <>
      <AtomBackground backgroundSRC={currentBackground!.url} />
    </>
  );
}
