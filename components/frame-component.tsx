import type { NextPage } from "next";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return (
    <section
      className={`w-[1789px] flex flex-row items-start justify-center pt-0 px-5 pb-[695.7px] box-border max-w-full text-center text-81xl text-white font-display-text-header-big mq750:pb-[294px] mq750:box-border mq1275:pb-[452px] mq1275:box-border ${className}`}
    >
      <div className="w-[1529px] flex flex-row items-start justify-center gap-[1px] max-w-full mq1275:flex-wrap">
        <h1 className="m-0 w-[439px] relative text-inherit capitalize font-medium font-inherit inline-block min-w-[439px] max-w-full mq750:text-31xl mq750:min-w-full mq1275:flex-1 mq450:text-11xl">
          Roadmap
        </h1>
        <div className="flex-1 flex flex-col items-start justify-start pt-[50px] px-0 pb-0 box-border min-w-[708px] max-w-full text-lg mq750:pt-8 mq750:box-border mq1100:min-w-full">
          <div className="self-stretch flex flex-row items-start justify-end py-[42px] px-[46px] box-border relative gap-[48.5px] min-h-[615px] mq450:flex-wrap mq450:gap-[24px] mq450:justify-center mq450:pl-5 mq450:pr-5 mq450:box-border">
            <div className="h-[22px] w-1 relative bg-darkmagenta-100">
              <div className="absolute top-[0px] left-[0px] bg-darkmagenta-100 w-full h-full hidden" />
            </div>
            <div className="flex flex-row items-start justify-start relative">
              <div className="h-[43px] w-[164px] absolute !m-[0] top-[calc(50%_-_21.5px)] left-[-49px] bg-darkmagenta-200 box-border z-[1] border-[1px] border-solid border-darkmagenta-100" />
              <div className="relative capitalize font-medium inline-block min-w-[67px] z-[2]">
                view all
              </div>
            </div>
            <img
              className="h-[22px] w-1 relative object-contain z-[2]"
              alt=""
              src="/group-5-10@2x.png"
            />
            <img
              className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover z-[5]"
              alt=""
              src="/utility-creation--buysell-threads-as-nfts-with-desired-cryptocurrency-peertopeer-zero-knowledge-variable-exchange-with-ai-agents-24-3@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
