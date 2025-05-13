// app/page.tsx
"use client";
import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import RoomTypes from "@/components/RoomTypes";
import AboutSection from "@/components/AboutSection";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import LocationMap from "@/components/LocationMap";
import Newsletter from "@/components/Newsletter";
import SearchComponent from "@/components/SearchComponent";

export default function HomePage() {
  const [query, setQuery] = useState("");

  return (
    <main className="flex flex-col items-center justify-center w-full">
      <SearchComponent query={query} setQuery={setQuery} />
      <HeroSection />
      <FeaturesSection />
      <RoomTypes query={query} />
      <AboutSection/>
      <Testimonials/>
      <CallToAction />
      <LocationMap />
      <Newsletter />
    </main>
  );
}


