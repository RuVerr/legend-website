"use client";
import React from "react";
import AtomUl from "../../Atoms/AtomList/AtomUl";
import AtomLi from "../../Atoms/AtomList/AtomLi";
import AtomLinks from "../../Atoms/AtomActions/AtomLinks";
import { usePathname } from "next/navigation";

interface MoleculesNavigationProp{
  className: string 
}

export default function MoleculesNavigation({ className }: MoleculesNavigationProp) {
  const pathname = usePathname();

  const links = [
    { title: "Գլխավոր", href: "/" },
    { title: "Փաթեթներ", href: "/banquet" },
    { title: "Մեր մասին", href: "/about-us" }
  ];

  return (
    <div className="container">
      <AtomUl className={`${className}`}>
        {links.map((link, elIndex) => (
          <AtomLi key={elIndex}>
            <AtomLinks
              className={`relative text-[20px] uppercase transition-colors py-[20px] montserrat-m duration-200
              ${`-----// afters -------`}
              after:content-['']
              after:h-[1px]
              after:absolute 
              after:bottom-[-1px]
              after:left-0 
              after:h-[2px] 
            after:bg-[#78460C] 
              after:transition-all
              after:duration-300 
              ${`-----// afters -------`}
              ${pathname === link.href ? "text-[#78460C] after:w-full " : "text-black after:w-0"} `}
              value="NextLink"
              href={link.href}
              children={link.title}
            />
          </AtomLi>
        ))}
      </AtomUl>
    </div>
  );
}
