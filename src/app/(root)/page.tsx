import FlavorSection from "@/app/(root)/FlavorSection";
import Hero from "@/app/(root)/Hero";
import MessageSection from "@/app/(root)/MessageSection";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <main>
      <NavBar />
      <Hero />
      <MessageSection />
      <FlavorSection />
    </main>
  );
}
