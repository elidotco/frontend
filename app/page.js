"use client";

import Image from "next/image";
import {
  AboutSection,
  HeroSection,
  ProjectsSection,
  ServiceSection,
} from "./components/sections";

export default function Home() {
  return (
    <main className="">
      <HeroSection />

      {/* <ServiceSection />
      <ProjectsSection /> */}
    </main>
  );
}
