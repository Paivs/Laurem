import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { NumberUp } from "@/components/ui/number-up";

export default function Stats() {
  const parceiros = 53;
  const clientesSatisfeitos = 98;
  const anuncios = 24;

  return (
    <>
      {/* Estatísticas */}
      <div className="container mx-auto px-4 md:px-6 2xl:max-w-[1400px]">
        <div className="px-4 xl:px-0 mx-auto">
          <div className="border rounded-xl">
            <div className="p-4 lg:p-8 rounded-xl">
              <div className="grid grid-cols-1 sm:grid-cols-3 items-center gap-y-20 gap-x-12">
                {/* Estatística 1 */}
                <div className="relative text-center first:before:hidden before:absolute before:-top-full sm:before:top-1/2 before:start-1/2 sm:before:-start-6 before:w-px before:h-20 before:bg-border before:rotate-[60deg] sm:before:rotate-12 before:transform sm:before:-translate-y-1/2 before:-translate-x-1/2 sm:before:-translate-x-0 before:mt-3.5 sm:before:mt-0">
                  <svg
                    className="shrink-0 size-6 sm:size-8 mx-auto"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m11 17 2 2a1 1 0 1 0 3-3" />
                    <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
                    <path d="m21 3 1 11h-2" />
                    <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
                    <path d="M3 4h8" />
                  </svg>
                  <div className="mt-3 sm:mt-5">
                    <h3 className="text-lg sm:text-3xl font-semibold">
                      +<NumberUp value={53}/>
                    </h3>
                    <p className="mt-1 text-sm sm:text-base text-muted-foreground">
                      Parceiros comerciais
                    </p>
                  </div>
                </div>
                {/* Fim Estatística 1 */}

                {/* Estatística 2 */}
                <div className="relative text-center first:before:hidden before:absolute before:-top-full sm:before:top-1/2 before:start-1/2 sm:before:-start-6 before:w-px before:h-20 before:bg-border before:rotate-[60deg] sm:before:rotate-12 before:transform sm:before:-translate-y-1/2 before:-translate-x-1/2 sm:before:-translate-x-0 before:mt-3.5 sm:before:mt-0">
                  <div className="flex justify-center items-center -space-x-5">
                    <Avatar className="relative z-[2] shrink-0 size-8 border-primary border">
                      <AvatarImage src="https://images.unsplash.com/photo-1601935111741-ae98b2b230b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" />
                    </Avatar>
                    <Avatar className="relative z-[1] shrink-0 size-8 border-primary border -mt-7">
                      <AvatarImage src="https://images.unsplash.com/photo-1570654639102-bdd95efeca7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" />
                    </Avatar>
                    <Avatar className="relative shrink-0 size-8 border-primary border">
                      <AvatarImage src="https://images.unsplash.com/photo-1679412330254-90cb240038c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80" />
                    </Avatar>
                  </div>
                  <div className="mt-3 sm:mt-5">
                    <h3 className="text-lg sm:text-3xl font-semibold">
                      <NumberUp value={98} />%
                    </h3>
                    <p className="mt-1 text-sm sm:text-base text-muted-foreground">
                      Clientes satisfeitos
                    </p>
                  </div>
                </div>
                {/* Fim Estatística 2 */}

                {/* Estatística 3 */}
                <div className="relative text-center first:before:hidden before:absolute before:-top-full sm:before:top-1/2 before:start-1/2 sm:before:-start-6 before:w-px before:h-20 before:bg-border before:rotate-[60deg] sm:before:rotate-12 before:transform sm:before:-translate-y-1/2 before:-translate-x-1/2 sm:before:-translate-x-0 before:mt-3.5 sm:before:mt-0">
                  <svg
                    className="shrink-0 size-6 sm:size-8 mx-auto"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17" />
                    <path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" />
                    <path d="m2 16 6 6" />
                    <circle cx="16" cy="9" r="2.9" />
                    <circle cx="6" cy="5" r="3" />
                  </svg>
                  <div className="mt-3 sm:mt-5">
                    <h3 className="text-lg sm:text-3xl font-semibold">
                      R$
                      <NumberUp value={300}/>
                      M+
                    </h3>
                    <p className="mt-1 text-sm sm:text-base text-muted-foreground">
                      Em anúncios gerenciados anualmente
                    </p>
                  </div>
                </div>
                {/* Fim Estatística 3 */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Fim Estatísticas */}
    </>
  );
}
