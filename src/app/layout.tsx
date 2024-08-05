import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavPrincipal from "./components/NavPrincipal";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tuti Cars",
  description: "Tuti Cars page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <main>
        <NavPrincipal />
        {children}
        </main>
      </body>
    </html>
  );
}
