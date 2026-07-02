import React from "react";
import AtomHeading from "../../Atoms/AtomTypography/AtomHeading";
import AtomParagraph from "../../Atoms/AtomTypography/AtomParagraph";
import Image from "next/image";

interface CardImage {
  image: string;
}

interface CardCategory {
  title: string;

  cardImage: CardImage[];
}

interface MoleculesHomeOurSpaceCardProps {
  cardCategory: CardCategory[];
}

export default function MoleculesHomeOurSpaceCard() {
  const cardData = [
    {
      title: "Main home",
      cardImage: [
        { image: "/images/background/about-us-background.jpg" },
        { image: "/images/background/home-background.jpg" },
        { image: "/images/background/menu-background.jpg" },
        { image: "/images/background/menu-background1.jpg" }
      ]
    }
  ];
  return (
    <>
      <div className="our_space_card">
        {cardData.map((card, cardIndex) => (
          <div className="relative w-[400px] h-[400px]">
            <div className="card_button w-full h-[200px] flex justify-between items-center absolute">
              <button>Back</button>
              <button>Next</button>
            </div>
            <div className="card_images relative flex">
              {card.cardImage.map((cardImg, cardImgIndex) => (
                <div className="w-full relative h-[200px] shrink-0">
                  <Image src={cardImg.image} alt="sss" fill />
                </div>
              ))}
            </div>
            <div className="card_heading_and_paragraph">
              <AtomHeading level="h2">{card.title}</AtomHeading>
              <AtomParagraph>shdshd jshdjsdh sjhddjshdjhs sjbddsj</AtomParagraph>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
