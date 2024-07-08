import Image from "next/image";
import {
  AboutSection,
  HeroSection,
  ServiceSection,
} from "./components/sections";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <AboutSection />
      <ServiceSection />
    </main>
  );
}
