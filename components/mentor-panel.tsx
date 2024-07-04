import type { NextPage } from "next";

export type MentorPanelType = {
  className?: string;
};

const MentorPanel: NextPage<MentorPanelType> = ({ className = "" }) => {
  return (
    <section
      className={`w-full h-[1801px] absolute !m-[0] right-[0px] bottom-[0px] left-[0px] ${className}`}
    >
      <div className="absolute top-[1561.4px] left-[1099.4px] w-[235.6px] h-[54.2px] z-[1]">
        <div className="absolute h-full top-[0px] bottom-[0px] left-[54.6px] [backdrop-filter:blur(50px)] rounded-[50%] bg-powderblue w-[51.3px]" />
        <div className="absolute top-[14.4px] left-[0px] w-[11.3px] h-[24.6px] flex items-center justify-center">
          <img
            className="w-full h-full object-contain absolute left-[0px] top-[16px] [transform:scale(6.31)]"
            alt=""
            src="/group-86.svg"
          />
        </div>
        <div className="absolute h-full top-[0px] bottom-[0px] left-[119.5px] [backdrop-filter:blur(50px)] rounded-[50%] bg-powderblue w-[51.3px]" />
        <div className="absolute top-[17.6px] left-[57.5px] w-[19.2px] h-[20.7px] z-[1] flex items-center justify-center">
          <img
            className="w-full h-full z-[1] object-contain absolute left-[0px] top-[16px] [transform:scale(4.125)]"
            alt=""
            src="/group-87.svg"
          />
        </div>
        <div className="absolute h-full top-[0px] bottom-[0px] left-[184.3px] [backdrop-filter:blur(50px)] rounded-[50%] bg-powderblue w-[51.3px]" />
        <div className="absolute top-[16px] left-[118.6px] w-[18.4px] h-[20.8px] z-[1] flex items-center justify-center">
          <img
            className="w-full h-full z-[1] object-contain absolute left-[0px] top-[16px] [transform:scale(4.261)]"
            loading="lazy"
            alt=""
            src="/group-721.svg"
          />
        </div>
      </div>
      <img
        className="absolute top-[1471px] left-[-26px] rounded-381xl w-[2053.8px] h-[330px] z-[2]"
        alt=""
        src="/rectangle-55.svg"
      />
      <img
        className="absolute top-[1704.9px] left-[44.5px] rounded-381xl w-[1909.6px] h-[33.9px] z-[3]"
        alt=""
        src="/rectangle-56.svg"
      />
      <img
        className="absolute top-[1028px] left-[0px] w-[1879px] h-[620px] object-cover z-[3]"
        alt=""
        src="/pic@2x.png"
      />
      <img
        className="absolute top-[115px] left-[-88px] w-[1571px] h-[856px] overflow-hidden object-contain"
        alt=""
        src="/utility-creation--buysell-threads-as-nfts-with-desired-cryptocurrency-peertopeer-zero-knowledge-variable-exchange-with-ai-agents-22-1@2x.png"
      />
      <img
        className="absolute top-[656px] left-[-214px] w-[1241px] h-[666px] overflow-hidden object-contain z-[5]"
        alt=""
        src="/utility-creation--buysell-threads-as-nfts-with-desired-cryptocurrency-peertopeer-zero-knowledge-variable-exchange-with-ai-agents-23-1@2x.png"
      />
      <img
        className="absolute top-[0px] left-[-26px] w-[1089px] h-[615px] overflow-hidden object-contain z-[1]"
        alt=""
        src="/utility-creation--buysell-threads-as-nfts-with-desired-cryptocurrency-peertopeer-zero-knowledge-variable-exchange-with-ai-agents-24-3@2x.png"
      />
      <img
        className="absolute top-[583px] left-[539px] w-[1089px] h-[615px] overflow-hidden object-contain z-[6]"
        loading="lazy"
        alt=""
        src="/utility-creation--buysell-threads-as-nfts-with-desired-cryptocurrency-peertopeer-zero-knowledge-variable-exchange-with-ai-agents-24-3@2x.png"
      />
    </section>
  );
};

export default MentorPanel;
