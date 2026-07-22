"use client";

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import MoleculesNavigation from "../../Molecules/MoleculesNavigation/MoleculesNavigation";
import gsap from "gsap";

export default function OrganismMobileNavigation() {
  const navigationContentRef = useRef<HTMLDivElement | null>(null);
  const [navActive, setNavActive] = useState(false);
  const tl = useRef<GSAPTimeline | null>(null);
  const hiddenScreenRef = useRef<HTMLDivElement | null>(null);
  const burgerLineRefs = useRef<HTMLSpanElement[]>([]);

  function menuToggle() {
    setNavActive((prev) => !prev);
  }

  useLayoutEffect(() => {
    if (!navigationContentRef.current || !hiddenScreenRef.current || !burgerLineRefs.current.length) return;
    const nav = navigationContentRef.current;
    const hiddenScreen = hiddenScreenRef.current;
    const lines = burgerLineRefs.current;

    gsap.set(nav, { xPercent: 100 });
    gsap.set(hiddenScreen, { autoAlpha: 0, pointerEvents: "none" });

    tl.current = gsap
      .timeline({ paused: true })
      .to(hiddenScreen, {
        autoAlpha: 1,
        pointerEvents: "auto",
        duration: 0.2
      })
      .to(nav, {
        xPercent: 0,
        duration: 0.5,
        ease: "power4.inOut"
      })
      .to(lines[0], { y: 13, duration: 0.2 })
      .to(lines[2], { y: -13, duration: 0.2 }, "<")
      .to(lines[0], { rotate: 45, duration: 0.2 }, "<")
      .to(lines[2], { rotate: -45, duration: 0.2 }, "<")
      .to(lines[1], { scale: 0.1, duration: 0.2, autoAlpha: 0 }, "<");
  }, []);

  useEffect(() => {
    const body = document.body;
    const html = document.documentElement;
    if (!tl.current) return;
    if (navActive) {
      tl.current.play();
      body.style.overflow = "hidden";
      html.style.overflow = "hidden";
    } else {
      tl.current.reverse();
      body.style.overflow = "auto";
      html.style.overflow = "auto";
    }
  }, [navActive]);

  return (
    <>
      <div
        onClick={menuToggle}
        ref={hiddenScreenRef}
        className={`fixed inset-0 z-10 h-[100dvh] w-full backdrop-blur-[3px]`}
      />
      <div className="mobile_navigation_content relative z-[1000] min-[620px]:hidden">
        <div
          onClick={menuToggle}
          className="burger_menu absolute top-[50px] right-[10px] z-[10000] w-[50px] h-[30px] flex flex-col justify-between"
        >
          {[1, 2, 3].map((__, lineIndex) => (
            <span
              ref={(el) => {
                if (el) {
                  burgerLineRefs.current[lineIndex] = el;
                }
              }}
              key={lineIndex}
              className="line_burger block border-t-3 border-[#0c2c23] rounded-2xl"
            ></span>
          ))}
        </div>
        <MoleculesNavigation
          navigationContentRef={navigationContentRef}
          className="fixed right-0 top-0 flex flex-col pt-[120px] px-[40px] h-[100dvh] bg-[#d8cec51e] rounded-l-2xl drop-shadow-2xl backdrop-blur-2xl"
        />
      </div>
    </>
  );
}
