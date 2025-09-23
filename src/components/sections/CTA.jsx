import { motion } from "framer-motion";
import { cta } from "../../index";

const CTASection = () => {
  return (
    <motion.section
      className="relative w-full py-16 sm:py-24 text-center text-white"
      initial={{ opacity: 0, y: 30, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
          {cta.heading}
        </h2>
        <p className="mt-4 text-base sm:text-lg opacity-80">
          {cta.subheading}
        </p>
        <div className="mt-8">
          <a
            href={cta.ctaLink}
            className="inline-block rounded-lg bg-[#f7f7ff] px-6 py-3 text-sm sm:text-base font-semibold text-[#050507] shadow-lg transition hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-[#f7f7ff] focus:ring-offset-2 focus:ring-offset-black"
          >
            {cta.cta}
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default CTASection;
