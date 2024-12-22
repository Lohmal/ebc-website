"use client";

import React from "react";
import { companies } from "@/data";
import Image from "next/image";

const Sponsor = () => {
  return (
    <section id="clients" className="py-20">
      <h2 className="text-[40px] text-center font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-12">
        Sponsorlarımız
      </h2>
      <div className="flex flex-col items-center max-lg:mt-10">
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {companies.map((company) => (
            <React.Fragment key={company.id}>
              <div className="flex gap-2">
                <Image
                  src={company.img}
                  alt={company.name}
                  height={650}
                  width={650}
                  className={
                    company.name === "Temsa" ? "px-5 max-custom:pb-9" : "w-full"
                  }
                />
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsor;
