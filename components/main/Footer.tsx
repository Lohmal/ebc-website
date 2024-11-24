import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full h-full container bg-transparent text-gray-200 shadow-lg p-[15px]">
      <div className="w-full flex flex-col items-center justify-center m-auto">
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
