import CountUp from "react-countup";
import { stats } from "../../index";
import SectionHeading from "../UI/text/SectionHeading";

const Stats = () => {
  const formatNumber = (num, symbol = "") => {
    let formatted = num;

    if (num >= 1_000_000_000)
      formatted = (num / 1_000_000_000).toFixed(1) + "B";
    else if (num >= 1_000_000) formatted = (num / 1_000_000).toFixed(1) + "M";
    else if (num >= 1_000) formatted = (num / 1_000).toFixed(1) + "K";

    return formatted + symbol; // append + or % here
  };

  return (
    <div className="px-4 md:px-10 py-16">
      <SectionHeading heading={stats.heading} subheading={stats.subheading} />

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 md:gap-0 bg-white/5 px-6 py-7 text-[#f7f7ff] backdrop-blur-2xl rounded-2xl mt-12 mdL:mt-16">
        {stats.data.map((stat, index) => {
          // Determine if we should add right border
          const isLastInRow =
            (index + 1) % 2 === 0 && window.innerWidth < 768 // mobile 2-cols
              ? true
              : (index + 1) % 4 === 0; // desktop 4-cols

          return (
            <div
              key={index}
              className={`flex flex-col items-center gap-3 p-6 py-8 ${
                !isLastInRow ? "border-r border-white/10" : ""
              } hover:shadow-lg transition-shadow duration-300`}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-primary">
                <CountUp
                  start={0}
                  end={stat.value}
                  duration={2}
                  formattingFn={(num) => formatNumber(num, stat.symbol)}
                />
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-center text-gray-700">
                {stat.label}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Stats;
