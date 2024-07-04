import type { NextPage } from "next";
import Hero from "../components/hero";
import FrameComponent4 from "../components/frame-component4";
import FrameComponent3 from "../components/frame-component3";
import FrameComponent2 from "../components/frame-component2";
import FrameComponent1 from "../components/frame-component1";
import NFTGrid from "../components/n-f-t-grid";
import Tokenomics from "../components/tokenomics";
import FrameComponent from "../components/frame-component";
import FooterLinks from "../components/footer-links";
import MentorPanel from "../components/mentor-panel";

const HOMEPAGE: NextPage = () => {
  return (
    <div className="w-full relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] bg-black overflow-hidden flex flex-col items-start justify-start pt-[98px] px-0 pb-[21px] box-border gap-[12.3px] leading-[normal] tracking-[normal] text-left text-6xl text-white font-lato">
      <img
        className="w-[1603px] h-[1000px] absolute !m-[0] top-[63px] right-[-275px] overflow-hidden shrink-0 object-contain z-[1]"
        alt=""
        src="/utility-creation--buysell-threads-as-nfts-with-desired-cryptocurrency-peertopeer-zero-knowledge-variable-exchange-with-ai-agents-11-1@2x.png"
      />
      <Hero />
      <div className="flex flex-row items-start justify-start pt-0 px-[38px] pb-[34.7px] box-border max-w-full">
        <h3 className="m-0 relative text-inherit capitalize font-light font-inherit z-[8] mq450:text-xl">
          most loved NFTs of the time
        </h3>
      </div>
      <FrameComponent4 gamified="Gamified" dePinAI=" DePin + AI" />
      <FrameComponent3 />
      <div className="w-[875px] flex flex-row items-start justify-start pt-0 px-[59px] pb-[1594.7px] box-border max-w-full text-9xl font-display-text-header-big mq1100:pl-[29px] mq1100:pr-[29px] mq1100:pb-[674px] mq1100:box-border mq1275:pb-[1037px] mq1275:box-border mq450:pb-[438px] mq450:box-border">
        <div className="flex-1 flex flex-row items-start justify-start pt-0 px-0 pb-[66px] box-border max-w-full z-[8]">
          <h2 className="m-0 flex-1 relative text-inherit capitalize font-normal font-inherit inline-block max-w-full mq450:text-3xl">
            mini-games to level up your desired Identity on smartwatch
          </h2>
        </div>
      </div>
      <div className="flex flex-row items-start justify-start pt-0 px-[50px] pb-[34.7px] box-border max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border">
        <h3 className="m-0 relative text-inherit capitalize font-light font-inherit z-[13] mq450:text-xl">
          most loved NFTs of the time
        </h3>
      </div>
      <FrameComponent4
        gamified="Quest/NFT"
        dePinAI=" games"
        propWidth="1742px"
      />
      <FrameComponent2 />
      <section className="w-[1741.3px] flex flex-row items-start justify-center pt-0 px-5 pb-[12.7px] box-border max-w-full text-center text-[80px] font-inter">
        <h1 className="m-0 w-[1327.3px] relative text-inherit font-medium font-inherit text-transparent !bg-clip-text [background:linear-gradient(270deg,_#ff3b6a,_#ffaf36_34.17%,_#5991ff_60.17%)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block shrink-0 max-w-full mq750:text-21xl mq450:text-5xl">
          Swift Blockchain Revolution
        </h1>
      </section>
      <section className="w-[1741.1px] flex flex-row items-start justify-center pt-0 px-5 pb-[83.2px] box-border max-w-full text-center text-9xl text-gray-200 font-inter">
        <h2 className="m-0 w-[1110.9px] relative text-inherit font-light font-inherit inline-block shrink-0 max-w-full mq450:text-3xl">
          Ready to energize your life and turn it into earnings? With Move to
          Earn, your steps hold real value. Simply walk, run, or exercise to
          earn. Each step matters.
        </h2>
      </section>
      <FrameComponent1 />
      <div className="w-[580px] flex flex-row items-start justify-center pt-0 px-5 pb-[34.7px] box-border max-w-full">
        <h3 className="m-0 relative text-inherit capitalize font-light font-inherit mq450:text-xl">
          most loved NFTs of the time
        </h3>
      </div>
      <section className="w-[1302px] flex flex-row items-start justify-start py-0 pr-5 pl-0 box-border relative max-w-full text-left text-21xl text-white font-display-text-header-big">
        <div className="w-[713px] !m-[0] absolute bottom-[-51.3px] left-[125px] flex flex-row items-start justify-start pt-0 px-0 pb-[143px] box-border max-w-full">
          <h1 className="m-0 flex-1 relative text-inherit capitalize font-normal font-inherit inline-block max-w-full mq750:text-[32px] mq450:text-5xl">
            mini-games to level up your desired Identity on smartwatch
          </h1>
        </div>
        <div className="flex-1 flex flex-row items-start justify-end pt-0 px-0 pb-[216.7px] box-border max-w-full text-center text-81xl text-dodgerblue-100">
          <h1 className="m-0 w-[1157px] relative text-inherit capitalize font-medium font-inherit inline-block shrink-0 max-w-full mq750:text-31xl mq450:text-11xl">
            <span>{`collectibles `}</span>
            <span className="text-white">Marketplace</span>
          </h1>
        </div>
      </section>
      <NFTGrid />
      <div className="w-[763px] flex flex-row items-start justify-center pt-0 px-5 pb-[34.7px] box-border max-w-full">
        <h3 className="m-0 relative text-inherit capitalize font-light font-inherit mq450:text-xl">
          Most Appreciated NFTs On Sale For the day
        </h3>
      </div>
      <Tokenomics />
      <section className="w-full h-[1215.8px] absolute !m-[0] right-[0px] bottom-[1896.2px] left-[0px] max-w-full">
        <div className="absolute top-[0px] left-[532px] w-[1366px] flex flex-row items-start justify-start max-w-full">
          <div className="h-[43px] w-[164px] absolute !m-[0] top-[46px] right-[120px] bg-darkmagenta-200 box-border z-[1] border-[1px] border-solid border-darkmagenta-100" />
          <img
            className="h-[768px] flex-1 relative max-w-full overflow-hidden object-cover z-[3]"
            alt=""
            src="/utility-creation--buysell-threads-as-nfts-with-desired-cryptocurrency-peertopeer-zero-knowledge-variable-exchange-with-ai-agents-19-1@2x.png"
          />
        </div>
        <img
          className="absolute top-[464.7px] left-[774px] w-[1366px] h-[751.1px] overflow-hidden object-contain z-[4]"
          loading="lazy"
          alt=""
          src="/utility-creation--buysell-threads-as-nfts-with-desired-cryptocurrency-peertopeer-zero-knowledge-variable-exchange-with-ai-agents-20-1@2x.png"
        />
        <img
          className="absolute top-[140px] left-[-316px] w-[1654px] h-[925px] overflow-hidden object-contain z-[5]"
          alt=""
          src="/utility-creation--buysell-threads-as-nfts-with-desired-cryptocurrency-peertopeer-zero-knowledge-variable-exchange-with-ai-agents-21-1@2x.png"
        />
      </section>
      <div className="w-[971px] flex flex-row items-start justify-center pt-0 px-5 pb-[34.7px] box-border max-w-full">
        <h3 className="m-0 w-[711px] relative text-inherit capitalize font-light font-inherit inline-block max-w-full z-[5] mq450:text-xl">
          Watch and follow celebrities to get the best collection of NFTs
        </h3>
      </div>
      <FrameComponent />
      <section className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[67px] box-border max-w-full text-center text-45xl text-mintcream font-display-text-header-big mq1100:pl-[33px] mq1100:box-border">
        <h1 className="m-0 w-[819px] relative text-inherit leading-[130px] font-bold font-inherit inline-block shrink-0 max-w-full z-[4] mq750:text-32xl mq750:leading-[104px] mq450:text-19xl mq450:leading-[78px]">
          Join Whitelist
        </h1>
      </section>
      <section className="self-stretch flex flex-row items-start justify-center pt-0 pb-[91.8px] pr-5 pl-[67px] box-border max-w-full mq750:pl-[33px] mq750:box-border">
        <div className="w-[680px] rounded-mini box-border flex flex-row items-start justify-between pt-[5px] pb-1.5 pr-[11px] pl-[52px] gap-[20px] max-w-full z-[4] border-[1px] border-solid border-dodgerblue-100 mq750:pl-[26px] mq750:box-border mq450:flex-wrap mq450:justify-center">
          <div className="h-24 w-[680px] relative rounded-mini box-border hidden max-w-full border-[1px] border-solid border-dodgerblue-100" />
          <input
            className="w-[167px] [border:none] [outline:none] bg-[transparent] h-[59.3px] flex flex-col items-start justify-start pt-[23.3px] px-0 pb-0 box-border font-lato text-5xl text-lightslategray"
            placeholder="info@gmail.com"
            type="text"
          />
          <div className="w-[90px] rounded-mini bg-dodgerblue-100 flex flex-col items-start justify-start py-[35px] px-5 box-border z-[1]">
            <img
              className="self-stretch h-[12.5px] relative max-w-full overflow-hidden shrink-0 object-contain"
              alt=""
              src="/arrow@2x.png"
            />
          </div>
        </div>
      </section>
      <FooterLinks />
      <MentorPanel />
      <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[417px] box-border max-w-full text-sm text-gray-100 font-inter mq750:pl-[104px] mq750:box-border mq1275:pl-52 mq1275:box-border mq450:pl-5 mq450:box-border">
        <div className="w-[882px] relative inline-block shrink-0 max-w-full z-[4]">
          <b className="font-inter">©</b>
          <span className="font-semibold whitespace-pre-wrap">
            {` Copyright © 2024 Incentives  Incentives - AI Automations and blockchain `}
          </span>
          <a
            className="text-[inherit]"
            href="mailto:sales@idea-engine.ai"
            target="_blank"
          >
            <span className="font-semibold whitespace-pre-wrap">
              <span className="[text-decoration:underline]">
                sales@idea-engine.ai
              </span>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HOMEPAGE;
