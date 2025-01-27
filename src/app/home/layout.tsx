import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";
import { Toaster } from "react-hot-toast";
import StoreProvider from "../StoreProvider";

export default function RootLayout({
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
      {/* {children} */}
      <StoreProvider>{children}</StoreProvider>
      <Footer />
    </>
  );
}
