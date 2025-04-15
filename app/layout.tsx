import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
});

const magnoSans = localFont({
  src: "./MagnoSans-Black.woff2",
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Markéta Gregorová",
    default: "Markéta Gregorová",
  },
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="cs" className="h-screen">
      <body
        className={`${dmSans.className} ${magnoSans.variable} antialiased sm:h-screen flex flex-col`}
      >
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
