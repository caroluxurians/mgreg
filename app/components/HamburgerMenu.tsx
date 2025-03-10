"use client";

import Image from "next/image";
import { useState } from "react";
import classNames from "classnames";
import useCloseOnOutsideClick from "@/hooks/useCloseOnOutsideClick";
import { sectionsMobile } from "./Header";

const HamburgerMenu = () => {
  const id = "hamburger-menu";
  const [isOpen, setOpen] = useState(false);
  useCloseOnOutsideClick(id, setOpen);

  return (
    <div id={id} className="flex flex-col">
      <button type="button" onClick={() => setOpen(!isOpen)}>
        <Image
          src="/hamburger.png"
          width={25}
          height={10}
          alt="hamburger-menu-icon"
          className="mb-2.5"
          unoptimized
        />
      </button>
      <div className={classNames(!isOpen && "hidden", "absolute z-5 right-5 top-17 font-heading text-[17px] tracking-[0.34px] flex flex-col text-end")}>
        <div>
          {sectionsMobile.map((section) => (
            <div className="hover:text-white">{section}</div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default HamburgerMenu;
