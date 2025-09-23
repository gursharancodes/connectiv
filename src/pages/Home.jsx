import { hero } from "../index";
import InfiniteCarousel from "../components/InfiniteCarousel";
import CTASection from "../components/sections/CTA";
import SectionWrapper from "../components/UI/wrappers/SectionWrapper";
import HeroSection from "../components/sections/Hero";
import ServicesComponent from "../components/sections/Services";
import Testimonials from "../components/sections/Testimonials";
import Stats from "../components/sections/Stats";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <SectionWrapper
        childern={
          <>
            <HeroSection />

            <InfiniteCarousel />

            <div className="mt-12 md:mt-16">
              <img
                src={hero.image}
                alt="Hero Image"
                className="w-full md:w-[80%] mx-auto aspect-video object-cover rounded-2xl"
              />
            </div>
          </>
        }
      />

      {/* Services Section */}
      <ServicesComponent />

      {/* Stats Section */}
      <Stats />

      {/* Testimonials */}
      <Testimonials />

      {/* CTA */}
      <CTASection />
    </div>
  );
};

export default Home;
