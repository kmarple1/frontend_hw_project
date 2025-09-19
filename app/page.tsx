import ATMBody from "./components/atm-body/atm-body";
import ATMSign from "./components/atm-sign/atm-sign";
// import Mock1 from "../assets/Mock_1.png";
// import Image from "next/image";

export default function Home() {
  return (
    <div className="absolute bottom-0 flex w-screen flex-row">
      {/* <Image src={Mock1} alt="test" /> */}
      <div className="mx-auto flex w-fit flex-col">
        <ATMSign />
        <ATMBody />
      </div>
    </div>
  );
}
