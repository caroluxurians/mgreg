"use client";

import Image from "next/image";
import { useState } from "react";
import classNames from "classnames";
import useCloseOnOutsideClick from "@/hooks/useCloseOnOutsideClick";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { sections } from "./Header";

const HamburgerMenu = ({ borderColor = "border-medium-pink" }: { borderColor?: string }) => {
  const pathname = usePathname();
  const isOMne = pathname === "/o-mne";
  const isClanky = pathname.includes("/clanky");
  const id = "hamburger-menu";
  const [isOpen, setOpen] = useState(false);
  useCloseOnOutsideClick(id, setOpen);

  return (
    <div id={id} className="flex flex-col relative">
      <button type="button" onClick={() => setOpen(!isOpen)} className="cursor-pointer">
        {borderColor === "border-medium-pink"
          && (
            <Image
              src="/hamburger.svg"
              width={30}
              height={12}
              alt="hamburger-menu-icon"
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
              unoptimized
            />
          )}

      </button>
      <div
        className={classNames(
          !isOpen && "hidden",
          "font-heading w-17 text-xl tracking-[0.34px] absolute z-5 right-0 top-6 flex flex-col text-end rounded-lg sm:w-20 sm:top-8",
          isOMne && "bg-medium-pink",
          isClanky && "bg-beige",
          !isOMne && !isClanky && "bg-light-pink",
        )}
      >
        <nav>
          {sections.map((section) => {
            const isActive = pathname === `/${section.sectionHref}`;
            return (
              <Link href={`/${section.sectionHref}`} key={section.sectionName}>
                <div
                  className={classNames(
                    isActive
                      ? isOMne
                        ? "text-light-pink"
                        : "text-white"
                      : isOMne
                        ? "text-white"
                        : "text-medium-pink",
                    "hover:text-[#DF7AAE] mb-0.5",
                  )}
                >
                  {section.sectionName}
                </div>
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default HamburgerMenu;
