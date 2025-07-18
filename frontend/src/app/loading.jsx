import { BackgroundBeams } from "@/components/ui/background-beams";
import Loader from "@/components/ui/loader";

export default function Loading() {
  return (
    <>
      <main className=" flex flex-col items-center justify-center h-screen fixed w-screen z-50">
        <h1 className="text-6xl md:text-9xl font-bold text-primary mb-4">LAUREM</h1>
        <Loader />
        <BackgroundBeams/>
      </main>
    </>
  );
}
