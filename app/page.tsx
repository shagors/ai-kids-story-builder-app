import { Button } from "@nextui-org/button";
import Image from "next/image";
import Header from "./__components/Header";
import Hero from "./__components/Hero";

export default function Home() {
  return (
    <div className="bg-[#cad3ff]">
      {/* Header */}
      <Header />
      {/* Hero */}
      <Hero />
    </div>
  );
}
