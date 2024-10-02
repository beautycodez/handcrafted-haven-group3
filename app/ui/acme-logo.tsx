import Image from "next/image";
import { lusitana } from "@/app/ui/fonts";

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <Image
        src="/logo.jpg"
        width={150}
        height={150}
        className="hidden md:block"
        alt="Screenshots of the dashboard project showing desktop version"
      />
      <p className="text-[44px]">Handcrafted Haven</p>
    </div>
  );
}
