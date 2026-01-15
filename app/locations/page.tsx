import PageHeader from "@/components/layout/PageHeader";
import KakaoMap from "@/components/KakaoMap/KakaoMap";

const locations = [
  {
    title: "시광교회 문래 캠퍼스",
    lat: 37.5150641632063,
    lng: 126.88607722083,
  },
  {
    title: "시광교회 신촌 캠퍼스",
    lat: 37.5544148008909,
    lng: 126.934261335891,
  },
];
const LocationsPage = () => {
  return (
    <main>
      <PageHeader backgroundImage="/pageheaders/church-planting-bg.webp">
        교회 찾기
      </PageHeader>
      <section className="px-4 py-8 sm:px-6 md:px-8 lg:px-12">
        <div className="mx-auto flex w-full flex-col gap-6 py-12 sm:gap-8 sm:py-16 md:py-20">
          <p className="text-center text-base font-semibold text-gray-800 sm:text-sm md:text-lg">
            지도
          </p>
          <KakaoMap markers={locations} />
        </div>
      </section>
    </main>
  );
};

export default LocationsPage;
