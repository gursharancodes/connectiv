import { ourServices } from "../../index";
import SectionHeading from "../UI/text/SectionHeading";
import SectionWrapper from "../UI/wrappers/SectionWrapper";
import ServiceCard from "../cards/ServiceCard";

const ServicesComponent = () => {
  return (
    <SectionWrapper
      childern={
        <>
          <SectionHeading
            heading={ourServices.heading}
            subheading={ourServices.subheading}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 md:mt-16">
            {ourServices.services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                desc={service.description}
                service={service.id}
              />
            ))}
          </div>
        </>
      }
    />
  );
};

export default ServicesComponent;
