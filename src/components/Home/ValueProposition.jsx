
import { motion } from "motion/react";

const containerVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.2 * i, duration: 0.5, ease: "easeOut" },
  }),
};

const ValueProposition = () => {
  const valueProps = [
    {
      title: "Time Efficiency",
      description:
        "Reduce your commute time by up to 80%. Skip traffic and arrive at your destination refreshed and on schedule.",
      iconColor: "bg-blue-100",
      iconStroke: "text-blue-600",
      path: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
    },
    {
      title: "Sustainable Travel",
      description:
        "Zero-emission electric aircraft reduce your carbon footprint while providing a premium transportation experience.",
      iconColor: "bg-green-100",
      iconStroke: "text-green-600",
      path: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    },
    {
      title: "Advanced Safety",
      description:
        "Multiple redundant systems, autonomous navigation, and continuous monitoring ensure the highest safety standards.",
      iconColor: "bg-red-100",
      iconStroke: "text-red-600",
      path: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    },
    {
      title: "Seamless Connectivity",
      description:
        "Our strategic vertipad network connects major hubs, business districts, and residential areas for effortless travel.",
      iconColor: "bg-purple-100",
      iconStroke: "text-purple-600",
      path: "M13 10V3L4 14h7v7l9-11h-7z",
    },
    {
      title: "Personalized Mobility",
      description:
        "Schedule flights on demand or book in advance. Travel solo or with a group — your journey, your way.",
      iconColor: "bg-yellow-100",
      iconStroke: "text-yellow-600",
      path: "M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z",
    },
    {
      title: "Smart Technology",
      description:
        "Book, track, and manage your flights with our intuitive mobile app. Real-time updates at your fingertips.",
      iconColor: "bg-blue-100",
      iconStroke: "text-blue-600",
      path: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
    },
  ];

  return (
    <motion.div
      className="max-w-[1440px] h-full mx-auto rounded-xl my-20 border border-slate-100 bg-slate-50"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="p-10 w-full">
        <h1 className="text-5xl font-semibold mb-10">Value Proposition</h1>

        {/* Grid Container */}
        <motion.div
          className="pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full h-[75%]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {valueProps.map((prop, index) => (
            <motion.div
              key={index}
              className="w-full h-72 relative group"
              variants={cardVariants}
              custom={index}
            >
              <div className="border-2 rounded-lg w-full h-full absolute top-0 left-0 bottom-0 z-20 bg-white p-10 overflow-hidden">
                <div
                  className={`flex items-center justify-center h-16 w-16 rounded-full ${prop.iconColor} mb-4 mx-auto`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-8 w-8 ${prop.iconStroke}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d={prop.path}
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">
                  {prop.title}
                </h3>
                <p className="text-gray-600 text-center">{prop.description}</p>
              </div>
              <div className="border-2 rounded-lg w-full h-full absolute top-3 left-3 bottom-0 z-10 bg-black transition-all duration-300 group-hover:top-0 group-hover:left-0"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ValueProposition;
