"use client";
import "./globals.css";
import "swiper/css";
import { register } from "swiper/element/bundle";
import { Providers } from "./providers";
import { useEffect, useState } from "react";
import { useMediaQuery } from "@chakra-ui/react";
import Script from "next/script";
import localFont from "next/font/local";
import { LoadingScreen } from "@/components";

register();
export const mcQueenDisplay = localFont({
  src: [
    {
      path: "./McQueenDisplayTrial-Black.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./McQueenDisplayTrial-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./McQueenDisplayTrial-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./McQueenDisplayTrial-Bold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./McQueenDisplayTrial-BlackItalic.woff2",
      weight: "700",
      style: "italic",
    },
    {
      path: "./McQueenDisplayTrial-MediumItalic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "./McQueenDisplayTrial-BoldItalic.woff2",
      weight: "600",
      style: "italic",
    },
    {
      path: "./McQueenDisplayTrial-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./McQueenDisplayTrial-LightItalic.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "./McQueenDisplayTrial-Italic.woff2",
      weight: "400",
      style: "italic",
    },
  ],
});

export const matrixSans = localFont({
  src: [
    {
      path: "./MatrixSans.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);
  const [isMobileScreen] = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 4000);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <html lang="en">
      <Script
        strategy="lazyOnload"
        src="https://www.googletagmanager.com/gtag/js?id=G-FP4WNRJ4K6"
      />
      <Script strategy="lazyOnload" id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments)}
          gtag('js', new Date());
          gtag('config', 'G-FP4WNRJ4K6');
        `}
      </Script>
      <head>
        <title>Otsu</title>
        <link
          rel="icon"
          href="/icons/favicon.svg"
          type="image/svg"
          sizes="any"
        />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className="bg-black scroll overflow-x-hidden">
        <Providers>{loading ? <LoadingScreen /> : children}</Providers>
      </body>
    </html>
  );
}
