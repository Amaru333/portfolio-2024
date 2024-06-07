import Image from "next/image";
import React from "react";

function Projects() {
  return (
    <div className="bg-indigo-900 min-h-screen">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex items-end gap-x-4 mb-12">
          <p className="text-8xl font-extrabold font-outline-2 text-transparent">projects</p>
          <div className="w-8 h-8 bg-white rounded-full mb-2" />
        </div>
        <div className="grid grid-cols-9 grid-rows-7 gap-4">
          <div className="col-span-5 row-span-3 relative h-80">
            <Image src="/web-1.png" alt="Test" fill className="rounded-xl object-cover" />
          </div>
          <div className="col-span-2 row-span-4 relative col-start-6">
            <Image src="/mobile-2.png" alt="Test" fill className="rounded-xl object-cover" />
          </div>
          <div className="col-span-2 row-span-4 relative col-start-1 row-start-4">
            <Image src="/mobile-3.png" alt="Test" fill className="rounded-xl object-cover" />
          </div>
          <div className="col-span-3 row-span-2 relative col-start-3 row-start-4">
            <Image src="/web-2.png" alt="Test" fill className="rounded-xl object-cover" />
          </div>
          <div className="col-span-2 row-span-4 relative col-start-8 row-start-1">
            <Image src="/mobile-4.png" alt="Test" fill className="rounded-xl object-cover" />
          </div>
          <div className="col-span-3 row-span-2 relative col-start-3 row-start-6">
            <Image src="/web-3.png" alt="Test" fill className="rounded-xl object-cover" />
          </div>
          <div className="col-span-4 row-span-3 relative col-start-6 row-start-5">
            <Image src="/web-4.png" alt="Test" fill className="rounded-xl object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
