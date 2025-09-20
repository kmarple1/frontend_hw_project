import Image from "next/image";

import StickerGraffiti from "../../../public/sticker_graf.png";
import Systems from "../../../public/systems.png";
import Interface from "../interface/interface";

export default function ATMBody() {
  return (
    <div className="relative flex max-h-[70%] min-h-[380px] w-[376px] flex-grow flex-col self-center">
      <div className="h-[8px] bg-gray-500" />
      <div className="flex flex-grow flex-col bg-gray-100">
        <div className="self-center">
          <Interface />
        </div>
      </div>
      <Image className="absolute top-[259px] right-[200px]" src={StickerGraffiti} alt="Sticker Graffiti" />
      <Image className="absolute top-[283px] right-[65px]" src={Systems} alt="Systems Logo" />
    </div>
  );
}
