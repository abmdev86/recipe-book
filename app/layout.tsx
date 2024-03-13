import type { Metadata } from "next";
import { young_serif } from "@/app/ui/fonts";
import "./ui/globals.css";

export const metadata: Metadata = {
  title: "Recipe Book - Next auth demo",
  description: "Demo application for Auroiah Morgan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${young_serif.className} antialiased m-w-[1440px]`}>
        {children}
      </body>
    </html>
  );
}
