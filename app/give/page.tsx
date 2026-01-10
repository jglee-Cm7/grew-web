"use client";

import PageHeader from "@/components/layout/PageHeader";
import GivePageBg from "@/public/pageheaders/give-bg.png";
import InfoBox from "@/components/ui/InfoBox";
import TabSystem from "@/components/ui/TabSystem";
import AnimatedButton from "@/components/ui/AnimatedButton";
import FadeIn from "@/components/ui/FadeIn";
import Image from "next/image";

const GivePage = () => {
  // Tab 1 content - Physical Donations
  const physicalDonationsContent = (
    <div>
      <FadeIn direction="left" delay="medium">
        <div className="space-y-4">
          <InfoBox heading="일시후원" mainText="그루가 진행하는 전체 사업 일시 후원하기" />
          <InfoBox heading="정기후원" mainText="그루가 진행하는 전체 사업 정기 후원하기" />
          <InfoBox
            heading="지정 정기후원"
            mainText="개척교회 1:1 결연 (월 5만원 이상 등) 그루가 선정한 개척교회 중 1개 교회 집중 후원하기"
            subTextItems={[
              {
                number: 1,
                text: "교육훈련 프로그램·목회자 발굴 및 성장을 위한 멘토링 사업비",
              },
              {
                number: 2,
                text: "개척교회 설립 임팩트 투자·개척을 위한 전반 프로세스 과정에 사용 (ex. 설립비용, 가구 및 기자재 등 구입)",
              },
            ]}
          />
          <InfoBox heading="재산기부" mainText="수도권 내외 인큐베이팅 센터 설립을 위해 후원자가 소유하고 있는 재산 일부(토지, 건물 등)를 후원하고, 이를 통해 그루가 선 정한 개척교회는 그 장소에서 초기 사역(최대 3년) 진행" />
          <InfoBox heading="물품후원" mainText="개척에 필요한 여러 물품(사무용품, 가구, 차량, 목회도서, 방송기기, 기타 교회에 필요한 물품 등)을 후원" />
        </div>
      </FadeIn>

      <FadeIn>
        <div className="mt-16 mb-8 flex justify-center">
          <AnimatedButton onClick={() => window.open("https://docs.google.com/forms/d/12PtPgTJ2Dqs2sCpbdE6mZENEH50pnxuuoHB4QCpAU68", "_blank")}>물질 후원하기</AnimatedButton>
        </div>
      </FadeIn>
    </div>
  );

  // Tab 2 content - Business/Service Donations
  const serviceDonationsContent = (
    <div>
      <div className="mb-8 text-center">
        <p className="text-lg">그루(Grew)에 소속된 봉사자(최소 1년 이상)로서 필요에 따라 개척교회 사역에 파견되어 돕습니다.</p>
      </div>

      <FadeIn direction="left" delay="medium">
        <div className="space-y-4">
          <InfoBox heading="미디어팀" mainText="영상기획, 영상 제작, 음향 및 장비 조율, 유튜브 송출 및 홈페이지 관리, 모니터링 등" />
          <InfoBox heading="기술지원팀" mainText="개척 교회 홈페이지 제작 (UI/UX 디자이너, 웹 개발), 그루 후원 시스템 개발" />
          <InfoBox heading="찬양팀" mainText="싱어, 반주: 피아노, 기타, 드럼, 일렉, 베이스 등" />
          <InfoBox heading="교육팀" mainText="교육부서 보조교사 등" />
          <InfoBox heading="디자인팀" mainText="포스터, 현수막 디자인 및 제작 등" />
          <InfoBox heading="일반행정" mainText="이사, 청소, 도배, 간판 등" />
          <InfoBox heading="기타" mainText="무엇이든 도움 수 있는 것이 생기면 돕고 싶음" />
        </div>
      </FadeIn>

      <FadeIn>
        <div className="mt-16 mb-8 flex justify-center">
          <AnimatedButton onClick={() => window.open("https://docs.google.com/forms/d/1WJ3JwxnakQSAF51ZUXE3LYrLADzBVwxRmxSTcAScwuA", "_blank")}>사역 후원하기</AnimatedButton>
        </div>
      </FadeIn>
    </div>
  );

  // Define the tabs for TabSystem
  const tabs = [
    {
      id: "physical",
      label: "물질 후원",
      content: physicalDonationsContent,
    },
    {
      id: "service",
      label: "사역참여 후원",
      content: serviceDonationsContent,
    },
  ];

  return (
    <main>
      <PageHeader backgroundImage={GivePageBg}>후원안내</PageHeader>
      <section className="px-4 py-8 sm:px-6 md:px-8 lg:px-12">
        <FadeIn>
          <div className="mx-auto flex flex-col items-center gap-6 py-12 text-center sm:gap-8 sm:py-16 md:py-20">
            <h2 className="text-xl font-semibold sm:text-2xl lg:text-3xl">
              도시를 밝힐 개척자들을 위한 후원자를 모십니다. <br />
              재정적 지원과 함께 개척자들과 교회를 섬기실 봉사자분들도 환영합니다.
            </h2>
          </div>
          <div className="flex flex-col items-center gap-10">
            <Image src="/give-page/love-hand.svg" alt="Give Image" width={97} height={97} className="size-[70px] sm:size-[97px]" />
            <div className="flex items-center gap-4 rounded-2xl bg-[#F3F4F6] px-6 py-4 text-center text-sm font-bold break-keep sm:px-8 sm:py-5 sm:text-lg">
              <span>국민은행</span>
              <span>030301-04-203353</span>
              <span>그루</span>
            </div>
          </div>
        </FadeIn>
      </section>
      <section className="container mx-auto max-w-6xl px-4 py-8">
        <TabSystem tabs={tabs} defaultTab="physical" />
      </section>
    </main>
  );
};

export default GivePage;
