"use client";

import Features from "@/components/blocks/features";
import HeroSection from "@/components/blocks/hero-sections";
import Masonry from "@/components/blocks/masonry";
import Stats from "@/components/blocks/stats";
import Subscribe from "@/components/blocks/subscribe";
import Image from "next/image";
import { motion } from "motion/react";
import { AnimatedSection } from "@/components/ui/animated-section";
import CustomerReview from "@/components/blocks/customer-reviews";
import CTABanner from "@/components/blocks/banner";
import HighlightCards from "@/components/blocks/highlight-cards";
import HeroShowcases from "@/components/blocks/hero-showcases";
import Quote from "@/components/blocks/quote";
import ResourceDownload from "@/components/blocks/resource-download";

export default function Home() {
  return (
    <>
      <HeroShowcases />

      <motion.section
        className="min-h-screen flex flex-col items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <Masonry />
      </motion.section>

      <CTABanner />

      <section className="min-h-screen flex items-center justify-center ">
        <AnimatedSection>
          <Features />
          <HighlightCards />
        </AnimatedSection>
      </section>

      <motion.section
        className="min-h-screen flex flex-col items-center justify-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <CustomerReview />
        <Stats />
        <Subscribe />
      </motion.section>

      <Quote />

      <ResourceDownload/>
    </>
  );
}
