"use client";

import { Inter } from "next/font/google";
import "./globals.css";

import { usePathname } from "next/navigation";
import Nav from "./components/Nav";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { ReactLenis, useLenis } from "lenis/react";

const inter = Inter({ subsets: ["latin"] });

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
export default function RootLayout({ children }) {
  const pathName = usePathname();

  var data = "";
  switch (pathName) {
    case "/":
      data = "Aura Media Hub|| Creative Media Design";
      break;

    case "/about":
      data = "Aura Media Hub|| Creative Media Design";
      break;
    case "/services":
      data = "Aura Media Hub|| Creative Media Design";
      break;
    case "/portfolio":
      data = "Aura Media Hub|| Creative Media Design";
      break;
    case "/contact":
      data = "Aura Media Hub|| contact us for motre info";
      break;

    default:
      break;
  }
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <title>{data}</title>
      </head>
      <body className={inter.className}>
        <ReactLenis root>
          <Nav />
          {children}
        </ReactLenis>
      </body>
    </html>
  );
}
