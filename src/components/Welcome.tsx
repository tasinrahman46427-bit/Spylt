"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

type textType = "title" | "subtitle";

type FontWeightConfig = {
  min: number;
  max: number;
  default: number;
};

const FONT_WEIGHTS: Record<textType, FontWeightConfig> = {
  subtitle: { min: 100, max: 400, default: 100 },
  title: { min: 400, max: 900, default: 400 },
};

const renderText = ({
  text,
  className,
  baseWeight = 400,
}: {
  text: string;
  className?: string;
  baseWeight?: number;
}) => {
  return [...text].map((char, i) => (
    <span
      key={i}
      className={className}
      style={{ fontVariationSettings: `'wght' ${baseWeight}` }}
    >
      {char === " " ? "\u00A0" : char}
    </span>
  ));
};

const setupTextHover = (
  container: HTMLElement | null,
  type: textType
): (() => void) | undefined => {
  if (!container) return;

  const letters = container.querySelectorAll<HTMLElement>("span");

  const { min, max, default: base } = FONT_WEIGHTS[type];

  const animateLetters = (
    letter: HTMLElement,
    weight: number,
    duration = 0.25
  ) => {
    return gsap.to(letter, {
      duration,
      ease: "power2.out",
      fontVariationSettings: `'wght' ${weight}`,
    });
  };

  const handleMouseMove = (e: MouseEvent) => {
    const { left } = container.getBoundingClientRect();
    const mouseX = e.clientX - left;

    letters.forEach(letter => {
      const { left: l, width: w } = letter.getBoundingClientRect();
      const distance = Math.abs(mouseX - (l - left + w / 2));
      const intensity = Math.exp(-(distance ** 2) / 2000);

      animateLetters(letter, min + (max - min) * intensity);
    });
  };

  const handleMouseLeave = () =>
    letters.forEach(letter => animateLetters(letter, base, 0.3));

  container.addEventListener("mousemove", handleMouseMove);
  container.addEventListener("mouseleave", handleMouseLeave);

  return () => {
    container.removeEventListener("mousemove", handleMouseMove);
    container.removeEventListener("mouseleave", handleMouseLeave);
  };
};

export default function Welcome() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useGSAP(() => {
    const titleCleanup = setupTextHover(titleRef.current, "title");
    const subtitleCleanup = setupTextHover(subtitleRef.current, "subtitle");

    return () => {
      titleCleanup?.();
      subtitleCleanup?.();
    };
  }, []);

  return (
    <section id="welcome">
      <p ref={subtitleRef}>
        {renderText({
          text: "Lorem ipsum dolor, sit amet elit.",
          className: "text-3xl font-georama",
          baseWeight: 100,
        })}
      </p>
      <h1 ref={titleRef} className="mt-7">
        {renderText({
          text: "Hello world",
          className: "md:text-9xl text-7xl italic font-georama",
        })}
      </h1>

      <div className="small-screen">
        <p>Hello world</p>
      </div>
    </section>
  );
}
