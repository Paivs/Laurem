import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function CallToAction1({
  icon: Icon = Zap,
  title = "",
  description = "",
  buttonText = "",
  link = "",
  features = [],
}) {
  return (
    <section className="">
      <div className="max-w-7xl px-4 mx-auto">
        <Card className="overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <CardContent className="flex-1 p-8">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex size-12 items-center px-3 py-2 justify-center rounded-full border-2 border-primary/30 bg-primary/10">
                  <Icon className="size-6 text-primary" />
                </span>
                <h3 className="text-3xl font-bold">{title}</h3>
              </div>
              <p className="mb-6 text-lg text-muted-foreground">
                {description}
              </p>
              <Button size="lg" className="group">
                <Link href={link}>{buttonText}</Link>
                <ArrowUpRight className="ml-2 size-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </Button>
            </CardContent>
            <div className="flex-1 bg-muted p-8">
              <ul className="space-y-4 text-sm">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <svg
                      className="size-5 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
