import type { Metadata } from "next";
import { Geist_Mono, Instrument_Serif } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const spaceGrotesk = localFont({
  src: [
    { path: "../../public/fonts/SpaceGrotesk-Light.ttf", weight: "300" },
    { path: "../../public/fonts/SpaceGrotesk-Regular.ttf", weight: "400" },
    { path: "../../public/fonts/SpaceGrotesk-Medium.ttf", weight: "500" },
    { path: "../../public/fonts/SpaceGrotesk-SemiBold.ttf", weight: "600" },
    { path: "../../public/fonts/SpaceGrotesk-Bold.ttf", weight: "700" },
  ],
  variable: "--font-space-grotesk",
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RickyPark Holdings — Building the Ecosystem Where AI Builds Software Itself",
  description:
    "RickyPark Holdings is an AI-native ecosystem company building autonomous software infrastructure across finance, property, markets, intelligence, and real-world assets.",
  icons: {
    icon: "/assets/logo-mark.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${geistMono.variable} ${instrumentSerif.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
