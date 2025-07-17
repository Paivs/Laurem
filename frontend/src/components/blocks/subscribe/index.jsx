import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight, Mail } from "lucide-react";

export default function Subscribe() {
  return (
    <form
      className="my-4 2xl:max-w-[1400px]">
      <div className=" flex flex-col sm:flex-row items-center gap-2 rounded-lg">
        <div className="relative w-full">
          <Label htmlFor="subscribe-input" className="sr-only">
            Assinar
          </Label>
          <div
            className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-3">
            <Mail className="size-4 mt-0.5 text-muted-foreground" />
          </div>
          <Input
            type="text"
            id="subscribe-input"
            name="subscribe-input"
            className="ps-9 "
            placeholder="Escreva seu e-mail" />
        </div>
        <Button className="w-full sm:w-auto ">
          Entrar
          <ArrowRight className="size-3.5" />
        </Button>
      </div>
      <p className="ps-1.5 mt-2 text-xs text-muted-foreground">
        Sem spam, cancele a qualquer momento
      </p>
    </form>
  );
}
