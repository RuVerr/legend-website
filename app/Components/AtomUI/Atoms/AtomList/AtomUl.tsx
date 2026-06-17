import React from "react";

interface AtomUlProp {
  children: React.ReactNode;
  className: string;
}

export default function AtomUl({ children, className = "" }: AtomUlProp) {
  return <ul className={`flex justify-center items-center gap-[78px] ${className} max-sm:gap-[30px]`}>{children}</ul>;
}
