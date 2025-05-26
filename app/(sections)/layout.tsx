import "../globals.css";
import Footer from "../components/Footer";

const SectionsLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="bg-medium-pink">
      {children}
      <Footer />
    </div>
  );
};

export default SectionsLayout;
