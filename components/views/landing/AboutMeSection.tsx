import React from "react";

const AboutMeSection = () => {
  return (
    <div className="min-h-screen bg-indigo-900 w-full flex items-center">
      <div className="flex max-w-screen-2xl mx-auto gap-x-32 items-center">
        <div>
          <p className="text-9xl font-extrabold font-outline-2 text-transparent">about</p>
          <div className="flex items-end gap-x-4">
            <p className="text-9xl font-extrabold font-outline-2 text-transparent">me</p>
            <div className="w-8 h-8 bg-white rounded-full mb-3" />
          </div>
        </div>
        <div className="text-2xl font-mono">
          <p>
            i&apos;m currently a graduate student at university of north carolina at charlotte, majoring in <span className="text-orange-500">information technology.</span>
          </p>
          <p>
            i&apos;m a graduate student at university of north carolina at charlotte, majoring in <span className="text-orange-500">information technology.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMeSection;
