"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const pathName = usePathname();
  console.log(pathName);
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
        <title>{data}</title>
      </head>
      <body className={inter.className}>
        <Navbar />

        {children}
      </body>
    </html>
  );
}
