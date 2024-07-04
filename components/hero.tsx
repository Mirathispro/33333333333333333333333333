import type { NextPage } from "next";

export type HeroType = {
  className?: string;
};

const Hero: NextPage<HeroType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-[3px] px-0 pb-[80.7px] box-border max-w-full text-left text-45xl text-white font-display-text-header-big mq750:pb-[34px] mq750:box-border mq1100:pt-5 mq1100:pb-[52px] mq1100:box-border ${className}`}
    >
      <div className="ml-[-21px] w-[1933px] [filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] flex flex-col items-start justify-start pt-0 px-[129px] pb-[286px] box-border relative gap-[100px] shrink-0 max-w-[103%] mq750:gap-[50px] mq750:pl-8 mq750:pr-8 mq750:pb-[121px] mq750:box-border mq1100:pb-[186px] mq1100:box-border mq1275:pl-16 mq1275:pr-16 mq1275:box-border mq450:gap-[25px]">
        <header className="self-stretch flex flex-row items-center justify-between gap-[20px] text-left text-16xl text-white font-display-text-header-big">
          <div className="flex flex-row items-center justify-start">
            <img
              className="h-[93px] w-[93px] relative object-cover"
              loading="lazy"
              alt=""
              src="/rectangle-4@2x.png"
            />
            <h1 className="m-0 relative text-inherit uppercase font-medium font-inherit whitespace-nowrap z-[1] ml-[-5px]">
              IDEA-ENGINE
            </h1>
          </div>
          <div className="flex flex-row items-center justify-start py-5 px-0 gap-[30px]">
            <div className="flex flex-row items-center justify-center">
              <div className="h-[43px] w-3.5 relative">
                <img
                  className="absolute top-[0px] left-[6px] w-2 h-[43px]"
                  alt=""
                  src="/rectangle-8.svg"
                />
                <div className="absolute top-[10px] left-[0px] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(89,_145,_255,_0.8)_30%,_rgba(53,_87,_153,_0.6))] w-1 h-[22px]" />
              </div>
              <button className="cursor-pointer [border:none] py-2.5 px-4 bg-[transparent] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(89,_145,_255,_0.8)_30%,_rgba(53,_87,_153,_0.6))] flex flex-row items-center justify-center whitespace-nowrap">
                <a className="[text-decoration:none] relative text-lg capitalize font-medium font-display-text-header-big text-white text-center inline-block min-w-[128px]">
                  Connect Wallet
                </a>
              </button>
              <img
                className="self-stretch w-3.5 relative max-h-full object-contain min-h-[43px]"
                alt=""
                src="/group-5@2x.png"
              />
            </div>
            <img
              className="h-10 w-10 relative rounded-[50%] object-contain"
              loading="lazy"
              alt=""
              src="/user-profile@2x.png"
            />
          </div>
        </header>
        <div className="w-[713px] flex flex-col items-start justify-start pt-0 px-0 pb-5 box-border gap-[40px] max-w-full mq750:gap-[20px]">
          <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[3px]">
            <h1 className="m-0 relative text-inherit capitalize font-semibold font-inherit mq750:text-32xl mq450:text-19xl">
              <p className="m-0">AI - WEARABLE cRYPTO</p>
              <p className="m-0">cOLLECTIBLES eCOSYSTEM</p>
            </h1>
          </div>
          <div className="w-[701px] flex flex-row items-start justify-start max-w-full text-6xl font-lato">
            <h3 className="m-0 relative text-inherit capitalize font-light font-inherit mq450:text-xl">
              Gamified DePin + AI companion System on wearable
            </h3>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[40px] max-w-full text-center text-3xl mq750:flex-wrap mq750:gap-[20px]">
          <div className="shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)_inset] flex flex-row items-start justify-start">
            <div className="flex flex-row items-end justify-start gap-[2.6px] shrink-0">
              <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[11.9px]">
                <div className="w-[5.3px] h-[44.6px] relative bg-gray-200" />
              </div>
              <img
                className="h-[69.6px] w-[10.5px] relative"
                alt=""
                src="/rectangle-8-1.svg"
              />
            </div>
            <button className="cursor-pointer [border:none] py-[21px] px-[51px] bg-gray-200 flex flex-row items-start justify-start shrink-0 whitespace-nowrap z-[1] ml-[-0.4px] hover:bg-gainsboro-100">
              <div className="relative text-3xl capitalize font-medium font-display-text-header-big text-black text-center inline-block min-w-[122px]">
                Private Sale
              </div>
            </button>
            <img
              className="self-stretch w-[18.4px] relative max-h-full object-contain min-h-[70px] shrink-0 z-[2] ml-[-0.4px]"
              alt=""
              src="/group-5-1@2x.png"
            />
          </div>
          <div className="w-56 flex flex-row items-start justify-between pt-[14.5px] px-0 pb-[13.2px] box-border relative gap-[20px]">
            <div className="h-[42.3px] w-[4.6px] relative">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-dodgerblue-100" />
            </div>
            <div className="h-full w-[calc(100%_-_9.2px)] absolute !m-[0] top-[0px] right-[4.2px] bottom-[0px] left-[5px] bg-darkmagenta-200 box-border border-[1px] border-solid border-dodgerblue-100" />
            <div className="flex flex-col items-start justify-start pt-[6.5px] px-0 pb-0">
              <h3 className="m-0 relative text-inherit capitalize font-medium font-inherit inline-block min-w-[92px] z-[1] mq450:text-lg">
                Whitelist
              </h3>
            </div>
            <img
              className="self-stretch w-[4.6px] relative max-h-full object-contain min-h-[42px] z-[1]"
              alt=""
              src="/group-5-2@2x.png"
            />
          </div>
        </div>
        <div className="w-[604px] !m-[0] absolute top-[-3px] right-[602px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-start justify-start pt-7 px-[71px] pb-[29px] box-border max-w-full z-[2] text-lg">
          <img
            className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
            loading="lazy"
            alt=""
            src="/background.svg"
          />
          <div className="flex-1 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-start justify-between max-w-full gap-[20px] z-[1] mq750:flex-wrap">
            <a className="[text-decoration:none] relative uppercase font-semibold text-[inherit] inline-block min-w-[120px]">
              White-paper
            </a>
            <a className="[text-decoration:none] relative uppercase font-semibold text-[inherit] inline-block min-w-[124px]">
              VISUAL NOVEL
            </a>
            <div className="relative uppercase font-semibold inline-block min-w-[118px]">
              INITIAL DEMO
            </div>
            <div className="self-stretch w-[118px] relative uppercase hidden">
              influencers
            </div>
          </div>
        </div>
        <div className="w-[74px] h-[74px] !m-[0] absolute right-[40px] bottom-[70px] flex flex-row items-start justify-start z-[2]">
          <div className="self-stretch flex-1 relative [backdrop-filter:blur(20px)] rounded-[50%] [background:linear-gradient(147.75deg,_rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.05))]" />
          <div className="h-[50px] w-[12.5px] absolute !m-[0] top-[11px] right-[25.5px] z-[1]">
            <div className="absolute h-[102%] w-[16%] top-[2%] right-[73.6%] bottom-[-4%] left-[10.4%] box-border border-r-[2px] border-solid border-white" />
            <img
              className="absolute h-[35%] w-full top-[0%] right-[0%] bottom-[65%] left-[0%] rounded-12xs-3 max-w-full overflow-hidden max-h-full z-[1]"
              alt=""
              src="/vector-4.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
