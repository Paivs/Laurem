export default function ProjectSection({
  title,
  description,
  imageLink = "https://images.unsplash.com/photo-1616587226960-4a03badbe8bf?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  features = [],
  techHighlights = [],
}) {
  return (
    <>
      <section className="py-16 md:py-32">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">
            {title}
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative space-y-4">
              <p className="text-muted-foreground">{description}</p>

              <div className="grid grid-cols-2 gap-3 pt-6 sm:gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex items-center gap-2">
                      {feature.icon}
                      <h3 className="text-sm font-medium">{feature.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative mt-6 sm:mt-0">
              <div className="bg-linear-to-b aspect-67/34 relative rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700">
                <img
                  className="rounded-(--radius) grayscale"
                  src={imageLink}
                  alt={title}
                  height=""
                  width=""
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
