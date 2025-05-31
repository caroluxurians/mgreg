import Link from "next/link";
import SocialsSet from "./SocialsSet";

export const sections = [
  { sectionName: "Pro média", sectionHref: "pro-media" },
  { sectionName: "Moje práce", sectionHref: "moje-prace" },
  { sectionName: "O mně", sectionHref: "o-mne" },
  { sectionName: "Články", sectionHref: "clanky" },
];

const HeaderLanding = () => {
  return (
    <header className="flex justify-center bg-light-pink">
      <div
        className="flex flex-col md:flex-row
        justify-between items-baseline
        relative font-heading bg-transparent text-medium-pink
        mx-auto mt-5 gap-3
        md:mx-10 md:w-full
        lg:pt-0 lg:mt-2
        xl:h-auto
        2xl:w-[1267px] 2xl:mx-auto"
      >
        <div
          className="text-6xl tracking-[0.01em]
          sm:text-7xl
          md:text-4xl md:tracking-[0.02em]
          leading-none"
        >
          Markéta Gregorová
        </div>

        <nav
          className="flex leading-none
          text-2xl tracking-[0.02em]
          gap-4 mx-auto sm:gap-4 sm:text-3xl
          md:gap-6 md:items-end md:mx-0 md:text-3xl md:tracking-[0.02em]
          lg:gap-6 xl:gap-7 2xl:gap-10"
        >
          {sections.map((section) => (
            <Link href={section.sectionHref} key={section.sectionName} className="flex hover:text-header-hover-pink">
              {section.sectionName}
            </Link>
          ))}
        </nav>

        <SocialsSet color="dark" classNames="hidden lg:flex 2xl:pr-0" />
      </div>

    </header>
  );
};

export default HeaderLanding;
