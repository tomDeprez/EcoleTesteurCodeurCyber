import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./new-design.css?v=2";
import "./new-design2.css?v=2";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Ecole Testeur Codeur Cyber Lyon | Formations Tech Intensives",
  description: "Formations intensives à Lyon en développement, test logiciel et cybersécurité. Devenez un expert en 4 mois.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
