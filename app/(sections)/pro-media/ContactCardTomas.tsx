"use client";

import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

const ContactCardTomas = ({ flipped, setFlipped }: {
  flipped: boolean, setFlipped: Dispatch<SetStateAction<boolean>>
}) => {
  return (
    <button
      type="button"
      className="relative w-68 h-90 md:w-50 md:h-67 lg:w-62 lg:h-83 xl:w-75 xl:h-100 2xl:w-81 2xl:h-108 [perspective:1000px] mx-auto bg-transparent cursor-pointer hover:scale-102 transition-transform duration-200"
      onClick={() => setFlipped(!flipped)}
      aria-pressed={flipped}
      tabIndex={0}
    >
      <div
        className={`
          relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d]
          ${flipped ? "[transform:rotateY(180deg)]" : ""}
        `}
      >
        {/* Front Face */}
        <div className="absolute bg-medium-pink w-full h-full overflow-hidden rounded-3xl flex [backface-visibility:hidden]">
          <div className="absolute -bottom-18 w-82 -right-9 md:w-62 md:-bottom-14 md:-right-8 lg:w-74 xl:w-82 xl:-bottom-14 2xl:w-94 2xl:-right-10 2xl:-bottom-18">
            <Image
              src="/tomas-contact-card.png"
              height={432}
              width={325}
              alt="Tomas Polak contact card"
              unoptimized
              className="w-full h-auto"
            />
          </div>

          <div className="absolute top-5 left-6 flex flex-col md:top-4 md:left-4 xl:top-5 xl:left-6 2xl:top-6 2xl:left-7">
            <div className="font-heading text-beige text-4xl md:text-3xl lg:text-4xl xl:text-5xl">
              Tomáš Polák
            </div>
            <div className="text-light-pink text-left text-lg md:text-sm lg:text-base xl:text-lg 2xl:text-xl">
              PR manažer
            </div>
          </div>
        </div>
        {/* Back Face */}
        <div className="absolute inset-0 w-full h-full bg-medium-pink rounded-3xl flex flex-col items-center justify-center [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <div className="absolute top-5 left-6 flex flex-col md:top-4 md:left-4 xl:top-5 xl:left-6 2xl:top-6 2xl:left-7">
            <div className="font-heading text-beige text-4xl md:text-3xl lg:text-4xl xl:text-5xl">
              Tomáš Polák
            </div>
            <div className="text-light-pink text-left font-medium text-lg md:text-sm lg:text-base xl:text-lg 2xl:text-xl">
              PR manažer
            </div>
          </div>
          <div className="flex flex-col absolute top-36 left-6 md:top-23 md:left-4 lg:top-32 xl:top-40 xl:left-6 2xl:left-7 2xl:top-42">
            <div
              className="text-white text-left mb-10 w-60
                md:text-sm md:mb-4 md:w-42
                lg:text-base lg:w-auto lg:mb-5
                xl:text-lg xl:mb-8 2xl:text-xl 2xl:mb-11"
            >
              Potřebujete mě kontaktovat?
              Rád odpovím na vaše
              dotazy nebo připomínky.
            </div>
            <div className="flex flex-col gap-3 md:gap-2">
              <a
                href="mailto:tomas.polak@europarl.europa.eu"
                className="text-white font-black text-base flex flex-col text-left hover:underline md:text-sm lg:text-base xl:text-lg 2xl:text-xl"
                onClick={(e) => e.stopPropagation()}
              >
                <span>tomas.polak</span>
                <span>@europarl.europa.eu</span>
              </a>
              <a
                href="tel:+420728035059"
                className="text-white font-black text-base text-left hover:underline md:text-sm lg:text-base xl:text-lg 2xl:text-xl"
                onClick={(e) => e.stopPropagation()}
              >
                +420 728 035 059
              </a>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
};

export default ContactCardTomas;
