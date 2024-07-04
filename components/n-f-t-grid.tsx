import type { NextPage } from "next";
import NFTCard from "./n-f-t-card";

export type NFTGridType = {
  className?: string;
};

const NFTGrid: NextPage<NFTGridType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 pb-[223.7px] pr-5 pl-[49px] box-border max-w-full text-left text-base text-white font-display-text-header-big mq750:pb-[145px] mq750:box-border mq1275:pl-6 mq1275:box-border mq450:pb-[94px] mq450:box-border ${className}`}
    >
      <div className="w-[1636px] grid flex-row items-start justify-start gap-[20px] max-w-full grid-cols-[repeat(4,_minmax(295px,_1fr))] z-[1] mq750:grid-cols-[minmax(295px,_1fr)] mq1275:justify-center mq1275:grid-cols-[repeat(2,_minmax(295px,_512px))]">
        <NFTCard
          nFTPicture="/nft-picture@2x.png"
          prices="321"
          userProfile="/user-profile-1@2x.png"
        />
        <NFTCard
          nFTPicture="/nft-picture@2x.png"
          prices="24"
          userProfile="/user-profile-2@2x.png"
        />
        <NFTCard
          nFTPicture="/nft-picture@2x.png"
          prices="24"
          userProfile="/user-profile-2@2x.png"
        />
        <div className="[backdrop-filter:blur(20px)] rounded-mini [background:linear-gradient(147.75deg,_rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.05))] flex flex-col items-start justify-start pt-0.5 px-3 pb-[13px] box-border gap-[39px] max-w-full mq450:gap-[19px]">
          <div className="w-[394px] h-[543px] relative [backdrop-filter:blur(20px)] rounded-mini [background:linear-gradient(147.75deg,_rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.05))] hidden max-w-full" />
          <div className="self-stretch rounded-mini flex flex-row items-start justify-end pt-0 px-[9px] pb-[211px] box-border bg-[url('/nft-picture@2x.png')] bg-cover bg-no-repeat bg-[top] max-w-full z-[1]">
            <img
              className="h-[261px] w-[370px] relative rounded-mini object-cover hidden max-w-full"
              alt=""
              src="/nft-picture@2x.png"
            />
            <div className="[backdrop-filter:blur(20px)] rounded-tl-none rounded-tr-mini rounded-br-none rounded-bl-mini [background:linear-gradient(147.75deg,_rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.05))] flex flex-row items-start justify-start py-[15px] px-5 gap-[8px] z-[1]">
              <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0">
                <img
                  className="w-[17px] h-[15px] relative"
                  alt=""
                  src="/favorites-icons.svg"
                />
              </div>
              <div className="relative tracking-[0.05em] capitalize inline-block min-w-[21px]">
                24
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start pt-0 px-[22px] pb-1.5 text-6xl">
            <div className="flex flex-row items-start justify-start gap-[14px]">
              <img
                className="h-10 w-10 relative rounded-[50%] object-contain z-[1]"
                alt=""
                src="/user-profile-2@2x.png"
              />
              <div className="flex flex-col items-start justify-start gap-[2px]">
                <h3 className="m-0 h-[31px] relative text-inherit tracking-[0.05em] capitalize font-normal font-inherit inline-block whitespace-nowrap z-[1] mq450:text-xl">
                  Floki Mentor
                </h3>
                <div className="relative text-sm tracking-[0.05em] capitalize font-lato inline-block min-w-[69px] z-[1]">
                  By @ User
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[18px] pl-3.5 box-border max-w-full">
            <div className="flex-1 flex flex-col items-start justify-start gap-[30px] max-w-full">
              <div className="self-stretch flex flex-row items-start justify-start py-0 px-2 box-border max-w-full">
                <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] z-[1] mq450:flex-wrap">
                  <div className="flex flex-row items-start justify-start gap-[7px]">
                    <div className="relative tracking-[0.05em] capitalize inline-block min-w-[62px]">
                      on sale
                    </div>
                    <img
                      className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
                      alt=""
                      src="/fxemojifire.svg"
                    />
                  </div>
                  <div className="flex flex-row items-start justify-start text-xl">
                    <img
                      className="h-5 w-5 relative"
                      alt=""
                      src="/vuesaxboldethereumeth.svg"
                    />
                    <div className="flex flex-col items-end justify-start">
                      <div className="h-[25px] relative tracking-[0.05em] capitalize inline-block min-w-[91px] mq450:text-base">
                        4.89 ETH
                      </div>
                      <div className="relative text-sm tracking-[0.05em] capitalize inline-block min-w-[102px]">
                        ($ 654,874.86)
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button className="cursor-pointer [border:none] py-2.5 px-0 bg-[transparent] self-stretch flex flex-row items-start justify-between relative gap-[20px] z-[1] mq450:flex-wrap">
                <div className="h-10 w-2 relative">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-dodgerblue-100" />
                </div>
                <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0">
                  <div className="relative text-lg capitalize font-medium font-display-text-header-big text-white text-center inline-block min-w-[75px] z-[2]">
                    buy now
                  </div>
                </div>
                <div className="h-full w-[calc(100%_-_15.7px)] absolute !m-[0] top-[0px] right-[7.7px] bottom-[0px] left-[8px] bg-dodgerblue-200 box-border z-[1] border-[1px] border-solid border-dodgerblue-100" />
                <img
                  className="self-stretch w-[7.9px] relative max-h-full object-contain min-h-[40px]"
                  alt=""
                  src="/group-5-5@2x.png"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NFTGrid;
