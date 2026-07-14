import React, { RefObject } from "react";
import AtomLinks from "../../Atoms/AtomActions/AtomLinks";
import Image from "next/image";

interface MoleculesContactsProp {
  moleculesContacts?: RefObject<HTMLDivElement | null>;
  moleculesSoc?: RefObject<HTMLDivElement | null>;
  contactsContentClassName: string;
}

export default function MoleculesContacts({ moleculesContacts, moleculesSoc, contactsContentClassName = "" }: MoleculesContactsProp) {
  const contactsInfo = [
    {
      href: "https://www.google.com/maps/place/Legend+Music+Hall/@40.1791684,44.5170794,17z/data=!3m1!4b1!4m6!3m5!1s0x406abd541c1b0951:0x492b9cc47239d253!8m2!3d40.1791684!4d44.5170794!16s%2Fg%2F11ykk16c43?entry=ttu&g_ep=EgoyMDI2MDYxMC4wIKXMDSoASAFQAw%3D%3D",
      icon: "/images/icons/location.svg",
      title: "48/1 Nalbandyan St, Yerevan"
    },
    {
      href: "tel:+37412345678",
      icon: "/images/icons/phone.svg",
      title: `041 707010`
    },
    {
      href: "#",
      icon: "/images/icons/time.svg",
      title: `Music Hall - 12:00 - 00:00`
    }
  ];

  const social = [
    { href: "https://www.instagram.com/legendmusichall/", icon: "/images/icons/instagram.svg" },
    { href: "https://www.facebook.com/Legendmusichall/", icon: "/images/icons/facebook.svg" }
  ];
  return (
    <div className="contacts">
      <div ref={moleculesContacts} className={`contacts_content ${contactsContentClassName}`}>
        {contactsInfo.map((contact) => (
          <div key={contact.href}>
            <AtomLinks
              value=""
              blank={contact.title === "48/1 Nalbandyan St, Yerevan" ? true : false}
              href={contact.href}
              className="flex gap-2 items-center text-black"
            >
              {
                <Image
                  src={contact.icon}
                  alt="location legend music hall"
                  width={50}
                  height={50}
                  className=" border-2 border-[#916622] p-[5px] rounded-[40px] backdrop-blur-[2px]"
                />
              }
              {contact.title}
            </AtomLinks>
          </div>
        ))}
      </div>

      <div ref={moleculesSoc} className="social flex justify-center gap-2 pt-[45px] max-[1151px]:pt-[20px]">
        {social.map((soc, socIndex) => (
          <AtomLinks
            key={socIndex}
            value="NextLink"
            blank={true}
            href={soc.href}
            className="flex gap-2 items-center text-black"
          >
            {
              <Image
                src={soc.icon}
                alt="location legend music hall"
                width={50}
                height={50}
                className=" border-2 border-[#916622] p-[10px] rounded-[40px] backdrop-blur-[2px]"
              />
            }
          </AtomLinks>
        ))}
      </div>
    </div>
  );
}
