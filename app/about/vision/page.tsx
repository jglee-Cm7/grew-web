import PageHeader from "@/components/layout/PageHeader";
import AboutVisionBg from "@/public/pageheaders/about-vision-bg.webp";
import FullLogo from "@/public/logo/logo-img-name-text.svg";
import Image from "next/image";
import SupportProcessSection from "@/components/aboutpage/SupportProcessSection";
import FadeIn from "@/components/ui/FadeIn";

const AboutVisionPage = () => {
  return (
    <main>
      <PageHeader backgroundImage={AboutVisionBg}>우리의 비전</PageHeader>
      <FadeIn>
        <section className="mx-auto mt-8 flex max-w-4xl flex-col items-center px-4 py-16 text-center">
          {/* Logo */}
          <div className="mb-8">
            <div className="relative h-[140px] w-[140px] md:h-[160px] md:w-[160px] lg:h-[200px] lg:w-[200px]">
              <Image
                src={FullLogo}
                alt="Grew Logo"
                fill
                priority
                className="object-contain"
              />
            </div>
          </div>

          {/* Main Statement - Korean */}
          <h1 className="mb-6 text-lg leading-relaxed font-bold md:text-xl">
            그루(Grew)는 대한민국의 도시에서 새로운 교회를 개척하고 분립하는
            일을 지원하는 기관입니다.
          </h1>

          {/* Supporting Text - Korean */}
          <div className="mb-4 text-lg leading-relaxed font-light text-gray-700">
            <p>
              우리는 영적인 요구가 높은 도시의 방황하는 사람들에게 복음을 전하고
              그들을
            </p>
            <p>
              그리스도께로 인도하는 최고의 방법이{" "}
              <span className="text-green-500">교회개척</span>이라고 확신합니다.
            </p>
          </div>
        </section>
      </FadeIn>
      <SupportProcessSection />
      <FadeIn>
        {/* 상단 이미지 배경 영역 */}
        <div className="relative flex min-h-[600px] w-full items-center justify-center py-20 md:min-h-[800px] md:py-32">
          <Image
            src="/about-page/bg-who-01.webp"
            alt="왜 도시인가 배경"
            fill
            priority
            className="z-0 object-cover"
          />
          <div className="relative z-20 flex h-full w-full flex-col items-center justify-center px-4">
            <h2 className="mb-6 text-center text-6xl font-extrabold text-white drop-shadow-lg md:text-7xl">
              ?
            </h2>
            <h3 className="mb-10 text-center text-3xl font-bold tracking-tight text-white drop-shadow-md md:text-4xl">
              왜 도시인가
            </h3>
            <div className="mx-auto max-w-2xl space-y-6 text-center text-lg leading-relaxed font-light text-white md:text-xl">
              <p className="text-gray-100">
                많은 사람들은 성공과 문화적 혜택을 갈망하며 도시의 로망을 즐기려
                하거나,
                <br />
                타락하고 문제가 많은 악의 소굴로만 보려 합니다.
              </p>
              <p className="text-gray-100">
                성경은 도시를 하나님의 선물로 표현합니다.
                <br />
                <span className="text-gray-300">(시 107:7)</span>
              </p>
              <p className="text-gray-100">
                하지만 죄로 오염되어 있지요.
                <br />
                에덴동산으로 시작된 하나님의 비전은 결국
                <br />새 예루살렘이라는 도시로 끝날 것입니다.
              </p>
              <p className="text-gray-100">
                많은 사람들이 커리어, 좋은 교육, 문화, 치안 등을 바라며 도시로
                모여듭니다.
                <br />
                따라서 도시는 새로운 교회를 개척하고, 공동체가 없는 사람들에게
                공동체를 제공하며,
              </p>
              <p className="text-xl font-semibold tracking-wide text-green-200 md:text-2xl">
                유대인이나 헬라인이나 종이나 자유인이나 남자나 여자나
                <br />다 그리스도 예수 안에서 하나
              </p>
              <div className="mt-2 text-xs text-gray-300">(갈 3:28)</div>
              <p className="text-gray-100">
                를 이루도록 하는
                <br />
                복음을 전하기에 최적의 장소입니다.
              </p>
            </div>
          </div>
        </div>
      </FadeIn>
    </main>
  );
};

export default AboutVisionPage;
