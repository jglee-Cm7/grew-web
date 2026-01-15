// components/ChurchPlantingTabs.tsx
"use client";

import TabSystem from "../../components/ui/TabSystem";
import FeatureSection from "../../components/ui/FeatureSection"; // Import the refactored component

const ChurchPlantingTabs = () => {
  // Front Office Content
  const frontOfficeContent = (
    <div className="space-y-0">
      <FeatureSection
        headingText="개척자 선발"
        bodyText="우리는 다양한 외부전문가와 기관과 협력하여 개척자를 선발합니다. 선발된 개척자는 소정의 교육을 이수하도록 합니다. 개척자는 10명 이상에서 50명 미만의 개척멤버를 모아야 합니다."
        labelText="하나"
        imageUrl="/ministry-page/front-1.webp"
        imageAlt="개척자 선발 이미지"
        imageOnRight={true}
      />
      <FeatureSection
        headingText="지원 및 헌정"
        bodyText="3년의 기간 동안 무상으로 공간을 임대하고, 교직자의 사례비를 지원하며, 교육 및 행사를 아웃소싱합니다. 체험 기간 동안 개척자는 관리를 받아야 하며, 필수적 결정에 따라야 합니다. 기간은 자원자의 헌신에 따라 늘어날 수 있습니다."
        labelText="둘"
        imageUrl="/ministry-page/front-2.webp"
        imageAlt="지원 및 헌정 이미지"
        imageOnRight={false}
      />
      <FeatureSection
        headingText="관리 및 피드백"
        bodyText="자문단은 개척자가 부딪힐 여러 가지 상황들에 직접적 피드백과 도움을 주고, 개척에 실패했다고 판단된 경우 이후 과정자치를 지도합니다. 하지만 자문팀이 성공했다고 판단되는 경우 자문단에 판단사항을 알리며, 교회 재정과 일부를 나누어 더 많은 교회를 돕도록 이끕니다."
        labelText="셋"
        imageUrl="/ministry-page/front-3.webp"
        imageAlt="관리 및 피드백 이미지"
        imageOnRight={true}
      />
      <FeatureSection
        headingText="프로세스 개선"
        bodyText="교회와 자원하면서 그루는 더 많은 도시, 더 많은 지역에 교회를 개척할 수 있게 되고, 더 많은 노하우와 인력을 갖게 됩니다. 이로써 대한민국의 도시선교에 기여하는 기관이 됩니다."
        labelText="넷"
        imageUrl="/ministry-page/front-4.webp"
        imageAlt="프로세스 개선 이미지"
        imageOnRight={false}
      />
    </div>
  );

  // Back Office Content
  const backOfficeContent = (
    <div className="space-y-0">
      <FeatureSection
        headingText="개척자 교육"
        bodyText="대표와 자문단은 교회를 위한 좋은 교재, 프로그램 등을 만들어서 보급합니다. 보급된 교재 및 프로그램은 지원교회에 무료로 배포합니다."
        labelText="하나"
        imageUrl="/ministry-page/back-1.webp"
        imageAlt="관리 및 피드백 이미지"
        imageOnRight={false}
      />
      <FeatureSection
        headingText="교회 홍보"
        bodyText="유튜브 채널을 만들어서 사역을 홍보하고, 개척된 교회를 홍보합니다. 홍보된 교회는 그루의 지원을 받아서 변증이나 설교에 대한 지속적 강의를 듣습니다."
        labelText="둘"
        imageUrl="/ministry-page/back-2.webp"
        imageAlt="프로세스 개선 이미지"
        imageOnRight={true}
      />
      <FeatureSection
        headingText="운영 지원"
        bodyText=""
        subSections={[
          {
            title: "행정지원",
            content: "세무 및 행정관련, 목회자의 다양한 필요를 충족",
          },
          {
            title: "디자인 및 영상, 웹 지원",
            content: "자원봉사자 연결 및 활용 인력 고용을 통해 중장 지원",
          },
          {
            title: "개척교회 지원자 연결",
            content: "유아 봉사 및 다양한 봉사를 원하는 사람을 연결",
          },
        ]}
        labelText="셋"
        imageUrl="/ministry-page/back-3.webp"
        imageAlt="관리 및 피드백 이미지"
        imageOnRight={false}
      />
    </div>
  );

  // Create tab options for TabSystem
  const tabOptions = [
    {
      id: "frontOffice",
      label: "프런트오피스",
      content: frontOfficeContent,
    },
    {
      id: "backOffice",
      label: "백오피스",
      content: backOfficeContent,
    },
  ];

  return (
    <div className="mx-auto max-w-6xl">
      <TabSystem tabs={tabOptions} defaultTab="frontOffice" />
    </div>
  );
};

export default ChurchPlantingTabs;
