import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function Layers() {
  const sectionRef = useRef();
  const scrollTween = useRef(null);
  const snapTriggers = useRef([]);

  useEffect(() => {
    const panels = gsap.utils.toArray(".panel");
    const scrollStarts = [];
    const firstPanel = panels[0];

    // Set up scroll triggers for each panel
    panels.forEach((panel, i) => {
      snapTriggers.current[i] = ScrollTrigger.create({
        trigger: panel,
        start: "top top",
        end: "bottom top",
      });
      scrollStarts.push(snapTriggers.current[i].start);
    });

    // Handle scroll snapping only within the section and when the user scrolls down
    const handleSnapScroll = (direction) => {
      const firstPanelAtTop = ScrollTrigger.isInViewport(firstPanel, "top top");
      const sectionInViewport = ScrollTrigger.isInViewport(sectionRef.current);

      // Snap only if scrolling down within the section and the first panel is at the top
      if (
        direction > 0 &&
        firstPanelAtTop &&
        sectionInViewport &&
        !scrollTween.current
      ) {
        let scrollPos = window.scrollY + direction * window.innerHeight;
        const closestPanelIndex = scrollStarts.reduce((closest, start, i) => {
          return Math.abs(scrollPos - start) <
            Math.abs(scrollPos - scrollStarts[closest])
            ? i
            : closest;
        }, 0);
        goToSection(closestPanelIndex);
      } else {
        // Allow normal scrolling when scrolling up or outside the section
        scrollTween.current = null;
      }
    };

    // Observe scroll and touch inputs within the section
    ScrollTrigger.observe({
      type: "wheel",
      target: sectionRef.current,
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
    <div>
      {/* Other content before the snapping section */}
      <section className="some-other-section">Other Content Before</section>

      {/* Snapping section */}
      <section ref={sectionRef}>
        <div className="description panel light">
          <div>
            <h1>Layered pinning</h1>
            <p>
              Use pinning to layer panels on top of each other as you scroll.
            </p>
            <div className="scroll-down">
              Scroll down<div className="arrow"></div>
            </div>
          </div>
        </div>
        <div className="panel dark  w-full h-screen">ONE</div>
        <div className="panel purple  w-full h-screen">TWO</div>
        <div className="panel orange  w-full h-screen">THREE</div>
        <div className="panel red  w-full h-screen">FOUR</div>
      </section>
    </div>
  );
}
