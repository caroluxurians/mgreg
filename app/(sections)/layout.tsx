import "../globals.css";
import Footer from "../components/Footer";

const SectionsLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      {children}
      <Footer />
    </>
  );
};

export default SectionsLayout;
