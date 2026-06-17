import React from "react";

interface AtomLiProp {
  children: React.ReactNode;
  className?: string;
}

export default function AtomLi({ children, className }: AtomLiProp) {
  return <li className={className}>{children}</li>;
}
