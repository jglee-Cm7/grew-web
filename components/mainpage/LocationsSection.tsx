import Image from "next/image";
import GrewMap from "@/public/mainpage/map.svg";
import Button from "../ui/Button";
import FadeIn from "../ui/FadeIn";

export default function Locations() {
  return (
    <section
      id="locations"
      className="relative overflow-hidden bg-[#27AF58] py-16 text-white md:py-24"
    >
      <div className="container mx-auto max-w-screen-xl px-4 md:px-8">
        {/* On mobile: Map first, then text */}
        <FadeIn>
          <div className="mb-12 md:hidden">
            <div className="relative -mt-16 h-[400px] w-full">
              <Image
                src={GrewMap}
                alt="대한민국 지도"
                fill
                priority
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
        </FadeIn>

        <div className="flex flex-col items-center justify-start md:flex-row md:gap-0">
          {/* Text content - full width on mobile */}
          <div className="z-10 w-full text-center md:w-1/2 md:pl-20 md:text-left">
            <FadeIn>
              <h2 className="mb-6 text-3xl leading-tight font-bold md:text-4xl">
                대한민국 도시에
                <br />
                그루와 함께하는 교회와 공동체
              </h2>
              <p className="mb-10 leading-relaxed text-white/90">
                &quot;그에게서 온 몸이 각 마디를 통하여 도움을 받음으로
                <br className="hidden md:block" />
                연결되고 결합되어 각 지체의 분량대로 역사하여 그 몸을
                <br className="hidden md:block" />
                자라게 하며 사랑 안에서 스스로 세우니라&quot; (엡 4:16)
              </p>
            </FadeIn>
            <FadeIn delay="short">
              <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
                <Button variant="secondary" size="md" href="/about/vision">
                  왜 도시인가요?
                </Button>
                <Button href="/locations" variant="green" size="md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    />
                  </svg>
                  교회찾기
                </Button>
              </div>
            </FadeIn>
          </div>

          {/* Map on desktop only - hidden on mobile */}
          <div className="relative z-10 hidden md:-ml-12 md:block md:w-1/2 lg:-ml-24 xl:-ml-32">
            <FadeIn direction="left">
              <div className="relative -mt-38 h-[600px] w-full">
                <Image
                  src={GrewMap}
                  alt="대한민국 지도"
                  fill
                  priority
                  style={{
                    objectFit: "contain",
                    objectPosition: "right center",
                  }}
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
