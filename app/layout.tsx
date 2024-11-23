import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Login/SignUp Page",
  description: "This is a assignment task in which i have create a login signup page.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={`font-sans text-white `} >
        {children}
      </body>
    </html>
  );
}
