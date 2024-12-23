import React from "react";
import { RxInstagramLogo, RxLinkedinLogo } from "react-icons/rx";

const Footer = () => {
  return (
    <footer
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
      className="w-full h-full border-t dark:border-slate-800   text-gray-200 shadow-lg p-[15px]"
    >
      <div className="w-full container flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Sosyal Medya</div>
            <a
              href="https://www.linkedin.com/company/engineer-build-up-club"
              className="flex flex-row items-center my-[15px] cursor-pointer z-20"
            >
              <RxLinkedinLogo />
              <span className="text-[15px] ml-[6px]">Linkedin</span>
            </a>
            <a
              href="https://www.instagram.com/atu.engineerbuildup/"
              className="flex flex-row items-center my-[15px] cursor-pointer z-20"
            >
              <RxInstagramLogo />
              <span className="text-[15px] ml-[6px]">Instagram</span>
            </a>
          </div>

          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Hakkımızda</div>

            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">
                Daha Fazla Bilgi İçin
              </span>
            </p>
            <a
              href="mailto:info@engineerbuildup.club"
              className="flex flex-row items-center my-[15px] cursor-pointer z-20"
            >
              <span className="text-[15px] ml-[6px]">
                info@engineerbuildup.club
              </span>
            </a>
          </div>
        </div>

        <div className="mb-[20px] text-[15px] text-center">
          &copy; EBC, All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
