import React, { Ref, RefObject } from "react";

type headAtomHeadingType = "h1" | "h2" | "h3" | "h4";

interface AtomHeadingProp {
  level: headAtomHeadingType;
  children: React.ReactNode;
  atomHeadingRef?: RefObject<HTMLHeadingElement | null>;
  className?: React.ReactNode;
}

export default function AtomHeading({ level: Heading, children, atomHeadingRef, className = "" }: AtomHeadingProp) {
  return (
    <Heading ref={atomHeadingRef} className={`${className}`}>
      {children}
    </Heading>
  );
}
