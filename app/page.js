"use client";

import Image from "next/image";
import {
  AboutSection,
  Footer,
  HeroSection,
  ProjectsSection,
  ServiceSection,
} from "./components/sections";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <ProjectsSection />
      <Footer />
    </main>
  );
}
