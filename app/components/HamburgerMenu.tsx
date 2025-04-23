"use client";

import Image from "next/image";
import { useState } from "react";
import classNames from "classnames";
import useCloseOnOutsideClick from "@/hooks/useCloseOnOutsideClick";
import Link from "next/link";
import { sections } from "./Header";

const HamburgerMenu = ({ borderColor = "border-medium-pink" }: { borderColor?: string }) => {
  const id = "hamburger-menu";
  const [isOpen, setOpen] = useState(false);
  useCloseOnOutsideClick(id, setOpen);

  return (
    <div id={id} className="flex flex-col">
      <button type="button" onClick={() => setOpen(!isOpen)}>
        {borderColor === "border-medium-pink"
          && (
            <Image
              src="/hamburger.svg"
              width={25}
              height={10}
              alt="hamburger-menu-icon"
              className="mb-2.5"
              unoptimized
            />
          )}
        {borderColor === "border-beige"
          && (
            <Image
              src="/hamburger-light.svg"
              width={25}
              height={10}
              alt="hamburger-menu-icon"
              className="mb-2.5"
              unoptimized
            />
          )}

      </button>
      <div className={classNames(!isOpen && "hidden", "absolute z-5 right-5 top-17 font-heading text-medium-pink text-[17px] tracking-[0.34px] flex flex-col text-end")}>
        <div>
          {sections.map((section) => (
            <Link href={section.sectionHref}>
              <div key={section.sectionName} className="hover:text-white">{section.sectionName}
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
};

export default HamburgerMenu;
