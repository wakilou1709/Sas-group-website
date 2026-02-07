import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./lib/LanguageContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SAS Group - Excellence en BTP et Solutions Intelligentes pour l'Eau",
  description: "SAS Group est un leader en construction, développement logiciel et gestion intelligente de l'eau au Burkina Faso et en Tanzanie. Découvrez nos solutions innovantes en BTP, eau et assainissement, développement logiciel et commerce général.",
  keywords: "SAS Group, BTP, construction, eau, assainissement, Wateri, compteur intelligent, Burkina Faso, Tanzanie, développement logiciel, commerce général",
  authors: [{ name: "SAS Group" }],
  openGraph: {
    title: "SAS Group - Excellence en BTP et Solutions Intelligentes pour l'Eau",
    description: "Leader en construction et gestion intelligente de l'eau en Afrique",
    type: "website",
    locale: "fr_FR",
    alternateLocale: ["en_US", "sw_TZ"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={inter.className}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
