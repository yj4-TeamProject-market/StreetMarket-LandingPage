'use client'

import About from "@/components/About/About";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import SlideContainer from "@/components/SlideContainer/SlideContainer";
import { useState } from "react";

export default function LandingPage() {

  const [slideIndex, setSlideIndex] = useState(0);

  return (
    <div>
      <Header slideIndex={slideIndex} setSlideIndex={setSlideIndex} />
      <main className="w-full h-dvh overflow-hidden bg-[#FFD700] px-[20px]">
        <SlideContainer slideIndex={slideIndex} setSlideIndex={setSlideIndex}>
          <Hero />
          <About />
          <div className="w-full h-dvh bg-white ">2</div>
          <div className="w-full h-dvh bg-white ">3</div>
          <div className="w-full h-dvh bg-white">4</div>
          <Footer />
        </SlideContainer>
      </main>
    </div>
  );
}


