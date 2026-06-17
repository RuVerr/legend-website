"use client";
import React from "react";

import Link from "next/link";

interface LinkProp {
  value: string;
  children: React.ReactNode;
  href: string;
  blank?: boolean;
  className?: string;
}

export default function AtomLinks({ value, children, href, blank = false, className = "" }: LinkProp) {
  switch (value) {
    case "NextLink":
      return (
        <Link className={`cursor-pointer ${className}`} href={href}>
          {children}
        </Link>
      );

    default:
      return (
        <a href={href} target={blank ? "_blank" : ""} className={`${className}`}>
          {children}
        </a>
      );
  }
}
