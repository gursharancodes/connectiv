import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ServiceCard = ({ title, desc, service }) => {
  return (
    <motion.div
      className="bg-gradient-to-b from-[#f7f7ff] to-[#e6e6ff] text-[#050507] rounded-3xl p-6 md:p-8 flex flex-col gap-4 shadow-md border border-transparent"
      initial={{ opacity: 0, y: 30, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1, ease: "easeInOut" }} // longer and smoother
      whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
    >
      <h3 className="text-xl md:text-3xl font-semibold">{title}</h3>
      <p className="text-sm md:text-base opacity-75 leading-relaxed line-clamp-3">{desc}</p>
      <Link
        to={`/services/${service.replace(/\s+/g, "-").toLowerCase()}`}
        className="mt-4 self-start bg-[#050507] text-[#f7f7ff] font-semibold rounded-lg px-4 py-2 hover:bg-[#333] transition-colors duration-300"
      >
        Learn More
      </Link>
    </motion.div>
  );
};

export default ServiceCard;
