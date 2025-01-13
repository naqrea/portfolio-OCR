import React from "react";
import Image from "next/image";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#ffffff] py-16 relative" id="contact">
      <div className="container mx-auto pt-32 px-4 sm:px-8 lg:px-24">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-8 sm:gap-4">
          <div className="flex flex-col sm:flex-row items-center sm:items-end gap-6 sm:gap-8 lg:gap-12">
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32">
              <Image
                src="/images/footer.png"
                alt="Vector illustration"
                fill
                className="object-contain"
                sizes="(max-width: 640px) 6rem, (max-width: 768px) 7rem, 8rem"
              />
            </div>
            <p className="text-black font-roboto text-2xl lg:text-4xl  leading-tight text-center sm:text-left">
              UN PROJET
              <br />
              WEB À
              <br />
              RÉALISER ?
            </p>
          </div>

          <a
            href="mailto:contact@andreavarela.fr"
            className="w-fit sm:w-auto flex items-center justify-center gap-3 sm:gap-4 px-4 sm:px-6 py-3 border border-black text-white font-roboto bg-black hover:bg-black hover:bg-green hover:text-black transition-all"
          >
            <Mail size={32} strokeWidth={1.3} />
            <span className="text-2xl">CONTACT</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
