import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SectionWrapper from "../components/UI/wrappers/SectionWrapper";
import Breadcrumb from "../components/Breadcrumb";
import { ourServices } from "../index";
import ServiceHeading from "../components/UI/text/ServiceHeading";
import CTASection from "../components/sections/CTA";
import { motion } from "framer-motion";

const ServiceDetails = () => {
  const { id } = useParams();

  const [service, setservice] = useState(
    ourServices.services.find((service) => service.id === id)
  );

  useEffect(() => {
    setservice(ourServices.services.find((service) => service.id === id));
  }, [id]);

  return (
    <div className="max-w-4xl mx-auto">
      <SectionWrapper
        childern={
          <>
            <div className="mb-10 md:mb-12">
              <Breadcrumb />
            </div>

            {/* Service Details */}
            <ServiceHeading
              heading={service.title}
              subheading={service.description}
            />

            <motion.div
              className="flex flex-col gap-4"
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 1, ease: "easeInOut" }} // longer, smoother
            >
              {/* What You Get? */}
              <div className="flex flex-col items-start gap-4 my-12 md:my-16">
                <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                  What You Get?
                </h2>
                <ul>
                  {service.whatYouGet.map((item, index) => (
                    <li
                      key={index}
                      className="relative pl-6 mb-4 before:absolute before:left-0 before:top-1/2 before:h-1 before:w-1.5 before:bg-gray-400 before:rounded-full before:-translate-y-1/2  md:text-xl opacity-75 leading-relaxed"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col gap-4"
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 1, ease: "easeInOut" }} // longer, smoother
            >
              {/* Key Benefits */}
              <div className="flex flex-col items-start gap-4 my-12 md:my-16">
                <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                  Key Benefits?
                </h2>
                <ul>
                  {service.benefits.map((item, index) => (
                    <li
                      key={index}
                      className="relative pl-6 mb-4 font-light before:absolute before:left-0 before:top-1/2 before:h-1 before:w-1.5 before:bg-gray-400 before:rounded-full before:-translate-y-1/2  md:text-xl opacity-75 leading-relaxed"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col gap-4"
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 1, ease: "easeInOut" }} // longer, smoother
            >
              {/* Why It Matters */}
              <div className="flex flex-col items-start gap-4 my-12 md:my-16">
                <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                  Why It Matters?
                </h2>
                <ul>
                  <p className="md:text-xl opacity-75 leading-relaxed">
                    {service.whyItMatters}
                  </p>
                </ul>
              </div>
            </motion.div>

            <hr className="my-10 w-2/3 mx-auto opacity-40" />

            {/* CTA */}
            <CTASection />
          </>
        }
      />
    </div>
  );
};

export default ServiceDetails;
