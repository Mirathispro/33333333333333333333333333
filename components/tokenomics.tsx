import type { NextPage } from "next";

export type TokenomicsType = {
  className?: string;
};

const Tokenomics: NextPage<TokenomicsType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 pb-[978.7px] pr-5 pl-[63px] box-border max-w-full text-left text-81xl text-white font-display-text-header-big mq750:pb-[413px] mq750:box-border mq1275:pl-[31px] mq1275:pb-[636px] mq1275:box-border ${className}`}
    >
      <div className="w-[1642px] flex flex-row items-start justify-between max-w-full gap-[20px] mq1275:flex-wrap mq1275:justify-center">
        <h1 className="m-0 h-32 w-[866px] relative text-inherit capitalize font-medium font-inherit inline-block shrink-0 max-w-full mq750:text-31xl mq450:text-11xl">
          Tokeno﻿mics And Utility
        </h1>
        <div className="w-[172px] flex flex-col items-start justify-start pt-[95px] px-0 pb-0 box-border text-center text-lg">
          <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
            <div className="h-[22px] w-1 relative bg-darkmagenta-100">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-darkmagenta-100 hidden" />
            </div>
            <div className="relative capitalize font-medium inline-block min-w-[67px]">
              view all
            </div>
            <img
              className="h-[22px] w-1 relative object-contain z-[2]"
              alt=""
              src="/group-5-3@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
