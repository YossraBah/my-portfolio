import Link from "next/link";
import Image from "next/image";
import logo from "@/public/yb-logo.png";

export default function Page() {
  return (
    <footer className="bg-gray-800 pt-28 pb-20 relative">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-0 justify-between items-center">
          <Link href="/">
            <span className="sr-only">Khurram Shafeeq</span>
            <Image src={logo} alt="Logo" className="w-16 h-16 bg-white rounded-full" quality={100} />
          </Link>
          <div>
            <div className="flex flex-col lg:flex-row items-center gap-3 lg:gap-12">
              <Link href="#about" className="text-gray-50 no-underline">
                About
              </Link>
              <Link href="#skills" className="text-gray-50 no-underline">
                Skills
              </Link>
              <Link href="#projects" className="text-gray-50 no-underline">
                Projects
              </Link>
              <Link href="#certifications" className="text-gray-50 no-underline">
                Certifications
              </Link>
              <Link href="#contact" className="text-gray-50 no-underline">
                Contact
              </Link>
            </div>
          </div>
          <div className="text-white">
            Copyright © 2025{" "}
            {/* <a
              href="https://www.figma.com/@templatecookie"
              className="text-white no-underline"
              target="_blank"
            >
              Picto
            </a> */}
            
          </div>
        </div>
      </div>
      <div className="text-gray-50 text-[11px] absolute left-0 right-0 bottom-3 text-center">
        Designed by{" "}
        <a
          href="https://www.figma.com/@templatecookie"
          className="text-gray-400"
          target="_blank"
        >
          Templatecookie
        </a>
      </div>
    </footer>
  );
}
