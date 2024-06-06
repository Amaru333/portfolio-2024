import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

const AboutMeSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["200vh", "300vh"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0, -90]);

  return (
    <div className="min-h-[200vh] [perspective:800px]">
      <motion.div
        className="min-h-screen bg-indigo-900 w-full flex items-center sticky top-0 overflow-hidden"
        style={{
          translateZ: "0px",
          rotateX: scaleProgress,
          transformOrigin: "top",
          transformStyle: "preserve-3d",
        }}
      >
        <div className="flex max-w-screen-2xl mx-auto gap-x-32 items-center px-12 2xl:px-0">
          <div>
            <p className="text-9xl font-extrabold font-outline-2 text-transparent">about</p>
            <div className="flex items-end gap-x-4">
              <p className="text-9xl font-extrabold font-outline-2 text-transparent">me</p>
              <div className="w-8 h-8 bg-white rounded-full mb-3" />
            </div>
          </div>
          <div className="text-2xl flex flex-col font-mono gap-y-8">
            <p>
              i&apos;m currently a graduate student at university of north carolina at charlotte, majoring in <span className="text-orange-500">information technology.</span>
            </p>
            <p>
              i have experience in <span className="text-orange-500">web application development</span>, <span className="text-orange-500">mobile application development </span> and{" "}
              <span className="text-orange-500"> UI/UX designing.</span>
            </p>
            <p>
              i mainly work on <span className="text-orange-500">react</span>, <span className="text-orange-500">nextjs</span>, <span className="text-orange-500">react native</span>,{" "}
              <span className="text-orange-500">nodejs </span> and many other technologies.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutMeSection;
