// app/church-planting/page.tsx
import { PageHeader } from "@/components/layout";
import { ChurchPlantingTabs } from "@/components/features";
import { FadeIn } from "@/lib/motion";

export default function ChurchPlantingPage() {
  return (
    <main>
      <PageHeader backgroundImage="/pageheaders/church-planting-bg.webp">
        교회 개척 지원
      </PageHeader>
      <section className="px-4 py-8 sm:px-6 md:px-8 lg:px-12">
        <FadeIn>
          <div className="mx-auto flex flex-col gap-6 py-12 text-center sm:gap-8 sm:py-16 md:py-20">
            <h2 className="text-xl font-bold sm:text-2xl lg:text-3xl">
              그루(Grew)는 어떻게 교회개척을 돕는가?
            </h2>
            <p className="mx-auto max-w-3xl text-base text-[#646464] sm:text-sm md:text-lg">
              그루는 프런트오피스와 백오피스로 나누어 교회의 필요를 돕고자
              합니다.
            </p>
          </div>
        </FadeIn>
      </section>
      <section className="px-4 pb-20">
        <ChurchPlantingTabs />
      </section>
    </main>
  );
}
