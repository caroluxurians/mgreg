"use client";

import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SocialsSet from "./SocialsSet";

export const sections = [
  { sectionName: "Pro média", sectionHref: "pro-media" },
  { sectionName: "Moje práce", sectionHref: "moje-prace" },
  { sectionName: "O mně", sectionHref: "o-mne" },
  { sectionName: "Články", sectionHref: "clanky" },
];

const Header = () => {
  const pathname = usePathname();
  const colorTheme = pathname === "/o-mne" ? "light" : "dark";
  const isClanky = pathname === "/clanky";

  return (
    <header className="hidden md:flex">
      <div
        className="main-width mt-6 mx-auto
        flex justify-between items-baseline
        font-heading z-2"
      >
        <Link href="/">
          <div
            className={classNames(
              pathname === "/o-mne" ? "text-beige" : "text-medium-pink",
              `hover:text-[#DF7AAE] 
              leading-none text-[30px] tracking-[0.3px] xl:text-[40px] xl:tracking-[0.4px]`,
            )}
          >
            Markéta Gregorová
          </div>
        </Link>

        <nav
          className={classNames(pathname === "/o-mne" ? "text-light-pink" : "text-medium-pink", `flex leading-none
        gap-6 text-[25px] tracking-[0.5px]
        lg:text-[26px] lg:tracking-[0.6px]
        xl:gap-7 xl:text-[30px] xl:tracking-[0.8px]
        2xl:gap-10 2xl:tracking-[0.3px]`)}
        >
          {sections.map((section) => (
            <Link href={`/${section.sectionHref}`} key={section.sectionName}>
              <div
                className={classNames(
                  "flex",
                  "hover:text-[#DF7AAE]",
                  pathname === `/${section.sectionHref}`
                    ? (isClanky ? "text-light-pink" : "text-white")
                    : "",
                )}
                key={section.sectionName}
              >
                {section.sectionName}
              </div>
            </Link>
          ))}
        </nav>
        <SocialsSet color={colorTheme} classNames="hidden lg:flex" />
      </div>
    </header>
  );
};

export default Header;
