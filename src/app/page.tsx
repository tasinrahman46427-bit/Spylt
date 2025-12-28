import Hero from "@/components/Hero";
import MessageSection from "@/components/MessageSection";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <main>
      <NavBar />
      <Hero />
      <MessageSection />
    </main>
  );
}
