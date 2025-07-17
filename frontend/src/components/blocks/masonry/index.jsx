import { motion } from 'framer-motion';
import Link from "next/link";

export default function MasonryCardsOnImages() {
  return (
    <>
      {/* Masonry Cards */}
      <div className="container mx-auto px-4 md:px-6 2xl:max-w-[1400px] py-24 lg:py-32">
        {/* Grid */}
        <div className="grid sm:grid-cols-12 gap-6">
          <div className="sm:self-end col-span-12 sm:col-span-7 md:col-span-8 lg:col-span-5 lg:col-start-3">
            {/* Card */}
            <motion.div
              className="group relative block rounded-xl overflow-hidden focus:outline-none"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Link href="#">
                <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
                  <img
                    className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover"
                    src="https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
                    alt="Masonry Cards Image" />
                </div>
                <div className="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
                  <div className="text-sm font-semibold rounded-lg bg-primary-foreground p-4 md:text-xl">
                    Workplace personalities
                  </div>
                </div>
              </Link>
            </motion.div>
            {/* End Card */}
          </div>

          <div className="sm:self-end col-span-12 sm:col-span-5 md:col-span-4 lg:col-span-3">
            {/* Card */}
            <motion.div
              className="group relative block rounded-xl overflow-hidden focus:outline-none"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Link href="#">
                <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
                  <img
                    className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover"
                    src="https://images.unsplash.com/photo-1605629921711-2f6b00c6bbf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
                    alt="Masonry Cards Image" />
                </div>
                <div className="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
                  <div className="text-sm font-semibold rounded-lg bg-primary-foreground p-4 md:text-xl">
                    Women in engineering
                  </div>
                </div>
              </Link>
            </motion.div>
            {/* End Card */}
          </div>

          <div className="col-span-12 md:col-span-4">
            {/* Card */}
            <motion.div
              className="group relative block rounded-xl overflow-hidden focus:outline-none"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Link href="#">
                <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
                  <img
                    className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover"
                    src="https://images.unsplash.com/photo-1606836576983-8b458e75221d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
                    alt="Masonry Cards Image" />
                </div>
                <div className="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
                  <div className="text-sm font-semibold rounded-lg bg-primary-foreground p-4 md:text-xl">
                    Pride 2021
                  </div>
                </div>
              </Link>
            </motion.div>
            {/* End Card */}
          </div>

          <div className="col-span-12 sm:col-span-6 md:col-span-4">
            {/* Card */}
            <motion.div
              className="group relative block rounded-xl overflow-hidden focus:outline-none"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <Link href="#">
                <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
                  <img
                    className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover"
                    src="https://images.unsplash.com/photo-1598929438701-ef29ab0bb61a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
                    alt="Masonry Cards Image" />
                </div>
                <div className="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
                  <div className="text-sm font-semibold rounded-lg bg-primary-foreground p-4 md:text-xl">
                    Data at Acme
                  </div>
                </div>
              </Link>
            </motion.div>
            {/* End Card */}
          </div>

          <div className="col-span-12 sm:col-span-6 md:col-span-4">
            {/* Card */}
            <motion.div
              className="group relative block rounded-xl overflow-hidden focus:outline-none"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              viewport={{ once: true }}
            >
              <Link href="#">
                <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
                  <img
                    className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover"
                    src="https://images.unsplash.com/photo-1467043153537-a4fba2cd39ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
                    alt="Masonry Cards Image" />
                </div>
                <div className="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
                  <div className="text-sm font-semibold rounded-lg bg-primary-foreground p-4 md:text-xl">
                    Empowered management
                  </div>
                </div>
              </Link>
            </motion.div>
            {/* End Card */}
          </div>
        </div>
        {/* End Grid */}
      </div>
      {/* End Masonry Cards */}
    </>
  );
}
