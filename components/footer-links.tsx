import type { NextPage } from "next";

export type FooterLinksType = {
  className?: string;
};

const FooterLinks: NextPage<FooterLinksType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 pb-[84.1px] pr-5 pl-[343px] box-border max-w-full text-left text-base text-gray-500 font-abel mq750:pl-[85px] mq750:box-border mq1275:pl-[171px] mq1275:box-border mq450:pl-5 mq450:box-border ${className}`}
    >
      <div className="w-[1005.8px] flex flex-row items-start justify-between max-w-full gap-[20px] mq1100:flex-wrap mq1100:justify-center">
        <div className="w-[531.6px] flex flex-col items-start justify-start pt-[13.6px] px-0 pb-0 box-border max-w-full">
          <div className="self-stretch flex flex-row items-start justify-start gap-[32px] mq750:flex-wrap mq750:gap-[16px]">
            <div className="w-[117px] relative inline-block shrink-0">
              WHITE-PAPAER
            </div>
            <div className="w-[105px] flex flex-col items-start justify-start py-0 pr-1 pl-0 box-border">
              <div className="self-stretch relative">VISUAL NOVEL</div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start pt-px pb-0 pr-5 pl-0 box-border min-w-[92px]">
              <div className="w-[91px] relative inline-block">INITIAL DEMO</div>
            </div>
            <div className="flex flex-col items-start justify-start pt-[1.1px] px-0 pb-0 text-white font-arial">
              <div className="relative inline-block min-w-[72.6px]">
                Follow us
              </div>
            </div>
          </div>
        </div>
        <button className="cursor-pointer [border:none] pt-[17px] pb-[16.9px] pr-7 pl-9 bg-[transparent] shadow-[0px_16px_30px_#003861] rounded-4xl-5 [background:linear-gradient(65.84deg,_#00c3fd,_#0194fe)] flex flex-row items-start justify-start whitespace-nowrap">
          <div className="h-[54.2px] w-[185.8px] relative shadow-[0px_16px_30px_#003861] rounded-4xl-5 [background:linear-gradient(65.84deg,_#00c3fd,_#0194fe)] hidden" />
          <b className="relative text-base inline-block font-arial text-white text-left min-w-[120.7px] z-[1]">
            Connect wallet
          </b>
        </button>
      </div>
    </section>
  );
};

export default FooterLinks;
