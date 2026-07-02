"use client";
import React, { RefObject } from "react";

import Link from "next/link";

interface LinkProp {
  value: string;
  children: React.ReactNode;
  href: string;
  linkRef?: RefObject<HTMLAnchorElement | null>;
  blank?: boolean;
  className?: string;
}

export default function AtomLinks({ value, children, href, blank = false, linkRef, className = "" }: LinkProp) {
  switch (value) {
    case "NextLink":
      return (
        <Link ref={linkRef} className={`cursor-pointer ${className}`} href={href}>
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
