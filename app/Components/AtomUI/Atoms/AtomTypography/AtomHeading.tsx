import React from "react";

type headAtomHeadingType = "h1" | "h2" | "h3";

interface AtomHeadingProp {
  level: headAtomHeadingType;
  children: React.ReactNode;
  className?: React.ReactNode;
}

export default function AtomHeading({ level: Heading, children, className = "" }: AtomHeadingProp) {
  return <Heading className={`${className}`}>{children}</Heading>;
}
