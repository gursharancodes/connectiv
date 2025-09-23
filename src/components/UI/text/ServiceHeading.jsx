import { motion } from "framer-motion";

const ServiceHeading = ({ heading, subheading }) => {
  return (
    <motion.div
      className="flex flex-col gap-4"
      initial={{ opacity: 0, y: 30, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 1, ease: "easeInOut" }} // longer, smoother
    >
      <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
        {heading}
      </h2>

      <p className="md:text-lg opacity-75 lg:pl-0.5 leading-relaxed">
        {subheading}
      </p>
    </motion.div>
  );
};

export default ServiceHeading;
