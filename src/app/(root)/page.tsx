"use client";
import FlavorSection from "@/app/(root)/FlavorSection";
import Hero from "@/app/(root)/Hero";
import MessageSection from "@/app/(root)/MessageSection";
import NavBar from "@/components/NavBar";
import { ScrollSmoother } from "@/libs/gsap";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    ScrollSmoother.create({
      smooth: 3,
      effects: true,
    });
  });
  return (
    <main>
      <NavBar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Hero />
          <MessageSection />
          <FlavorSection />
          <div className="h-screen w-screen bg-black"></div>
        </div>
      </div>
    </main>
  );
}
