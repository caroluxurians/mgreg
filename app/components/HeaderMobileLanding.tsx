import Link from "next/link";

export const sections = [
  { sectionName: "Pro média", sectionHref: "pro-media" },
  { sectionName: "Moje práce", sectionHref: "moje-prace" },
  { sectionName: "O mně", sectionHref: "o-mne" },
  { sectionName: "Články", sectionHref: "clanky" },
];

const HeaderMobileLanding = () => {
  return (
    <header className="flex md:hidden justify-center bg-light-pink">
      <div
        className="mt-5 flex flex-col gap-3
        font-heading text-medium-pink"
      >
        <div className="text-6xl tracking-[0.01em] sm:text-7xl leading-none">
          Markéta Gregorová
        </div>

        <nav
          className="flex justify-center leading-none
          text-2xl tracking-[0.02em]
          gap-4 sm:gap-4 sm:text-3xl"
        >
          {sections.map((section) => (
            <Link href={section.sectionHref} key={section.sectionName} className="flex hover:text-header-hover-pink">
              {section.sectionName}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default HeaderMobileLanding;
