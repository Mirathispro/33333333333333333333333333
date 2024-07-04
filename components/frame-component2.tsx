import type { NextPage } from "next";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: NextPage<FrameComponent2Type> = ({ className = "" }) => {
  return (
    <section
      className={`w-[1860px] flex flex-row items-start justify-start pt-0 px-[50px] pb-[30.7px] box-border max-w-full text-left text-9xl text-white font-display-text-header-big mq1100:pl-[25px] mq1100:pr-[25px] mq1100:box-border ${className}`}
    >
      <div className="h-[1135px] flex-1 relative max-w-full">
        <div className="absolute top-[0px] left-[13px] w-[713px] flex flex-row items-start justify-start pt-0 px-0 pb-[173px] box-border max-w-full z-[2]">
          <h2 className="m-0 flex-1 relative text-inherit capitalize font-normal font-inherit inline-block max-w-full mq450:text-3xl">
            mini-games to level up your desired Identity on smartwatch
          </h2>
        </div>
        <div className="absolute top-[29px] left-[0px] w-[1760px] h-[1106px]">
          <img
            className="absolute top-[50px] left-[0px] w-[612.8px] h-[914.9px] object-contain"
            alt=""
            src="/clip-path-group-3@2x.png"
          />
          <img
            className="absolute top-[46px] left-[952px] w-[808px] h-[927.4px] object-contain"
            alt=""
            src="/mask-group-6@2x.png"
          />
          <div className="absolute h-full top-[0px] bottom-[0px] left-[254px] w-[1134px]">
            <img
              className="absolute top-[97px] left-[91px] w-[877px] h-[936px] z-[1]"
              alt=""
              src="/clip-path-group-4.svg"
            />
            <img
              className="absolute top-[0px] left-[0px] w-full h-full overflow-hidden object-cover"
              alt=""
              src="/mentor-3-1@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;
