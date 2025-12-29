"use client";
import { flavorlists } from "@/constants";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/libs/gsap";
import Image from "next/image";
import { useRef } from "react";

export default function FlavorSlider() {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    if (!sliderRef.current) return;

    const scrollAmount = sliderRef.current.scrollWidth - window.innerWidth;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: " .flavor-section",
        start: "2% top",
        end: `+=${scrollAmount + 500}px`,
        scrub: true,
        pin: true,
        markers: true,
      },
    });

    tl.to(".flavor-section", {
      x: `-${scrollAmount + 1500}px`,
    });
  });
  return (
    <div ref={sliderRef} className="slider-wrapper">
      <div className="flavors">
        {flavorlists.map(flavor => (
          <div
            key={flavor.name}
            className={`relative z-30 lg:w-[50vw] w-96 lg:h-[80vh] md:w-[90vw] md:h-[50vh] h-80 flex-none ${flavor.rotation}`}
          >
            <Image
              src={`images/${flavor.color}-bg.svg`}
              alt={`${flavor.name}`}
              height={900}
              width={900}
              className="absolute bottom-0 md:h-100 lg:h-auto"
            />
            <Image
              src={`/images/${flavor.color}-drink.webp`}
              alt=""
              height={600}
              width={600}
              className="drinks w-65 md:w-95 lg:w-110 "
            />
            <Image
              src={`/images/${flavor.color}-elements.webp`}
              alt=""
              height={400}
              width={400}
              className="elements"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
