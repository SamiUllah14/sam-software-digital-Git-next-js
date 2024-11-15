import type { Metadata } from "next";
import { IBM_Plex_Sans } from 'next/font/google';

import './globals.css';
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/GlobalComponents/Footer/Footer";
import AboveFooterDownload from "./components/GlobalComponents/Footer/AboveFooterDownload";
import HandGestureFooter from "./components/HandGestureFooter/HandGestureFooter";
import CookieConsentBanner from "./components/ConsentCookiesComponent/ConsentCookiesComponent";
import WhatsAppButton from "./components/WhatsAppButton/WhatsAppButton";

// Initialize Silkscreen font


// Initialize IBM Plex Sans
const ibmPlexSansInit = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-ibm-plex',
});

export const metadata: Metadata = {
  title: "NewYorkSoftwares",
  description: "Premier builder for mobile applications, web applications, and websites",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${ibmPlexSansInit.variable} ${ibmPlexSansInit.variable}`}>
        <NavBar />
        {children}
        <WhatsAppButton />  {/* This will ensure the button is on every page */}

        <CookieConsentBanner />

        
        <HandGestureFooter/>
        <AboveFooterDownload/>

        <Footer/>

      </body>

    </html>
  );
}
