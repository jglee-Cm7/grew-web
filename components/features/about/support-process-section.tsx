"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FadeIn } from "@/components/ui";

export function SupportProcessSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="relative flex w-full flex-col items-center overflow-hidden">
      {/* Wrapper for the entire green background */}
      <div className="w-full">
        {/* Green background container with no internal padding */}
        <FadeIn>
          <div
            className="relative w-full bg-top bg-no-repeat"
            style={{
              backgroundImage: isMobile
                ? "url(/about-page/green-bg-mobile.svg)"
                : "url(/about-page/green-bg-desktop.svg)",
              backgroundSize: "100% auto",
            }}
          >
            {/* Content container with padding - this doesn't have a background */}
            <div className="flex w-full flex-col items-center px-4 pt-8 pb-0 md:pt-8 md:pb-0 lg:pt-16 lg:pb-0">
              {/* Content layout with fully responsive classes */}
              <div className="z-10 mt-16 flex w-full max-w-4xl flex-col items-center md:-mt-4 md:scale-90 md:flex-row md:items-center md:justify-between lg:-mt-2 xl:mt-12 xl:scale-100">
                {" "}
                {/* Left column */}
                <div className="mb-8 flex flex-col items-center md:mb-0 md:w-5/12 md:scale-90 lg:scale-100">
                  <h2 className="mb-4 text-xl font-medium text-white md:text-xl lg:text-2xl">
                    개척자들이 겪는 한계
                  </h2>

                  {/* White Circle with responsive sizing */}
                  <div className="relative">
                    <div className="h-[200px] w-[200px] md:h-[220px] md:w-[220px] lg:h-[260px] lg:w-[260px]">
                      <Image
                        src={"/about-page/white-circle.svg"}
                        alt="White circle"
                        fill
                        className="object-contain"
                      />
                    </div>

                    {/* White circle content */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center md:p-6 lg:p-8">
                      <p className="mb-2 text-xs font-medium text-green-600 sm:text-sm md:mb-3 lg:mb-4 lg:text-base">
                        자금의 부족
                      </p>
                      <p className="mb-2 text-xs text-green-600 sm:text-sm md:mb-3 lg:mb-4 lg:text-base">
                        멘토링 받을 사람이 없음
                      </p>
                      <p className="text-xs text-green-600 sm:text-sm lg:text-base">
                        목회 전문 지식의 부족
                      </p>
                    </div>
                  </div>
                </div>
                {/* Middle arrows - responsive sizing and rotation */}
                <div className="relative mb-8 h-16 w-16 rotate-90 md:rotate-0 md:self-center lg:h-20 lg:w-20">
                  <Image src={"/about-page/arrows.svg"} alt="Arrows" fill />
                </div>
                {/* Right column */}
                <div className="flex flex-col items-center md:w-5/12 md:scale-90 lg:scale-100">
                  <h2 className="mb-4 text-xl font-medium text-yellow-200 md:text-xl lg:text-2xl">
                    우리의 헌신
                  </h2>

                  {/* Yellow Circle with responsive sizing */}
                  <div className="relative">
                    <div className="h-[200px] w-[200px] md:h-[220px] md:w-[220px] lg:h-[260px] lg:w-[260px]">
                      <Image
                        src={"/about-page/yellow-circle.svg"}
                        alt="Yellow circle"
                        fill
                        className="object-contain"
                      />
                    </div>

                    {/* Yellow circle content */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center md:p-6 lg:p-8">
                      <p className="mb-2 text-xs font-medium text-green-700 sm:text-sm md:mb-3 lg:mb-4 lg:text-base">
                        재정적 지원
                      </p>
                      <p className="mb-2 text-xs text-green-700 sm:text-sm md:mb-3 lg:mb-4 lg:text-base">
                        멘토링, 교육 지원
                      </p>
                      <p className="text-xs text-green-700 sm:text-sm lg:text-base">
                        목회 전문 지식의 연구
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Bottom green background */}
          <div
            className="relative h-24 w-full bg-top bg-no-repeat md:h-20 lg:h-24 xl:h-30"
            style={{
              backgroundImage: isMobile
                ? "url(/about-page/green-bg-mobile-bottom.svg)"
                : "url(/about-page/green-bg-desktop-bottom.svg)",
              backgroundSize: "100% auto",
              marginTop: "-2px", // Ensure overlap with top background
            }}
          ></div>
        </FadeIn>
      </div>

      {/* Church icon and mission statement */}
      <FadeIn>
        <div className="mt-4 mb-12 flex flex-col items-center px-4 text-center md:mb-16">
          {/* Responsive church icon */}
          <div className="relative mb-6 h-[60px] w-[60px] sm:h-[65px] sm:w-[65px] md:mb-8 md:h-[70px] md:w-[70px] lg:h-[80px] lg:w-[80px]">
            <Image
              src={"/about-page/church-icon.svg"}
              alt="Church icon"
              fill
              className="object-contain"
            />
          </div>

          <p className="max-w-2xl text-base leading-relaxed text-gray-800 md:text-lg">
            우리는 앞으로 계속해서 도시를 사랑하고,
            <br />
            도시에서 복음을 전하는 개척자들을 후원할 것입니다.
          </p>
        </div>
      </FadeIn>
    </section>
  );
}
