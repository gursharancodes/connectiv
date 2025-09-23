import { Star } from "lucide-react";
import { motion } from "framer-motion";

const TestimonialCard = ({ testimonial }) => {
  return (
    <motion.div
      className="bg-gradient-to-b from-[#f7f7ff] to-[#e6e6ff] text-[#050507] rounded-3xl p-6 md:p-8 shadow-md border border-transparent flex flex-col gap-4 hover:shadow-2xl transition-all duration-300 hover:border-[#d0d0f0]"
      initial={{ opacity: 0, y: 30, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
    >
      {/* Profile */}
      <div className="flex items-center gap-4">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-14 h-14 rounded-full object-cover shadow-md"
        />
        <div>
          <h4 className="text-lg md:text-xl font-semibold">
            {testimonial.name}
          </h4>
          {/* Rating */}
          <div className="flex gap-1">
            <Star className="w-4 h-4 text-amber-400" fill="currentColor" />
            <Star className="w-4 h-4 text-amber-400" fill="currentColor" />
            <Star className="w-4 h-4 text-amber-400" fill="currentColor" />
            <Star className="w-4 h-4 text-amber-400" fill="currentColor" />
            <Star className="w-4 h-4 text-amber-400" fill="currentColor" />
          </div>
        </div>
      </div>

      {/* Quote */}
      <p className="text-base md:text-lg opacity-80 leading-relaxed italic">
        "{testimonial.quote}"
      </p>
    </motion.div>
  );
};

export default TestimonialCard;
