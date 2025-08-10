import Image from "next/image";
import logo from "@/public/yb-logo.png";

import Navigation from "@/app/_components/Navigation";
import Link from "next/link";

export default function Page() {
  return (
    <header className="sticky top-0 z-50 bg-white py-6">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex justify-between gap-2 items-center">
            <Image src={logo} alt="Logo" className="w-14 h-14" quality={100} /> <div className="bg-[#293548] rounded-full w-2 h-2"></div>
          </Link>
          <Navigation />
        </div>
      </div>
    </header>
  );
}
