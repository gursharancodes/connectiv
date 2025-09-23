import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function TeamCarousel({ members }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    handleResize(); // check on mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-rotate
  useEffect(() => {
    const interval = setInterval(
      () => {
        if (isMobile) {
          // Mobile → 1 card per slide
          setCurrentIndex((prev) =>
            prev === members.length - 1 ? 0 : prev + 1
          );
        } else {
          // Desktop → 3 cards per slide
          setCurrentIndex((prev) =>
            prev + 3 >= members.length ? 0 : prev + 3
          );
        }
      },
      isMobile ? 3000 : 5000
    );

    return () => clearInterval(interval);
  }, [isMobile, members.length]);

  // Get visible members
  const visibleMembers = isMobile
    ? [members[currentIndex]]
    : members.slice(currentIndex, currentIndex + 3);

  return (
    <div className="relative max-w-5xl w-[80%] md:w-full mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {visibleMembers.map((member, i) => (
          <motion.div
            key={i}
            className="bg-gradient-to-b from-[#f7f7ff] to-[#e6e6ff] text-[#050507] rounded-xl shadow-md border border-transparent"
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: "easeInOut" }} // longer and smoother
          >
            {/* Employee Image */}
            <div className="p-4 pb-0">
              <img
                src={member.image}
                alt={member.name}
                className="w-full aspect-[3/4] object-cover rounded-xl"
              />
            </div>

            {/* Employee Info */}
            <div className="p-4 flex flex-col items-start">
              <h3 className="text-lg md:text-xl font-semibold text-[#050507]">
                {member.name}
              </h3>
              <p className="text-xs md:text-sm opacity-75 mb-2">
                {member.role}
              </p>
              <p className="text-xs opacity-60 italic leading-snug">
                {member.tagline}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Dots / Indicators */}
      <div className="flex justify-center mt-4 space-x-2">
        {Array.from({
          length: isMobile ? members.length : Math.ceil(members.length / 3),
        }).map((_, idx) => (
          <span
            key={idx}
            className={`h-2 w-2 rounded-full transition-colors duration-300 ${
              idx === (isMobile ? currentIndex : Math.floor(currentIndex / 3))
                ? "bg-[#36b8f7]"
                : "bg-gray-500"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
}
