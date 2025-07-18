import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";
import Link from "next/link";

export default function Testimonials({
  name = "William Reis",
  role = "Instrutor de Formação Profissional - SENAI",
  testimonial = "A Laurem inova e revoluciona ao promover ensino, desenvolvimento e liberdade utilizando tecnologia. É necessário cada vez mais garantir seu espaço, afinal, somos todos livres para colaborar",
}) {
  return (
    <div>
      <div className="px-4 md:px-6 2xl:max-w-[1400px] py-24 lg:py-32">
        <blockquote className="max-w-4xl mx-auto">
          <p className="mb-6 md:text-lg">
            <span className="font-semibold">{name},</span>{" "}
            <span className="text-muted-foreground">{role}</span>
          </p>

          <p className="text-xl sm:text-2xl md:text-3xl md:leading-normal">
            {testimonial}
          </p>
        </blockquote>
      </div>
    </div>
  );
}
