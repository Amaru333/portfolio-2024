import { SparklesCore } from "@/components/ui/sparkles";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

const AboutMeSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["200vh", "300vh"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0, -135]);

  return (
    <div className="min-h-[300vh]">
      <div className="[perspective:800px] flex items-center overflow-hidden z-30 max-h-screen">
        <motion.div
          className="bg-indigo-900 h-screen w-full flex items-center [perspective:800px]"
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
      <div className="h-[200vh] relative">
        <div className="w-full h-full absolute inset-0">
          <SparklesCore id="tsparticlesfullpage" background="transparent" minSize={0.6} maxSize={1.4} particleDensity={100} className="w-full h-full" particleColor="#FFFFFF" />
        </div>
        <div className="flex flex-col max-w-screen-2xl mx-auto pt-20">
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="mt-8 text-8xl font-extrabold font-outline-2-white text-transparent flex items-end justify-center"
          >
            my journey <div className="w-6 h-6 bg-orange-500 rounded-full mb-2 ml-4" />
          </motion.h1>
          <div className="flex flex-col gap-x-12 mt-28 font-mono">
            <div className="flex">
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
            </div>
            <div className="flex mt-8 justify-end">
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
            </div>
            <div className="flex">
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
            </div>
            <div className="flex items-end">
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
            </div>
          </div>
        </div>
      </div>
      {/* <div className="h-[40rem] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
        <div className="w-full absolute inset-0 h-screen">
          <SparklesCore id="tsparticlesfullpage" background="transparent" minSize={0.6} maxSize={1.4} particleDensity={100} className="w-full h-full" particleColor="#FFFFFF" />
        </div>
        <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20">Build great products</h1>
      </div> */}
    </div>
  );
};

export default AboutMeSection;
