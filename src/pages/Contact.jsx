import SectionWrapper from "../components/UI/wrappers/SectionWrapper";
import ContactForm from "../components/sections/ContactForm";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { contact } from "../index";

const Contact = () => {
  return (
    <SectionWrapper
      childern={
        <div className="flex flex-col md:flex-row md:items-start gap-12 mb-6 md:mb-12">
          {/* Left - Info */}
          <motion.div
            className="md:px-4 w-full md:w-1/2 flex flex-col gap-8"
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                {contact.heading}
              </h2>
              <p className="mt-4 text-base sm:text-lg opacity-80">
                {contact.subheading}
              </p>
            </div>
            {/* Contact Info */}
            <div className="flex flex-col gap-4 mt-4">
              {contact.contactInfo.map((item, index) => (
                <Link
                  key={index}
                  to={item.url}
                  target="_blank"
                  className="flex items-center gap-4 rounded-xl bg-white/10 px-6 py-4 text-[#f7f7ff] backdrop-blur-2xl hover:bg-white/15"
                >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none" // or "currentColor" if it’s a filled icon
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5 md:w-6 md:h-6 text-[#f7f7ff]"
                    >
                      <path
                        d={item.iconPath}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>

                  <span className="md:text-lg font-medium hover:opacity-70">
                    {item.title}
                  </span>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Right - Form */}
          <div className="w-full md:w-1/2">
            <ContactForm />
          </div>
        </div>
      }
    />
  );
};

export default Contact;
