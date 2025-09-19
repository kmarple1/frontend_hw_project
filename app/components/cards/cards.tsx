import Image from "next/image";

import CardsImage from "../../../public/creditcard_sprite.png";

export default function Cards() {
  return (
    <div className="relative">
      <Image src={CardsImage} alt="Cards" />
    </div>
  );
}
