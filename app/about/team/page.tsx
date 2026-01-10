import PageHeader from "@/components/layout/PageHeader";
import FadeIn from "@/components/ui/FadeIn";
import StaffCard, { StaffMember } from "@/components/ui/StaffCard";

const staffMembers: StaffMember[] = [
  {
    id: "1",
    name: "이정규 목사",
    affiliations: ["시광교회"],
    imageSrc: "/about-page/pastor-lee.jpg",
    badgeText: "대표",
  },
  {
    id: "2",
    name: "고상섭 목사",
    affiliations: ["고신교회 담임", "CTCKorea 이사 / 옥한흠 은보 포럼 이사"],
    imageSrc: "/about-page/pastor-go.png",
    badgeText: "자문위원",
  },
  {
    id: "3",
    name: "임형규 목사",
    affiliations: ["라이트하우스 서울숲 담임", "한동신학대학원 졸업 (M.Div)"],
    imageSrc: "/about-page/pastor-lim.png",
    badgeText: "자문위원",
  },
];

const AboutTeamPage = () => {
  return (
    <main>
      <PageHeader backgroundImage="/pageheaders/about-team-bg.png">
        섬기는 사람들
      </PageHeader>
      <section className="mt-20 mb-40 bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <FadeIn delay="short">
            <h2 className="mb-8 text-3xl font-bold">자문단</h2>
          </FadeIn>
          <FadeIn delay="medium">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {staffMembers.map((member) => (
                <StaffCard key={member.id} member={member} />
              ))}
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
};

export default AboutTeamPage;
