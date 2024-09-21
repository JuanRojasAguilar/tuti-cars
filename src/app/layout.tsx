import type { Metadata } from "next";
import { Afacad } from "next/font/google";
import "./globals.css";
import NavPrincipal from "./components/NavPrincipal";

const inter = Afacad();

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
