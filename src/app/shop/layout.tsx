"use client"
import LayoutWrapper from "@/component/LayoutWrapper";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <LayoutWrapper>{children}</LayoutWrapper>
    </>
  );
}

