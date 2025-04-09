import { motion } from "motion/react";

const Home = () => {
  return (
    <div className="w-full h-screen relative">
      <div className="w-full h-full absolute top-0 left-0 bottom-0">
        <motion.img
          src="https://www.datocms-assets.com/53444/1723460073-understanding-evtol.jpg?auto=format&w=1200"
          alt="vlide-homebanner"
          className="w-full h-full object-center"
          loading="lazy"
          initial={{ scale: 1.2 }} // Start zoomed-in
          animate={{ scale: 1 }} // Zoom out to normal size
          transition={{ duration: 1.5, ease: "easeInOut" }} // Smooth transition
        />
      </div>
      <div className="max-w-[1440px] mx-auto absolute bottom-1/6 left-1/12">
        <motion.div
          className="max-w-3xl flex flex-col space-y-5"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.5, delayChildren: 0.3 }, // Slower stagger effect
            },
          }}
        >
          {/* Title */}
          <motion.h1
            className="text-5xl xl:text-8xl font-bold"
            variants={{
              hidden: { opacity: 0, y: 50, filter: "blur(20px)" }, // More blur initially
              visible: {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                transition: { duration: 1.2, ease: "easeInOut" }, // Smoother transition
              },
            }}
          >
            Vlide Aviation: Elevating Urban Mobility.
          </motion.h1>

          {/* Subtitle */}
          <motion.h4
            className="text-xl font-medium text-white"
            variants={{
              hidden: { opacity: 0, y: 50, filter: "blur(20px)" },
              visible: {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                transition: { duration: 1.2, ease: "easeInOut" },
              },
            }}
          >
            Experience the next evolution of city travel with our sustainable,
            electric vertical takeoff and landing (eVTOL) aircraft.
          </motion.h4>

          {/* Button */}
          <motion.button
            className="w-full max-w-fit px-10 py-4 rounded-full text-lg font-medium border-2 border-gray-400 bg-white cursor-pointer"
            variants={{
              hidden: { opacity: 0, y: 50, filter: "blur(20px)" },
              visible: {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                transition: { duration: 1.2, ease: "easeInOut" },
              },
            }}
          >
            Discover Vlide
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
