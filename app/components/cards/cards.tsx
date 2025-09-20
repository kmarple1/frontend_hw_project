"use client";

import Image from "next/image";

import CardsImage from "../../../public/creditcard_sprite.png";

type CardsType = {
  activeCard: string;
};

type CardOffsetsType = {
  [index: string]: {
    offset: number;
    width: number;
  };
};

export default function Cards({ activeCard }: CardsType) {
  // horizontal offsets and widths for each active card sprite in the image
  const activeCardOffsets: CardOffsetsType = {
    star: {
      offset: 0,
      width: 26,
    },
    pulse: {
      offset: 36,
      width: 54,
    },
    maestro: {
      offset: 90,
      width: 40,
    },
    mastercard: {
      offset: 130,
      width: 40,
    },
    plus: {
      offset: 160,
      width: 40,
    },
    visa: {
      offset: 210,
      width: 42,
    },
  };

  return (
    <div className="relative mx-[3px]">
      <div className="mt-[-1px] h-[19px] overflow-hidden">
        <Image className="object-cover object-bottom" fill src={CardsImage} alt="Cards" />
      </div>
      {activeCard !== "" && (
        <div
          // For some reason, the variable values wouldn't work as part of className, work in style
          className="absolute top-0 h-[19px] overflow-hidden"
          style={{
            left: `${activeCardOffsets[activeCard].offset}px`,
            width: `${activeCardOffsets[activeCard].width}px`,
          }}
        >
          <Image
            className="absolute min-h-[42px] min-w-[237px]"
            height={42}
            width={237}
            src={CardsImage}
            style={{ left: `-${activeCardOffsets[activeCard].offset}px` }}
            alt="Cards"
          />
        </div>
      )}
    </div>
  );
}
