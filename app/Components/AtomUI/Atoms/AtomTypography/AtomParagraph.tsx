import React from "react";

interface AtomParagraphProp {
  children: React.ReactNode;
  className: string;
}
export default function AtomParagraph({ children, className = "" }: AtomParagraphProp) {
  return <p className={`${className}`}>{children}</p>;
}
