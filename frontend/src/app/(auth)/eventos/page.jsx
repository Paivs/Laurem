"use client";
import Events from "@/components/blocks/events";
import SimplePageHeading from "@/components/blocks/page-headings";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import HeroEvents from "@/components/blocks/hero-events";
import Cta from "@/components/blocks/cta/cta";

export default function Eventos() {
  return (
    <>
      <section className="md:pt-0">
        <HeroEvents />
      </section>


      <Events />
      <Cta />
    </>
  );
}
