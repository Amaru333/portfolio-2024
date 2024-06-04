"use client";

import { FlipWords } from "@/components/ui/flip-words";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Spotlight } from "@/components/ui/Spotlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const HeroSection = () => {
  const words = ["Web\u00a0App\u00a0Developer", "Mobile\u00a0App\u00a0Developer", "UI/UX\u00a0Designer"];
  const ref = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const { scrollYProgress: aboutScroll } = useScroll({
    target: aboutRef,
    offset: ["start start", "end end"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0.1, 0.5], [1, 200]);
  const translateX = useTransform(scrollYProgress, [0.3, 0.5], [0, -1300]);

  const aboutScaleOpacity = useTransform(aboutScroll, [0.1, 0.2], [1, 0]);
  return (
    <div className="min-h-[200vh] relative">
      <div className="flex flex-col items-center justify-center h-screen sticky top-0 overflow-hidden">
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
        <motion.div
          className="overflow-hidden z-30 mb-8"
          style={{
            scale: scaleProgress,
            translateX: translateX,
          }}
        >
          <TextGenerateEffect words="Hello World! I'm Amrutesh Arun" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4"
        >
          <motion.div className="flex justify-center items-center px-4" style={{ opacity: aboutScaleOpacity }}>
            <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400 w-[480px] h-[80px]">
              I&apos;m a
              <FlipWords words={words} />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
