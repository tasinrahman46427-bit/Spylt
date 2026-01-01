"use client";
import { cards } from "@/constants";
import { useBreakpoint } from "@/hooks/userBreakpoint";
import { gsap } from "@/libs/gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function TestimonialSection() {
  const vdRef = useRef<HTMLVideoElement[]>([]);

  const { isMobile } = useBreakpoint();

  const startPoint = isMobile ? 0 : 200;

  useGSAP(() => {
    gsap.to(".testimonials-section", {
      scrollTrigger: {
        trigger: ".testimonials-section",
        start: `-${startPoint}% bottom`,
        scrub: true,
      },
      marginTop: "-190vh",
    });
  });

  const handlePlay = (index: number) => {
    const video = vdRef.current[index];
    video.play();
  };

  const handlePause = (index: number) => {
    const video = vdRef.current[index];
    video.pause();
  };
  return (
    <section className="testimonials-section">
      <div className="absolute size-full flex flex-col items-center pt-[5vw]">
        <h1 className="text-black first-title"> What&apos;s </h1>
        <h1 className="text-light-brown second-title"> Everyone </h1>
        <h1 className="text-black third-title"> Talking </h1>
      </div>

      <div className="pin-box">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`vd-card ${card.translation} ${card.rotation}`}
            onMouseEnter={() => handlePlay(index)}
            onMouseLeave={() => handlePause(index)}
          >
            <video
              ref={el => {
                if (el) vdRef.current[index] = el;
              }}
              src={card.src}
              playsInline
              muted
              loop
              className="size-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
