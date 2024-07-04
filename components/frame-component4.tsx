import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type FrameComponent4Type = {
  className?: string;
  gamified?: string;
  dePinAI?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
};

const FrameComponent4: NextPage<FrameComponent4Type> = ({
  className = "",
  gamified,
  dePinAI,
  propWidth,
}) => {
  const frameSectionStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <section
      className={`w-[1820px] flex flex-row items-start justify-start pt-0 px-[38px] pb-[3.7px] box-border max-w-full text-center text-81xl text-dodgerblue-100 font-display-text-header-big ${className}`}
      style={frameSectionStyle}
    >
      <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq1275:flex-wrap">
        <h1 className="m-0 w-[943px] relative text-inherit capitalize font-medium font-inherit inline-block shrink-0 max-w-full z-[8] mq750:text-31xl mq450:text-11xl">
          <span>{gamified}</span>
          <span className="text-white">{dePinAI}</span>
        </h1>
        <div className="w-[172px] flex flex-col items-start justify-start pt-[21px] px-0 pb-0 box-border">
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch flex flex-row items-start justify-start">
            <div className="flex flex-col items-start justify-start pt-[10.5px] px-0 pb-0">
              <div className="w-1 h-[22px] relative bg-darkmagenta-100 z-[8]">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-darkmagenta-100 hidden" />
              </div>
            </div>
            <div className="h-[43px] flex-1 relative">
              <div className="absolute top-[10px] left-[49px] text-lg capitalize font-medium font-display-text-header-big text-white text-center inline-block min-w-[67px] z-[8]">
                view all
              </div>
              <div className="absolute top-[0px] left-[0px] bg-darkmagenta-200 box-border w-full h-full z-[9] border-[1px] border-solid border-darkmagenta-100" />
            </div>
            <div className="flex flex-col items-start justify-start pt-[10.5px] px-0 pb-0">
              <img
                className="w-1 h-[22px] relative object-contain z-[10]"
                alt=""
                src="/group-5-3@2x.png"
              />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent4;
