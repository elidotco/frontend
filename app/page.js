"use client";

import Image from "next/image";
import {
  AboutSection,
  HeroSection,
  ProjectsSection,
  ServiceSection,
} from "./components/sections";
import Layers from "./components/ui/SectionLayers";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <ProjectsSection />
    </main>
  );
}
