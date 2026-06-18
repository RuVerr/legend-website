import React from "react";

interface AtomUlProp {
  children: React.ReactNode;
  className: string;
}

export default function AtomUl({ children, className = "" }: AtomUlProp) {
  return <ul className={`${className} max-sm:gap-[30px]`}>{children}</ul>;
}
