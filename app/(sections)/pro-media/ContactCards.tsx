"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import ContactCardMarketa from "./ContactCardMarketa";
import ContactCardTomas from "./ContactCardTomas";
import Sticker from "./Sticker";

const ContactCards = () => {
  const [flippedMarketa, setFlippedMarketa] = useState(false);
  const [flippedTomas, setFlippedTomas] = useState(false);

  const pathname = usePathname();
  useEffect(() => {
    setFlippedMarketa(false);
  }, [pathname]);

  return (
    <div className="flex flex-col gap-6 mb-8 sm:flex-row md:mb-0 md:mt-1 lg:mt-2 xl:gap-8">
      <div className="flex absolute z-3 right-10 top-44 sm:top-7 sm:right-7 md:top-6 md:right-10 lg:top-8 lg:right-13 xl:top-11 xl:right-6 2xl:right-48 2xl:top-14 3xl:right-40">
        <Sticker
          backgroundColor="bg-medium-pink"
          textColor="text-beige"
          additionalStyles="pt-1 cursor-pointer"
          onClick={() => {
            setFlippedMarketa(true);
            setFlippedTomas(true);
          }}
          content={(
            <>
              klikněte <br />
              na nás
            </>
          )}
        />
      </div>
      <ContactCardMarketa flipped={flippedMarketa} setFlipped={setFlippedMarketa} />
      <ContactCardTomas flipped={flippedTomas} setFlipped={setFlippedTomas} />
    </div>
  );
};

export default ContactCards;
