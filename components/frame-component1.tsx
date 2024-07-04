import type { NextPage } from "next";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({ className = "" }) => {
  return (
    <section
      className={`w-[1741.2px] flex flex-row items-start justify-center pt-0 px-5 pb-[172.7px] box-border max-w-full text-center text-3xl text-white font-inter ${className}`}
    >
      <div className="w-[553.1px] flex flex-row items-start justify-center gap-[72.1px] max-w-full mq750:flex-wrap mq750:gap-[36px] mq450:gap-[18px]">
        <div className="flex-1 [backdrop-filter:blur(20px)] rounded-xl bg-gray-400 box-border flex flex-row items-start justify-start py-[11px] pr-[13px] pl-[25px] min-w-[156px] border-[1px] border-solid border-gray-300 mq750:flex-1">
          <div className="h-[65.8px] w-[240.5px] relative [backdrop-filter:blur(20px)] rounded-xl bg-gray-400 box-border hidden z-[1] border-[1px] border-solid border-gray-300" />
          <img
            className="h-[39.9px] w-[48.1px] relative overflow-hidden shrink-0 z-[1]"
            loading="lazy"
            alt=""
            src="/logogoogleplaystoresvgrepocom-1.svg"
          />
          <div className="flex-1 flex flex-col items-start justify-start pt-[5.8px] px-0 pb-0 ml-[-0.4px]">
            <h3 className="m-0 self-stretch relative text-inherit font-normal font-inherit z-[1] mq450:text-lg">
              For Androids
            </h3>
          </div>
        </div>
        <div className="flex-[0.8903] [backdrop-filter:blur(20px)] rounded-xl bg-gainsboro-200 flex flex-row items-start justify-start pt-[14.9px] px-[31px] pb-[13px] box-border gap-[14.4px] min-w-[156px] text-black mq750:flex-1">
          <div className="h-[65.8px] w-[240.5px] relative [backdrop-filter:blur(20px)] rounded-xl bg-gainsboro-200 hidden" />
          <img
            className="h-[37.9px] w-[37.3px] relative overflow-hidden shrink-0 z-[1]"
            loading="lazy"
            alt=""
            src="/apple-logo-black-1.svg"
          />
          <div className="flex-1 flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
            <h3 className="m-0 self-stretch relative text-inherit font-normal font-inherit z-[1] mq450:text-lg">
              For IOS
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
