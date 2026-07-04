import React from "react";
import MoleculesContacts from "../../Molecules/MoleculesHome/MoleculesContacts";

export default function OrganismFooter() {
  return (
    <div className="footer mt-[100px]">
      <div className="container">
        <div className="footer_content items-center backdrop-blur-md rounded-4xl py-[50px] px-[20px] flex justify-around max-[733px]:flex-col-reverse gap-7">
          <MoleculesContacts contactsContentClassName="flex flex-col gap-3" />
          <div className="iframe_box w-[40%] rounded-2xl overflow-hidden border-2 border-[#906623] max-[731px]:w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3090.8963321544243!2d44.51448755232444!3d40.17917752576408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abd541c1b0951%3A0x492b9cc47239d253!2sLegend%20Music%20Hall!5e0!3m2!1sen!2sam!4v1783160130295!5m2!1sen!2sam"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
