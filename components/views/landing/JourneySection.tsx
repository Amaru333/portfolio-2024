import { SparklesCore } from "@/components/ui/sparkles";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

const JourneySection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["450vh", "600vh"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [1, 25]);
  return (
    <div className="h-[400vh] relative">
      <div className="w-full h-full absolute inset-0">
        <SparklesCore id="tsparticlesfullpage" background="transparent" minSize={0.6} maxSize={1.4} particleDensity={100} className="w-full h-full" particleColor="#FFFFFF" />
      </div>
      <div className="flex flex-col max-w-screen-2xl mx-auto pt-20">
        <motion.h1
          initial={{ opacity: 0.5, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2,
            duration: 0.5,
            ease: "easeInOut",
          }}
          className="mt-8 text-8xl font-extrabold font-outline-2-white text-transparent flex items-end justify-center"
        >
          my journey <div className="w-6 h-6 bg-orange-500 rounded-full mb-2 ml-4" />
        </motion.h1>
        <div className="flex flex-col gap-x-12 mt-28 font-mono">
          <motion.div
            initial={{ opacity: 0.1, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.5,
              ease: "easeInOut",
            }}
            className="flex"
          >
            <div className="mt-4 pr-12 max-w-screen-sm">
              <p className="text-xl">
                bachelor of engineering in <span className="text-orange-500">information science</span>
              </p>
              <p className="text-xs mb-2">
                visvesvaraya technological university, <span className="text-orange-500">bangalore (IN)</span>
              </p>
              <p>- published & presented my final year project named &quot;design of hierarchical data aggregation for internet of underwater things&quot; as a paper in ICGCCP-2021</p>
              <p>- gave a technical paper presentation on the topic &quot;artificial intelligence in video games&quot;</p>
            </div>
            <img src="/graduate-1.svg" className="mr-20" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0.1, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.5,
              ease: "easeInOut",
            }}
            className="flex mt-8 justify-end"
          >
            <div className="mr-8 mt-28">
              <img src="/exp-1.svg" />
            </div>
            <div className="max-w-screen-sm">
              <p className="text-xl">
                full stack <span className="text-orange-500">developer</span>
              </p>
              <p className="text-xs mb-2">
                upGrad, <span className="text-orange-500">bangalore (IN)</span>
              </p>
              <p>- worked on several technologies like react, nextjs, redux, setry, moengage, etc</p>
              <p>- developed admin panels for live classes, online tests, question banks</p>
              <p>- revamped the test experience for users with new, better and improved ui to give a detailed insights for users after taking tests</p>
              <p>- integrated sentry tool to the website to give an insight of the errors faced by the users and performance of the website</p>
              <p>- integrated moengage and google analytics to get an insight of user engagement</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0.1, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.5,
              ease: "easeInOut",
            }}
            className="flex"
          >
            <div className="max-w-screen-sm">
              <p className="text-xl">
                full stack <span className="text-orange-500">developer</span>
              </p>
              <p className="text-xs mb-2">
                the wasserstoffs, <span className="text-orange-500">gurgaon (IN)</span>
              </p>
              <p>- worked on several technologies like react, nextjs, react native, tailwindcss, redux toolkit, nodejs, express, mongodb, and much more</p>
              <p>- worked on blockchain technology for several web and mobile applications</p>
              <p>- developed static and dynamic ui screens for web, android and ios applications</p>
              <p>- developed apis for several applications including charts and data analytics</p>
              <p>- created crypto trading / currency swapping widgets as per client&apos;s requirements</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0.1, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.5,
              ease: "easeInOut",
            }}
            className="flex items-end"
          >
            <div className="mt-8 ml-20">
              <img src="/plane.svg" />
            </div>
            <div className="ml-8 max-w-screen-sm">
              <p className="text-xl">
                masters of science in <span className="text-orange-500">information technology</span>
              </p>
              <p className="text-xs mb-2">
                university of north carolina at charlotte, <span className="text-orange-500">charlotte (US)</span>
              </p>
              <p>- expected to graduate by spring 2025</p>
              <p>- completed several courses like network based application development, software system design and implementaion, applied database, etc</p>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="z-30 sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <motion.img src="/earth-2.svg" style={{ scale: scaleProgress }} />
      </div>
    </div>
  );
};

export default JourneySection;
