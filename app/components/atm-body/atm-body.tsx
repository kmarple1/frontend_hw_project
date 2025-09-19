import Image from "next/image";

import StickerGraffiti from "../../../public/sticker_graf.png";
import Systems from "../../../public/systems.png";
import Cards from "../cards/cards";
import Interface from "../interface/interface";

export default function ATMBody() {
  return (
    <div className="relative flex w-[376px] flex-col self-center">
      <div className="h-[8px] bg-gray-500" />
      <div className="flex h-[840px] flex-col bg-gray-100">
        <div className="self-center py-[9px]">
          <Cards />
        </div>
        <div className="self-center">
          <Interface />
        </div>
      </div>
      <Image className="absolute top-[259px] right-[200px]" src={StickerGraffiti} alt="Sticker Graffiti" />
      <Image className="absolute top-[283px] right-[65px]" src={Systems} alt="Systems Logo" />
    </div>
  );
}
