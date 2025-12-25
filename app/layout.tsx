import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Montserrat } from "next/font/google";
import { Raleway } from "next/font/google";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Footy Elite Soccer Coaching",
  description: "Footy Elite Soccer Coaching is a soccer coaching company that provides one-on-one training for young athletes. We are committed to helping players build strong fundamentals, confidence, and a genuine love for the game as they work toward reaching their full potential.",
  keywords: "soccer coaching, one-on-one training, young athletes, soccer training, soccer development, soccer skills, soccer training programs, soccer training methods, soccer training techniques, soccer training drills, soccer training exercises, soccer training programs, soccer training methods, soccer training techniques, soccer training drills, soccer training exercises",
  viewport: {
    width: "device-width",
    initialScale: 1,
    viewportFit: "cover",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${raleway.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
