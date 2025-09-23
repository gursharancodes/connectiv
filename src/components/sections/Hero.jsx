import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { hero } from "../../index";

const HeroSection = () => {
  const navigate = useNavigate();

  // Container variant for staggered children
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2, // delay between elements
      },
    },
  };

  // Animation for each child
  const item = {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  return (
    <motion.div
      className="flex flex-col gap-6 lg:max-w-3xl mx-auto text-center mb-12 md:mb-18 mt-8 md:mt-6"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight"
        variants={item}
      >
        {hero.heading}
      </motion.h1>

      <motion.p
        className="md:text-lg opacity-75 max-w-2xl mx-auto leading-relaxed"
        variants={item}
      >
        {hero.subheading}
      </motion.p>

      <motion.button
        onClick={() => navigate({pathname: hero.ctaLink})}
        className="bg-[#f7f7ff] text-[#050507] md:w-1/2 md:mx-auto font-bold rounded-lg px-6 py-3 md:px-8 md:py-4 md:text-lg hover:bg-gray-200 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#f7f7ff] focus:ring-offset-2 focus:ring-offset-black cursor-pointer mx-4"
        variants={item}
        whileHover={{ scale: 1.03, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
      >
        {hero.cta}
      </motion.button>
    </motion.div>
  );
};

export default HeroSection;
