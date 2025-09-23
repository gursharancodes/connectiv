import TestimonialCard from '../cards/TestimonialCard'
import { testimonials } from '../../index'
import SectionHeading from '../UI/text/SectionHeading'

const Testimonials = () => {
  return (
    <div className="px-4 md:px-10 pt-6 md:pt-12 pb-16">
      <SectionHeading
        heading={testimonials.heading}
        subheading={testimonials.subheading}
      />

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 md:mt-16">
        {testimonials.testimonials.map((t, index) => (
          <TestimonialCard key={index} testimonial={t} />
        ))}
      </div>
    </div>
  );
}

export default Testimonials