import Image from "next/image";
import { FadeIn } from "@/lib/motion";

export function AboutSection() {
  return (
    <section id="about" className="bg-white py-16">
      <div className="container mx-auto px-4">
        {/* Top section with logo and description */}
        <FadeIn>
          <div className="mb-16 flex flex-row items-center gap-8">
            <div className="flex justify-end md:w-1/3">
              <div className="relative h-34 w-34 md:h-44 md:w-44">
                <Image
                  src={"/logo/logo-image-black.svg"}
                  alt="그루 로고"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
            <div className="md:w-2/3">
              <h2 className="mb-3 text-3xl">
                <span className="font-bold text-green-500">그루</span>{" "}
                <span className="font-medium text-[#231916]">란?</span>
              </h2>
              <p className="text-lg leading-relaxed text-[#646464]">
                그루(Grew)는 대한민국의 도시에서 새로운 교회를 개척하고
                <br className="hidden md:block" />
                분립하는 일을 지향하는 기관입니다.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Three card section */}
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
          {/* Vision Card */}
          <FadeIn delay="short">
            <div className="flex h-full flex-col justify-between rounded-lg bg-gray-50 p-6 py-8 text-center shadow-sm md:py-10 lg:py-14">
              <div className="mb-6 flex justify-center">
                <Image
                  src={"/mainpage/img-main-01.svg"}
                  alt="비전 아이콘"
                  width={120}
                  height={120}
                />
              </div>
              <h3 className="mb-3 text-xl font-bold">우리의 비전</h3>
              <p className="text-sm leading-relaxed text-gray-600">
                교회 개척을 통해
                <br />
                도시의 방향하는 사람들에게
                <br />
                복음을 전합니다
              </p>
            </div>
          </FadeIn>

          {/* Ministry Card */}
          <FadeIn delay="medium">
            <div className="flex h-full flex-col justify-between rounded-lg bg-gray-50 p-6 py-8 text-center shadow-sm md:py-10 lg:py-14">
              <div className="mb-6 flex justify-center">
                <Image
                  src={"/mainpage/img-main-02.svg"}
                  alt="사역 아이콘"
                  width={120}
                  height={120}
                />
              </div>
              <h3 className="mb-3 text-xl font-bold">우리의 사역</h3>
              <p className="text-sm leading-relaxed text-gray-600">
                새로운 교회를 세우는
                <br />
                개척자들을 지원하고, 교육하며,
                <br />
                개척 프로세스를 연구합니다
              </p>
            </div>
          </FadeIn>

          {/* Community Card */}
          <FadeIn delay="long">
            <div className="flex h-full flex-col justify-between rounded-lg bg-gray-50 p-6 py-8 text-center shadow-sm md:py-10 lg:py-14">
              <div className="mb-6 flex justify-center">
                <Image
                  src={"/mainpage/img-main-03.svg"}
                  alt="소망 아이콘"
                  width={120}
                  height={120}
                />
              </div>
              <h3 className="mb-3 text-xl font-bold">우리의 소망</h3>
              <p className="text-sm leading-relaxed text-gray-600">
                도시를 사랑하고,
                <br />
                도시에서 복음을 전하는
                <br />
                개척자들을 후원합니다
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
