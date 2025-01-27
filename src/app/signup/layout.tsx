import { Toaster } from "react-hot-toast";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <Toaster position="top-right"/>
        {children}
    </>
  );
}
