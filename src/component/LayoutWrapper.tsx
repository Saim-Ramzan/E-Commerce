import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";
import { Toaster } from "react-hot-toast";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Toaster position="top-right" />
      <div className="relative w-full flex items-center justify-center">
        <Navbar />
      </div>
      {children}
      <div className="bg-white p-1">
      <Footer />
      </div>
    </>
  );
}

