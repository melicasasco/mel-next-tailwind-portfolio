import type { Metadata } from "next";
import React from "react";
import "./globals.css";
import MainContent from "./MainContent";
import Providers from "./Providers";
import Script from "next/script";

export const metadata: Metadata = {
  title: 'Melanie Casasco - Frontend Developer',
  description: 'Professional portfolio of Melanie Casasco, frontend developer specialized in React, Next.js and UX/UI.',
  keywords: ['Melanie Casasco', 'frontend', 'React', 'Next.js', 'portfolio', 'UX/UI'],
  authors: [{ name: 'Melanie Casasco', url: 'https://mel-portfolio.netlify.app/' }],
  openGraph: {
    title: 'Melanie Casasco - Frontend Developer',
    description: 'Professional portfolio of Melanie Casasco, frontend developer specialized in React and UX/UI design.',
    url: 'https://mel-portfolio.netlify.app',
    siteName: 'Melanie Casasco Portfolio',
    images: [
      {
        url: 'https://mel-portfolio.netlify.app/_next/image?url=%2Fimg1.png&w=3840&q=75',
        width: 1200,
        height: 630,
        alt: 'Imagen de portfolio de Melanie Casasco',
      },
    ],
    locale: 'es_AR',
    type: 'website',
  },
  icons: {
    icon: '/favicon.svg',
  },
};


export default function RootLayout() {
  return (
    <html lang="en">
      <head>
        <title>Melanie Casasco</title>
        <meta name="description" content="I am Melanie Casasco, a frontend developer specialized in React, Next.js and UX/UI design. This is my professional portfolio." />
        <meta name="keywords" content="Melanie Casasco, frontend developer, React, Next.js, portfolio, Buenos Aires, desarrolladora web" />
        <meta name="author" content="Melanie Casasco" />
        <meta property="og:title" content="Melanie Casasco - Frontend Developer" />
        <meta property="og:description" content="Portfolio profesional de Melanie Casasco. Professional portfolio of Melanie Casasco, frontend developer specialized in React and UX/UI design." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mel-portfolio.netlify.app" />
        <meta property="og:image" content="https://mel-portfolio.netlify.app/_next/image?url=%2Fimg1.png&w=3840&q=75" />
        <link rel="icon" href="/favicon.svg" />
        
        {/* Google Analytics */}
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-2MPGVF45HG', {
                page_path: window.location.pathname,
              });
            `}
          </Script>
      </head>
      <body>
        <Providers>
          <MainContent />
        </Providers>
      </body>
    </html>
  );
}
