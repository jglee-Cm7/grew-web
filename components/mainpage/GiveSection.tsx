import Image from "next/image";
import Button from "../ui/Button";
import FadeIn from "../ui/FadeIn";

export default function GiveSection() {
  return (
    <section id="give" className="relative flex min-h-[80vh] items-center overflow-hidden py-32">
      <div className="container mx-auto px-4">
        <FadeIn>
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
            저는 어떻게 도울 수 있나요?
          </h2>
          <p className="mb-12 max-w-3xl text-xl text-gray-200">
            개척자들은 재정적 지원과 함께<br />
            여러분의 사역동참이 필요합니다.
          </p>
        </div>
        </FadeIn>
        <FadeIn delay="short">
        <div>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button variant="secondary" size="md">
              물질 후원하기
            </Button>
            <Button variant="secondary" size="md">
              사역참여 후원하기
            </Button>
          </div>
        </div>
        </FadeIn>
      </div>
      
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 z-10 bg-black/50"></div>
        <Image
          src="/mainpage/hands.png"
          alt="함께하는 손"
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      </div>
    </section>
  );
}