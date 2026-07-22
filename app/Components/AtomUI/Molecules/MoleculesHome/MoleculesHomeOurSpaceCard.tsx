"use client";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import AtomHeading from "../../Atoms/AtomTypography/AtomHeading";
import AtomParagraph from "../../Atoms/AtomTypography/AtomParagraph";
import Image from "next/image";

import gsap from "gsap";
import { useLanguage } from "@/app/context/useLanguage";

interface CardImage {
  image: string;
}

interface CardCategory {
  title: string;
  paragraph: string;
  icon: string;
  cardImage: CardImage[];
}

interface MoleculesHomeOurSpaceCardProps {
  cardData: CardCategory[];
}

export default function MoleculesHomeOurSpaceCard() {
  const { t } = useLanguage();
  const cardTitleMain = t.ourSpaceSection.ourSpaceCards.cardMainHall.title;
  const cardParagraphMain = t.ourSpaceSection.ourSpaceCards.cardMainHall.paragraph;

  const cardTitleLoungeArea = t.ourSpaceSection.ourSpaceCards.cardLoungeArea.title;
  const cardParagraphLoungeArea = t.ourSpaceSection.ourSpaceCards.cardLoungeArea.paragraph;

  const cardTitleVipArea = t.ourSpaceSection.ourSpaceCards.cardVipHall.title;
  const cardParagraphVipArea = t.ourSpaceSection.ourSpaceCards.cardVipHall.paragraph

  const cardData = [
    {
      cardImage: [
        { image: "/images/background/about-us-background.jpg" },
        { image: "/images/background/home-background.jpg" },
        { image: "/images/background/menu-background.jpg" },
        { image: "/images/background/menu-background1.jpg" }
      ],
      title: cardTitleMain,
      paragraph: cardParagraphMain,
      icon: "/images/icons/chairs.svg"
    },
    {
      cardImage: [
        { image: "/images/background/about-us-background.jpg" },
        { image: "/images/background/home-background.jpg" },
        { image: "/images/background/menu-background.jpg" },
        { image: "/images/background/menu-background1.jpg" }
      ],
      title: cardTitleLoungeArea,
      paragraph: cardParagraphLoungeArea,
      icon: "/images/icons/sofa.svg"
    },
    {
      cardImage: [
        { image: "/images/background/about-us-background.jpg" },
        { image: "/images/background/home-background.jpg" },
        { image: "/images/background/menu-background.jpg" },
        { image: "/images/background/menu-background1.jpg" }
      ],
      title: cardTitleVipArea,
      paragraph: cardParagraphVipArea,
      icon: "/images/icons/vip.svg"
    }
  ];
  const [slideCurrent, setSlideCurrent] = useState(cardData.map(() => 0));
  const cardTrackRef = useRef<HTMLDivElement[]>([]);
  const intervalRef = useRef<(NodeJS.Timeout | null)[]>([]);

  const totalCard = cardData[0].cardImage.length;

  function startAutoSlide(cardIndex: number) {
    if (intervalRef.current[cardIndex]) {
      clearInterval(intervalRef.current[cardIndex]);
    }

    intervalRef.current[cardIndex] = setInterval(() => {
      nextSlide(cardIndex);
    }, 3000);
  }

  function nextSlide(cardIndex: number) {
    setSlideCurrent((prev) => {
      const copy = [...prev];
      copy[cardIndex] = gsap.utils.wrap(0, cardData[cardIndex].cardImage.length, copy[cardIndex] + 1);

      return copy;
    });
  }

  function prevSlide(cardIndex: number) {
    setSlideCurrent((prev) => {
      const copy = [...prev];
      copy[cardIndex] = gsap.utils.wrap(0, cardData[cardIndex].cardImage.length, copy[cardIndex] - 1);

      return copy;
    });
  }

  useLayoutEffect(() => {
    if (cardTrackRef.current.length === 0) return;
    cardTrackRef.current.forEach((track, index) => {
      gsap.to(track, {
        xPercent: -slideCurrent[index] * 100,
        duration: 0.5,
        ease: "power4.inOut"
      });
    });
  }, [slideCurrent]);

  useEffect(() => {
    cardData.forEach((_, index) => {
      startAutoSlide(index);
    });

    return () => {
      intervalRef.current.forEach((interval) => {
        if (interval) {
          clearInterval(interval);
        }
      });
    };
  }, []);
  return (
    <>
      <div className="our_space_card flex gap-6 max-[1156px]:gap-6 max-[900px]:flex-col items-center mx-[10px]">
        {cardData.map((card, cardIndex) => (
          <div
            key={cardIndex}
            className="relative w-[400px] min-h-[500px] pb-[20px] overflow-hidden bg-[#E5D7CE] border border-[#946326] rounded-3xl shadow-2xl max-[404px]:w-full"
          >
            <div className="card_button w-full h-[200px] flex justify-between items-center absolute z-50">
              <button
                onClick={() => {
                  prevSlide(cardIndex);
                  startAutoSlide(cardIndex);
                }}
                className=" cursor-pointer bg-[#EBE0D5] border border-[#946326] p-[5px] m-[5px] rounded-[20px]"
              >
                <Image src="/images/icons/next.svg" className="-scale-x-100" width={20} height={20} alt="sss" />
              </button>
              <button
                onClick={() => {
                  nextSlide(cardIndex);
                  startAutoSlide(cardIndex);
                }}
                className=" cursor-pointer bg-[#EBE0D5] border border-[#946326] p-[5px] m-[5px] rounded-[20px]"
              >
                <Image src="/images/icons/next.svg" width={20} height={20} alt="sss" />
              </button>
            </div>
            <div
              ref={(el) => {
                if (el) {
                  cardTrackRef.current[cardIndex] = el;
                }
              }}
              className="card_images relative flex"
            >
              {card.cardImage.map((cardImg, cardImgIndex) => (
                <div key={cardImgIndex} className="min-w-full relative h-[200px] shrink-0">
                  <Image src={cardImg.image} alt="sss" fill />
                </div>
              ))}
            </div>
            <div className="card_heading_and_paragraph flex flex-col justify-center items-center mt-[10px]">
              <div className="my-[10px] border border-[#946326] rounded-[50px] p-[10px]">
                <Image src={card.icon} width={60} height={60} className="" alt="ssss" />
              </div>
              <AtomHeading level="h2" className="montserrat-m uppercase text-[18px]">
                {card.title}
              </AtomHeading>
              <span className="w-[40%] block border-t border-[#946326] my-[10px]"></span>
              <AtomParagraph className="montserrat-l w-[70%] text-center">{card.paragraph}</AtomParagraph>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
