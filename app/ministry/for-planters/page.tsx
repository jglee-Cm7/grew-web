import { PageHeader } from "@/components/layout";
import { FadeIn, FeatureSection } from "@/components/ui";

export default function ForPlantersPage() {
  return (
    <main>
      <PageHeader backgroundImage="/pageheaders/for-planters-bg.webp">
        개척자들을 위해
      </PageHeader>
      <section className="px-4 py-8 sm:px-6 md:px-8 lg:px-12">
        <FadeIn>
          <div className="mx-auto flex flex-col gap-6 py-12 text-center sm:gap-8 sm:py-16 md:py-20">
            <h2 className="text-xl font-bold sm:text-2xl lg:text-3xl">
              그루(Grew)는 개척자들이 필요로 하는 자원을 지원하고, 성장을
              추구하도록 돕습니다.
            </h2>
          </div>
        </FadeIn>
      </section>
      <section>
        <div className="mx-auto max-w-6xl space-y-0">
          <FeatureSection
            showLabel={false}
            showHeading={false}
            bodyText="개척자들은 보통 개척교회가 절실히 필요로 하는 모든 자원들을 초기부터 중형교회가 누릴 수 있는 정도로 누리게 됩니다. 따라서 보통 개척교회를 찾은 구도자 또는 성도들이 호소하는 불편을 최소화하며, 안정적 성장을 추구할 수 있게 됩니다.우리는 다양한 외부전문가와 기관과 협력하여 개척자를 선발합니다. 선발된 개척자는 소정의 교육을 이수하도록 합니다. 개척자는 10명 이상에서 50명 미만의 개척멤버를 모아야 합니다."
            imageUrl="/ministry-page/support-1.webp"
            imageAlt="개척맴버 이미지"
            imageOnRight={true}
          />
          <FeatureSection
            showLabel={false}
            showHeading={false}
            bodyText="개척자들은 지원을 받는 동시에 평가를 받습니다. 가혹한 사역의 환경에서 홀로 내던져진 사역자들이 아닌, 평가와 돌봄과 교제 안에서 사역의 본질에 집중할 수 있게 됩니다."
            imageUrl="/ministry-page/support-2.webp"
            imageAlt="평가와 돌봄 기도 이미지"
            imageOnRight={false}
          />
          <FeatureSection
            showLabel={false}
            showHeading={false}
            bodyText="사역의 혜택을 누린 개척자들은 더 많은 자원을 또 다른 교회 개척을 위해 드릴 수 있게 됩니다. 다양한 개척을 경험한 사람들의 노하우는 자연스럽게 축적되며, 이후 개척을 도전하는 젊은 사역자들을 지원할 수 있게 됩니다."
            imageUrl="/ministry-page/support-3.webp"
            imageAlt="개척 지원 이미지"
            imageOnRight={true}
          />
          <FeatureSection
            showLabel={false}
            showHeading={false}
            bodyText="교회개척을 지원하고 돕고 싶은 성도들의 열망을 체계적으로 투명하게 과정을 공개하며 충족시킬 수 있습니다. 성도들은 자연스럽게 자신이 한 교회를 함께 개척한다는 마음을 가질 수 있게 됩니다."
            imageUrl="/ministry-page/support-4.webp"
            imageAlt="그룹 이미지"
            imageOnRight={false}
          />
        </div>
      </section>
    </main>
  );
}
