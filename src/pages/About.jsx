import CTA from "../components/sections/CTA";
import TeamCarousel from "../components/sections/TeamCarousel";
import SectionHeading from "../components/UI/text/SectionHeading";
import SectionWrapper from "../components/UI/wrappers/SectionWrapper";
import { about } from "../index";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="max-w-4xl mx-auto">
      {/* About */}
      <SectionWrapper
        childern={
          <>
            <SectionHeading
              heading={about.ourStory.heading}
              subheading={about.ourStory.subheading}
            />

            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, ease: "easeInOut" }} // longer and smoother
            >
              <p className="text-sm md:text-xl opacity-75 leading-relaxed mt-10 md:mt-20 indent-[50px]">
                {about.ourStory.description}
              </p>
              <div className="flex flex-col items-start gap-4 mt-10">
                <h2 className="text-xl md:text-3xl font-semibold">Mission</h2>
                <p className="text-sm md:text-xl opacity-75 leading-relaxed">
                  {about.ourStory.mission}
                </p>
              </div>

              <div className="flex flex-col items-start gap-4 mt-10">
                <h2 className="text-xl md:text-3xl font-semibold">Vision</h2>
                <p className="text-sm md:text-xl opacity-75 leading-relaxed">
                  {about.ourStory.vision}
                </p>
              </div>
            </motion.div>
          </>
        }
      />

      {/* Meet Our Team */}
      <SectionWrapper
        childern={
          <>
            <SectionHeading
              heading={about.meetOurTeam.heading}
              subheading={about.meetOurTeam.subheading}
            />
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, ease: "easeInOut" }} // longer and smoother
            >
              <p className=" mb-10 text-sm md:text-xl opacity-75 leading-relaxed mt-10 md:mt-20 indent-[50px]">
                {about.meetOurTeam.description}
              </p>
            </motion.div>

            {/* <MeetOurTeam /> */}
            <TeamCarousel members={about.meetOurTeam.members} />
          </>
        }
      />

      <hr className="my-10 w-2/3 mx-auto opacity-40" />

      {/* CTA */}
      <CTA />
    </div>
  );
};

export default About;
