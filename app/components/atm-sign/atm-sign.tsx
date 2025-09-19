import Image from "next/image";

import ATMSignImage from "../../../public/atm_sign.png";
import Graffiti from "../../../public/graffiti.png";

export default function ATMSign() {
  return (
    <div className="relative rounded-xl bg-blue-500 px-[62px] py-[13px]">
      <Image src={ATMSignImage} alt="ATM Sign" />
      <Image className="absolute top-[30px] right-[24px]" src={Graffiti} alt="Graffiti" />
    </div>
  );
}
