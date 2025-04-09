import "./App.css";
import Home from "./components/Home/Home";
import ValueProposition from "./components/Home/ValueProposition";
import { motion } from "framer-motion";

function App() {
  return (
    <>
      <Home />
      <ValueProposition />

      <div className="relative">
        {/* Parallax Background */}
        <div className="absolute inset-0 bg-cover bg-fixed bg-center">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "url('https://aeroreport.de/media/pages/good-to-know/evtol-entwicklungen-wohin-geht-die-reise-mit-lufttaxis-und-drohnen/kopf/24d48d9224-1696855944/lilium-shuttle-flyover-02-1200px-1170x.webp')",
              backgroundAttachment: "fixed",
            }}
          ></div>
        </div>

        {/* Parallax Sections */}
        <Section
          bgImage="url('https://i0.wp.com/asiatimes.com/wp-content/uploads/2020/11/Drone-Taxi.jpg?fit=1733%2C1153&ssl=1')"
          text="Welcome to Parallax World"
        />
        <Section
          bgImage="url('https://www.globaltimes.cn/Portals/0/attachment/2024/2024-05-07/fb79e9d4-9b57-4263-850a-cc4235e649a9.png')"
          text="Smooth GSAP Scrolling"
        />
        <Section
          bgImage="url('https://www.engineering.com/wp-content/uploads/2024/08/harwin-tti-evtol-battery-img01.png')"
          text="Framer Motion Magic"
        />
        <Section
          bgImage="url('https://aeroreport.de/media/pages/good-to-know/evtol-entwicklungen-wohin-geht-die-reise-mit-lufttaxis-und-drohnen/image-text-kombi-10/98b459e0a9-1697099103/lilium_shuttle_flyover_01_630px.png')"
          text="Tailwind Meets Animation"
        />
      </div>

      <div className="mb-50"></div>
    </>
  );
}

const Section = ({ bgImage, text }) => {
  return (
    <div
      className="relative min-h-screen bg-fixed bg-no-repeat bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: bgImage }}
    >
      <div className="absolute inset-0 bg-black/20"></div>
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-white text-5xl md:text-7xl font-bold text-center z-10"
      >
        {text}
      </motion.h1>
    </div>
  );
};

export default App;
