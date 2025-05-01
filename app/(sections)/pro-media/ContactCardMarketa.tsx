"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const ContactCardMarketa = () => {
  const [flipped, setFlipped] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setFlipped(false);
  }, [pathname]);

  return (
    <button
      type="button"
      className="relative w-68 h-90 md:w-50 md:h-67 lg:w-62 lg:h-83 xl:w-75 xl:h-100 2xl:w-81 2xl:h-108 [perspective:1000px] mx-auto bg-transparent"
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
          <div className="absolute -bottom-38 w-82 -right-7 md:w-62 md:-bottom-29 md:-right-6 lg:w-74 lg:-bottom-34 lg:-right-5 xl:w-87 xl:-bottom-40 xl:-right-4 2xl:w-94 2xl:-right-5 2xl:-bottom-43">
            <Image
              src="/marketa-contact-card-new.png"
              height={432}
              width={325}
              alt="Markéta kontaktní karta"
              unoptimized
              className="w-full h-auto"
            />
          </div>
          <div className="absolute top-5 left-6 flex flex-col md:top-4 md:left-4 xl:top-5 xl:left-6 2xl:top-6 2xl:left-7">
            <div className="font-heading text-beige text-4xl md:text-3xl lg:text-4xl xl:text-5xl">
              Markéta Gregorová
            </div>
            <div className="text-light-pink text-left text-lg md:text-sm lg:text-base xl:text-lg 2xl:text-xl">
              Europoslankyně
            </div>
          </div>
        </div>
        {/* Back Face */}
        <div className="absolute inset-0 w-full h-full bg-medium-pink rounded-3xl flex flex-col items-center justify-center [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <div className="absolute top-5 left-6 flex flex-col md:top-4 md:left-4 xl:top-5 xl:left-6 2xl:top-6 2xl:left-7">
            <div className="font-heading text-beige text-4xl md:text-3xl lg:text-4xl xl:text-5xl">
              Markéta Gregorová
            </div>
            <div className="text-light-pink text-left font-medium text-lg md:text-sm lg:text-base xl:text-lg 2xl:text-xl">
              Europoslankyně
            </div>
          </div>
          <div className="flex flex-col absolute top-36 left-6 md:top-25 md:left-4 lg:top-32 xl:top-40 xl:left-6 2xl:left-7 2xl:top-42">
            <div
              className="text-white text-left mb-16
                md:text-sm md:mb-6 md:w-44
                lg:text-base lg:w-auto lg:mb-14
                xl:text-lg xl:mb-16 2xl:text-xl 2xl:mb-20"
            >
              Potřebujete mě kontaktovat?
              Ráda odpovím na vaše
              dotazy nebo připomínky.
            </div>
            <a
              href="mailto:marketa.gregorova@europarl.europa.eu"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-white font-black text-base flex flex-col text-left hover:underline md:text-sm lg:text-lg 2xl:text-xl">
                <span>marketa.gregorova</span>
                <span>@europarl.europa.eu</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </button>
  );
};

export default ContactCardMarketa;

/*  w-[270px] h-[359px]  md:w-[200px] md:h-[266px]
lg:w-[250px] lg:h-[332px] xl:w-[300px] xl:h-[399px] 2xl:w-[325px] 2xl:h-[432px] */
