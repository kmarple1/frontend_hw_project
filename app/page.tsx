import ATMBody from "./components/atm-body/atm-body";
import ATMSign from "./components/atm-sign/atm-sign";
// import Mock1 from "../assets/Mock_1.png";
// import Image from "next/image";

export default function Home() {
  return (
    <div className="absolute flex h-screen w-screen flex-row">
      <div className="mx-auto mt-auto flex h-screen w-fit flex-col justify-end">
        <ATMSign />
        <ATMBody />
      </div>
    </div>
  );
}
