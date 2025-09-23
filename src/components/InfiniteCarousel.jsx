import { clients } from "../index"

const InfiniteCarousel = () => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Track */}
      <div className="flex w-max gap-6 animate-scroll">
        {[...clients, ...clients].map((client, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-72 rounded-xl bg-white/5 px-6 py-5 text-[#f7f7ff] backdrop-blur-2xl"
          >
            <div className="flex items-center gap-4">
              <img
                src={client.img}
                alt={client.name}
                className="h-16 w-16 rounded-full object-cover"
              />
              <div className="flex flex-col gap-0.5">
                <h2 className="text-lg font-bold">{client.name}</h2>
                <p className="text-sm opacity-80">{client.followers}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-[#020522] to-transparent"></div>
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-[#020522] to-transparent"></div>
    </div>
  );
};

export default InfiniteCarousel;
