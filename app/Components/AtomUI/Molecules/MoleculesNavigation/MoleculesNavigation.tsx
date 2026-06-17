"use client";
import React from "react";
import AtomUl from "../../Atoms/AtomList/AtomUl";
import AtomLi from "../../Atoms/AtomList/AtomLi";
import AtomLinks from "../../Atoms/AtomActions/AtomLinks";
import { usePathname } from "next/navigation";

export default function MoleculesNavigation() {
  const pathname = usePathname();

  const links = [
    { title: "Home", href: "/" },
    { title: "Menu", href: "/menu" },
    { title: "About us", href: "/about-us" },
    { title: "Contacts", href: "/contacts" }
  ];

  return (
    <div className="container">
      <AtomUl className="pt-[62px] pb-[28px]">
        {links.map((link, elIndex) => (
          <AtomLi key={elIndex}>
            <AtomLinks
              className={`relative text-[20px] uppercase transition-colors py-[20px] montserrat-m duration-200
              ${`-----// afters -------`}
              after:content-['']
              after:h-[2px]
              after:absolute 
              after:bottom-[-28px] 
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
