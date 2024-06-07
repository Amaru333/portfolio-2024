import { SparklesCore } from "@/components/ui/sparkles";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

const JourneySection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["200vh", "300vh"],
  });
  const { scrollYProgress: colorProgress } = useScroll({
    target: ref,
    offset: ["200vh", "400vh"],
  });
  const bgColor = useTransform(colorProgress, [0, 0.2], ["#60B6FF", "#312E81"]);
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [1, 30]);
  return (
    <div className="h-[400vh] relative" ref={ref}>
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
        <motion.div style={{ scale: scaleProgress }}>
          <svg width="248" height="248" viewBox="0 0 248 248" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path d="M248 124C248 192.483 192.483 248 124 248C55.5167 248 0 192.483 0 124C0 55.5167 55.5167 0 124 0C192.483 0 248 55.5167 248 124Z" fill={bgColor} />
            <path
              d="M109 239L111.5 247L122.5 247.5L134 247L144.5 245.5L138.363 234.116L136.927 225.019L139.32 216.402L141.236 209.699L140.757 203.475L136.927 198.209L131.181 196.293L118.255 194.857L111.073 190.07L103.892 184.324L97.1892 181.452L85.2201 182.409L69.4209 183.846L77.0811 191.027L83.7838 201.081L87.1352 203.475L94.7954 212.571L99.583 223.583L105 231L109 239Z"
              fill="#AFE05B"
            />
            <path
              d="M26 48.5L32 41.5L44.0463 38.3012L52.1853 36.3861H61.7606L67.5058 38.7799L73.7297 43.5676L76.1235 47.8765L75.6448 49.7915L70.8571 50.2703L66.0695 51.2278L64.1544 55.0579L64.6332 60.3243L69.4208 66.5483L73.7297 65.5907L78.5174 62.7182L84.7413 67.027L89.0502 76.1236L90.0077 90.4865L84.7413 93.8378L72.7722 105.807L70.3784 113.467V123.042L71.8147 130.703L74.2085 141.236L74.6872 147.938L69.8996 142.193L65.112 139.32L62.2394 138.363L59.8455 139.799L56.0154 142.672L53.6216 147.459L52.6641 153.683L53.1428 158.95L57.9305 165.653L61.7606 172.834L64.1544 178.1L66.0695 182.888L61.7606 182.409L58.4093 180.494H52.6641L45.0038 181.93H38.3011L29.6834 177.622L18.193 171.876L7 163.5L4 153.5L2 143L1 132L0.5 121.5L1.5 111L3 98.5L8 81.5L15 65.5L26 48.5Z"
              fill="#AFE05B"
            />
            <path
              d="M206.826 43.5675L213 38.5L221 47.5L227.5 57L233.5 67L238.5 77.5L242.5 88.5L245 99.5L247.5 115.5V127L246.5 139L245 148L243 156.5L238.5 170L231.5 185L225 195L222.147 188.154L221.189 185.282L217.359 182.409L211.614 180.015L205.39 176.185L201.56 168.525L196.772 161.344L191.506 157.992L184.803 154.641L181.452 151.29L178.579 143.629L179.058 135.969L181.93 129.745L187.676 122.085L188.633 114.425L190.548 108.201L198.208 96.2316L198.687 91.9228L197.251 88.0926V86.1776L203.475 79.4749L209.699 72.2934V67.5058L208.263 64.1544L206.347 63.6756L200.602 62.7181L199.645 60.3243L200.124 54.5791L206.826 43.5675Z"
              fill="#AFE05B"
            />
            <path
              d="M115.861 8.13898L116.5 1L130 0.5L148 3L158.5 5.5L168.5 8.5L165.5 18.5L152.247 40.695L144.587 48.3552L137.405 53.1428L128.309 58.888H126.873L122.564 55.0579L121.606 47.8764L122.564 44.0463L124 38.7799L125.436 32.556V26.8108L123.042 22.5019L116.34 17.7143L113.946 14.3629L115.861 8.13898Z"
              fill="#AFE05B"
            />
            <path d="M247.5 124C247.5 192.207 192.207 247.5 124 247.5C55.7928 247.5 0.5 192.207 0.5 124C0.5 55.7928 55.7928 0.5 124 0.5C192.207 0.5 247.5 55.7928 247.5 124Z" stroke="black" />
            <path
              d="M32.5 41.5C35.6852 39.8525 41.2563 38.8299 44.7124 37.7665C47.6791 36.8537 51.0176 36.4934 54.1105 36.4727C56.68 36.4554 60.0339 35.9166 62.5276 36.6148C64.2173 37.088 65.733 38.016 67.3617 38.6338C70.5184 39.8312 73.637 42.5371 75.1248 45.5722C76.1122 47.5865 77.4271 48.9117 74.4281 50.0225C72.647 50.6821 71.2369 50.8045 69.3523 50.8045C68.5856 50.8045 68.105 50.7759 67.3617 50.8045C65.7584 50.8661 64.5751 52.7447 64.1911 54.2168C63.1457 58.2242 64.3956 61.5161 67.12 64.2405C67.8894 65.0099 68.8934 65.9244 69.9352 66.3874C70.4903 66.6341 71.4912 66.4159 72.1105 66.4159C74.6953 66.4159 75.5711 63.7365 77.7978 63.1457C79.8532 62.6004 80.9126 64.0433 82.3475 65.25C85.2057 67.6535 87.762 70.9897 88.6461 74.6623C89.5122 78.2599 90.0253 81.6042 90.0253 85.2974C90.0253 86.7953 90.416 89.0659 89.7125 90.4728C88.7716 92.3546 86.9951 92.0992 85.3476 93.3591C82.2752 95.7085 79.6023 98.6101 76.6319 101.108C75.5011 102.059 73.9441 103.878 73.3617 105.188C72.5638 106.984 71.1044 108.658 70.6319 110.634C69.7788 114.202 70.0632 117.904 70.0632 121.582C70.0632 122.728 70.7585 123.718 70.8309 124.852C70.9266 126.35 71.5987 127.628 71.5987 129.174C71.5987 130.443 72.1902 131.619 72.3807 132.857C72.5215 133.772 72.6218 134.68 72.7362 135.601C72.9778 137.547 73.7543 139.171 74.158 141.032C74.5332 142.763 74.689 144.552 74.8973 146.307C74.9554 146.797 75.3297 148.351 75.1248 148.966C75.0955 149.054 73.5175 146.412 73.3902 146.179C72.3197 144.22 70.8198 142.645 68.9826 141.373C67.3615 140.251 63.7141 138.395 61.5892 138.885C60.0585 139.239 58.5832 140.341 57.4944 141.43C56.443 142.482 55.24 143.507 54.4517 144.786C53.2415 146.75 52.8865 149.483 52.575 151.724C51.8621 156.851 54.0875 160.298 57.011 164.293C58.6829 166.578 59.7494 169.132 61.248 171.487C61.6702 172.151 61.7829 172.943 62.0442 173.677C62.7894 175.77 63.9768 177.656 64.6887 179.762C64.9262 180.465 65.2664 181.201 65.7124 181.795C65.7871 181.895 66.7157 182.74 66.338 182.847C65.1261 183.194 63.5731 182.731 62.3854 182.606C60.9686 182.457 60.3186 180.822 58.9446 180.573C56.3014 180.092 52.7032 180.333 50.0441 180.814C46.206 181.508 41.642 182.683 37.8024 181.426C32.0612 179.545 26.9137 176.097 21.4374 173.648C19.0629 172.587 16.8973 171.067 14.9256 169.454C13.9821 168.682 7.87175 164.372 7 163.5"
              stroke="black"
              stroke-linecap="round"
            />
            <path
              d="M111 246.5C109.74 238.439 104.901 229.693 99.7362 223.668C98.9459 222.745 98.6426 220.875 98.2291 219.686C97.3719 217.222 96.2965 215.252 94.8879 213.061C93.2303 210.482 91.4937 208.008 89.5134 205.667C87.6252 203.436 84.992 201.978 83.03 199.881C82.1879 198.981 81.6547 197.702 81.0395 196.639C79.9139 194.695 78.5001 192.929 77.229 191.08C75.7846 188.979 73.2757 187.771 71.7124 185.791C70.7529 184.575 69.9655 184.42 68.7835 183.829C68.2648 183.569 69.8677 183.629 69.921 183.629C71.845 183.629 73.7695 183.643 75.6935 183.629C79.4218 183.603 83.0528 182.743 86.7551 182.606C87.8914 182.564 88.9817 181.911 90.0822 181.838C91.586 181.738 93.143 181.513 94.7172 181.383C96.2261 181.259 97.9968 181.117 99.4092 181.753C101.828 182.841 104.019 184.562 106.205 186.047C107.16 186.695 107.886 187.583 108.822 188.236C109.928 189.008 111.144 189.711 112.035 190.739C116.45 195.833 122.549 195.292 128.627 195.9C131.305 196.167 134.203 197.106 136.703 198.217C137.424 198.537 138.479 199.99 139.006 200.634C139.643 201.412 139.965 202.173 140.329 203.108C141.563 206.281 141.48 209.942 140.642 213.203C140.495 213.774 140.018 214.076 139.874 214.653C139.572 215.859 139.105 217.024 138.651 218.179C137.817 220.303 137.676 222.684 137.229 224.919C136.309 229.517 137.973 233.745 140.329 237.573C141.254 239.076 143.732 243.964 144.5 245.5"
              stroke="black"
              stroke-linecap="round"
            />
            <path
              d="M116.5 1C116.303 2.61945 115.888 7.43928 115.339 8.94092C115.147 9.46816 114.686 10.0456 114.601 10.5851C114.481 11.3445 113.997 12.0976 113.997 12.8836C113.997 14.925 114.042 15.7016 115.658 17.0779C117.849 18.944 120.466 20.1566 122.688 22.0607C125.431 24.4124 125.171 28.6125 125.171 32.0096C125.171 35.4894 124.431 37.8781 123.074 41.1868C121.874 44.1097 121.849 46.7422 121.849 49.8438C121.849 51.0885 122.082 52.3041 122.151 53.4677C122.229 54.7895 123.705 55.5924 124.567 56.454C125.286 57.1731 127.728 60.7026 128.727 58.9035C129.755 57.0536 132.218 56.3748 133.861 55.2796C136.131 53.7663 138.622 52.9626 140.841 51.2195C142.182 50.1654 144.327 49.1287 145.337 47.7299C146.593 45.9909 148.708 44.7151 150.085 43.0323C152.187 40.4626 154.195 37.5559 155.974 34.7611C158.713 30.4567 161.228 26.3124 163.674 21.9097C164.455 20.5042 165.146 18.6143 165.704 17.1618C166.162 15.9731 168.5 10.2249 168.5 9"
              stroke="black"
              stroke-linecap="round"
            />
            <path
              d="M213 38.5C211.717 39.5025 207.586 42.4837 206.771 43.8798C205.924 45.3324 204.901 46.8133 203.939 48.2118C202.496 50.3119 201.616 52.7009 200.305 54.7839C199.468 56.113 199.124 59.615 199.629 61.0813C200.729 64.2841 204.416 63.1078 206.898 63.6805C209.455 64.2705 209.85 67.3691 209.814 69.6187C209.766 72.6481 207.195 75.2259 205.355 77.4164C203.393 79.7528 201.049 81.7135 199.185 84.1364C198.613 84.8791 197.602 85.463 197.177 86.2707C196.299 87.9389 198.438 89.5971 198.72 91.1945C199.492 95.5724 195.961 100.035 193.754 103.472C192.193 105.902 189.983 108.557 189.358 111.418C189.094 112.628 188.965 113.829 188.703 115.032C188.058 117.998 188.559 121.4 186.505 123.696C183.481 127.077 180.682 130.857 179.384 135.255C178.166 139.382 178.23 142.136 179.384 146.201C179.96 148.233 181.48 150.363 182.596 152.161C183.456 153.546 183.956 154.659 185.491 155.33C186.635 155.831 187.714 156.096 188.893 156.472C190.459 156.97 191.532 158.145 193.162 158.627C194.993 159.168 196.758 161.685 197.98 163.044C198.846 164.005 199.343 165.124 200.009 166.235C201.539 168.785 203.427 171.504 204.447 174.307C206.121 178.91 212.618 180.257 216.619 181.893C218.844 182.804 220.598 184.352 221.986 186.395C222.551 187.225 222.236 188.042 222.388 188.952C222.546 189.901 224.609 194.088 225 195"
              stroke="black"
              stroke-linecap="round"
            />
          </svg>
        </motion.div>
      </div>
    </div>
  );
};

export default JourneySection;
