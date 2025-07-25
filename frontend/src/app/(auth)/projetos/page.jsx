"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Rocket, Sparkles, HeartPulse } from "lucide-react";

import Liszt from "@/components/blocks/liszt";
import Neuman from "@/components/blocks/neuman";
import ServicesOverview from "@/components/blocks/services-overview";
import ProjectHero from "@/components/blocks/projetos-hero";

const projects = [
  {
    id: "liszt",
    name: "Liszt",
    icon: <Sparkles className="mr-2 h-4 w-4" />,
    component: <Liszt />,
  },
  {
    id: "neuman",
    name: "Neuman",
    icon: <Rocket className="mr-2 h-4 w-4" />,
    component: <Neuman />,
  },
];

export default function Projetos() {
  const [selected, setSelected] = useState("neuman");

  return (
    <>
      <ProjectHero />

      <div className="max-w-7xl mx-auto px-4 py-32" id="seletor">
        <div className="flex justify-center space-x-2">
          {projects.map((project) => (
            <Button
              key={project.id}
              variant={selected === project.id ? "default" : "outline"}
              onClick={() => setSelected(project.id)}
              className="flex items-center"
            >
              {project.icon}
              {project.name}
            </Button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {projects.map(
            (project) =>
              selected === project.id && (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="w-full"
                >
                  {project.component}
                </motion.div>
              )
          )}
        </AnimatePresence>

        <ServicesOverview />
      </div>
    </>
  );
}
