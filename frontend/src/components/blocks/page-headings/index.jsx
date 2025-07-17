import LauremHeading from "@/components/LauremHeading";

export default function SimplePageHeading({
  title = "New Collection",
  description = "Discover our latest collection of products designed to elevate your everyday life with style and functionality.",
}) {
  return (
    <div className="container mx-auto px-4 py-16 md:px-6 2xl:max-w-[1400px]">
      <div className="mx-auto mt-6 max-w-3xl text-center">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          {title} 
        </h1>
        <p className="text-muted-foreground mt-4 text-xl">{description}</p>
      </div>
    </div>
  );
}

