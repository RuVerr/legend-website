"use client"
import React, { RefObject } from "react";

interface AtomUlProp {
  children: React.ReactNode;
  atomUlRef?: RefObject<HTMLUListElement | null>;
  className?: string;
}

export default function AtomUl({ children, atomUlRef, className = "" }: AtomUlProp) {
  return (
    <ul ref={atomUlRef} className={`${className} max-sm:gap-[30px]`}>
      {children}
    </ul>
  );
}
