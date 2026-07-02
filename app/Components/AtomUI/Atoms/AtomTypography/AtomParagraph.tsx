import React, { RefObject } from "react";

interface AtomParagraphProp {
  children: React.ReactNode;
  paragraphRef?: RefObject<HTMLParagraphElement | null>;
  className?: string;
}
export default function AtomParagraph({ children, paragraphRef, className = "" }: AtomParagraphProp) {
  return (
    <p ref={paragraphRef} className={`${className}`}>
      {children}
    </p>
  );
}
