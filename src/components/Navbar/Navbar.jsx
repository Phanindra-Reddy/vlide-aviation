import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const menuItems = [
  { name: "Home", route: "/" },
  { name: "Comapny", route: "/company" },
  { name: "Services", route: "/services" },
  { name: "Contact", route: "/contact" },
];
const socialIcons = [
  { icon: <FaFacebook />, link: "#" },
  { icon: <FaTwitter />, link: "#" },
  { icon: <FaInstagram />, link: "#" },
  { icon: <FaLinkedin />, link: "#" },
];

const Navbar = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const scrolled = window.scrollY > 0;
    setIsScrolled(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Container animation (for staggering)
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 }, // Stagger on enter
    },
    exit: {
      opacity: 0,
      transition: { staggerChildren: 0.15, staggerDirection: -1 }, // Stagger on exit (reverse)
    },
  };

  // Individual menu item animation
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: "easeIn" } },
  };

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.2 * index, duration: 0.4 },
    }),
  };

  return (
    <div
      className={`w-full flex items-center justify-center fixed z-[999] ${
        isScrolled ? "animatedNav h-20 bg-white/50 backdrop-blur-lg" : "h-24"
      }`}
    >
      <motion.nav
        variants={navVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-[1440px] mx-auto flex items-center justify-between"
      >
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className=""
        >
          <Link to="/">
            <span className="text-3xl font-semibold">Vlide</span>
          </Link>
        </motion.div>

        {/* Desktop Menu */}

        {/* Menu */}
        <ul className="hidden md:flex space-x-6">
          {menuItems.map((item, index) => (
            <motion.li
              key={item}
              custom={index}
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              className="relative text-lg cursor-pointer text-gray-700 transform hover:text-blue-600"
            >
              <Link to={item.route}>{item.name}</Link>
              {/* Underline animation */}
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          id="openMobileMenu"
          name="openMobileMenu"
          onClick={() => setOpenMobileMenu(!openMobileMenu)}
          className="h-12 w-12 border-2 rounded-full p-1 flex md:hidden flex-col items-center justify-center gap-1 cursor-pointer"
        >
          <div className="h-1 w-10/12 bg-black rounded-lg"></div>
          <div className="h-1 w-10/12 bg-black rounded-lg"></div>
          <div className="h-1 w-10/12 bg-black rounded-lg"></div>
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {openMobileMenu && (
          <motion.div
            initial={{ y: "-100vh" }}
            animate={{ y: 0 }}
            exit={{ y: "-100vh" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute top-0 left-0 right-0 bottom-0 w-full h-screen overflow-y-scroll bg-black"
          >
            {/* Logo & Close Button */}
            <div className="max-w-[1440px] mt-10 mx-auto flex items-center justify-between border-b border-gray-100 pb-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "backOut" }}
                className="text-3xl font-bold"
              >
                <div id="logo" aria-label="vlide-aviation">
                  <Link to="/">
                    <span className="text-3xl font-semibold text-white">
                      Vlide
                    </span>
                  </Link>
                </div>
              </motion.div>

              <motion.button
                initial={{ opacity: 0, rotate: -180 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                id="closeMobileMenu"
                name="closeMobileMenu"
                onClick={() => setOpenMobileMenu(!openMobileMenu)}
                className="h-12 w-12 border-2 border-gray-400 p-1 rounded-full flex flex-col items-center justify-center cursor-pointer transition"
              >
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </motion.button>
            </div>

            {/* Menu Items (Staggered In and Out) */}
            {openMobileMenu && (
              <motion.ul
                variants={containerVariants}
                initial="hidden"
                animate="show"
                exit="exit" // Apply exit animations
                className="space-y-6 max-w-[1440px] mt-10 mx-auto"
              >
                {menuItems.map((item, index) => (
                  <motion.li
                    key={index}
                    variants={itemVariants}
                    className="text-white hover:text-indigo-500 cursor-pointer text-3xl transition"
                  >
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            )}

            <div className="max-w-[1440px] mt-10 mx-auto flex flex-col items-start">
              {/* Social Media Icons */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="show"
                exit="exit"
                className="flex space-x-8 mt-6"
              >
                {socialIcons.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={itemVariants}
                    className="text-4xl text-white hover:text-indigo-500 transition"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </motion.div>

              {/* Subscription Form */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="show"
                exit="exit"
                className="mt-10 rounded-lg"
              >
                <motion.h3
                  variants={itemVariants}
                  className="text-4xl font-semibold tracking-tight text-white"
                >
                  Subscribe to Our Newsletter
                </motion.h3>
                <motion.p
                  variants={itemVariants}
                  className="my-4 text-sm text-gray-300 max-w-full lg:max-w-lg"
                >
                  Nostrud amet eu ullamco nisi aute in ad minim nostrud
                  adipisicing velit quis. Duis tempor incididunt dolore.
                </motion.p>

                <motion.div>
                  <div className="mt-6 flex max-w-md gap-x-4">
                    <motion.label htmlFor="email-address" className="sr-only">
                      Email address
                    </motion.label>
                    <motion.input
                      ariants={itemVariants}
                      id="email-address"
                      name="email"
                      type="email"
                      required
                      placeholder="Enter your email"
                      autoComplete="email"
                      className="min-w-0 flex-auto rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                    />
                    <motion.button
                      variants={itemVariants}
                      type="submit"
                      className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    >
                      Subscribe
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
