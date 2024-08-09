import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function Layers() {
  const mainRef = useRef();
  const scrollTween = useRef(null);
  const snapTriggers = useRef([]);

  useEffect(() => {
    const panels = gsap.utils.toArray(".panel");
    const scrollStarts = [];

    // Set up scroll triggers for each panel
    panels.forEach((panel, i) => {
      snapTriggers.current[i] = ScrollTrigger.create({
        trigger: panel,
        start: "top top",
        onLeaveBack: (self) => self.disable(), // prevent leaving back
      });
      scrollStarts.push(snapTriggers.current[i].start);
    });

    // Refresh ScrollTrigger calculations
    ScrollTrigger.addEventListener("refresh", () => {
      ScrollTrigger.refresh();
    });

    // Handle scroll snapping
    const handleSnapScroll = (direction) => {
      if (!scrollTween.current) {
        let scrollPos = window.scrollY + direction * window.innerHeight;
        const closestPanelIndex = scrollStarts.reduce((closest, start, i) => {
          return Math.abs(scrollPos - start) <
            Math.abs(scrollPos - scrollStarts[closest])
            ? i
            : closest;
        }, 0);
        goToSection(closestPanelIndex);
      }
    };

    // Observe scroll and touch inputs
    ScrollTrigger.observe({
      type: "wheel,touch",
      onChangeY(self) {
        handleSnapScroll(self.deltaY > 0 ? 1 : -1);
      },
    });

    return () => {
      // Clean up ScrollTrigger on component unmount
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const goToSection = (index) => {
    scrollTween.current = gsap.to(window, {
      scrollTo: { y: snapTriggers.current[index].start, autoKill: false },
      duration: 1,
      onComplete: () => (scrollTween.current = null),
      overwrite: true,
    });
  };

  return (
    <main ref={mainRef}>
      <section className="description panel light">
        <div>
          <h1>Layered pinning</h1>
          <p>Use pinning to layer panels on top of each other as you scroll.</p>
          <div className="scroll-down">
            Scroll down<div className="arrow"></div>
          </div>
        </div>
      </section>
      <section className="panel bg-blue w-full h-screen text-center  ">
        ONE
      </section>
      <section className="panel bg-orange w-full h-screen text-center ">
        TWO
      </section>
      <section className="panel bg-green w-full h-screen text-center ">
        THREE
      </section>
      <section className="panel bg-gray-light w-full h-screen text-center ">
        FOUR
      </section>
    </main>
  );
}
