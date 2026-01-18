import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#333333] py-12">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Logo Section - Full Width */}
        <div className="mb-8">
          <Image
            src={"/logo/logo-white-image-green-text.svg"}
            alt="그루Grew 로고"
            width={120}
            height={40}
            style={{ objectFit: "contain" }}
          />
        </div>

        {/* Main Content Row */}
        <div className="flex flex-col gap-8 md:flex-row md:justify-between md:gap-16">
          {/* Left Column - Contact Info & Social Media */}
          <div className="md:w-1/3">
            <div className="mb-6 flex flex-col space-y-1 text-sm text-gray-300 sm:space-y-3">
              {/* Company Info - Each item on its own line on mobile */}
              <div className="mb-1 flex flex-col gap-x-2 gap-y-1 sm:mb-2 sm:flex-row sm:flex-wrap sm:items-center">
                <span className="font-medium">(사)법인 그루</span>
                <span className="hidden sm:block">|</span>
                <div className="flex items-center">
                  <span className="font-bold">대표</span>
                  <span>&nbsp;이정규</span>
                </div>
                <span className="hidden sm:block">|</span>
                <div className="flex items-center">
                  <span className="font-bold">사업자등록번호</span>
                  <span>&nbsp;214-82-80991</span>
                </div>
              </div>

              {/* Address */}
              <div className="mb-1 sm:mb-2">
                <span className="font-bold">주소</span>
                <span>
                  &nbsp; 서울시 영등포구 경인로 71길 70 영등포 벽산디지털밸리
                  208호
                </span>
              </div>

              {/* Contact Info - Each item on its own line on mobile */}
              <div className="flex flex-col gap-x-2 gap-y-1 sm:flex-row sm:flex-wrap sm:items-center">
                <div className="flex items-center">
                  <span className="font-bold">대표전화</span>
                  <span>&nbsp; 02-6925-2536</span>
                </div>
                <span className="hidden sm:block">|</span>
                <div className="flex items-center">
                  <span className="font-bold">이메일</span>
                  <span>&nbsp; ekkang@grew.or.kr</span>
                </div>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="mt-4 flex space-x-4">
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <svg
                  className="h-6 w-6 text-gray-400 hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <svg
                  className="h-6 w-6 text-gray-400 hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column - Navigation Links */}
          <div className="md:ml-auto md:w-7/12">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-6 md:gap-2">
              <div className="col-span-1">
                <h3 className="mb-4 font-semibold text-white">후원안내</h3>
              </div>

              <div className="col-span-1">
                <h3 className="mb-4 font-semibold text-white">그루 소개</h3>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li>
                    <Link href="/vision" className="hover:text-white">
                      우리의 비전
                    </Link>
                  </li>
                  <li>
                    <Link href="/team" className="hover:text-white">
                      섬기는 사람들
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col-span-1">
                <h3 className="mb-4 font-semibold text-white">그루 사역</h3>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li>
                    <Link href="/church-planting" className="hover:text-white">
                      교회 개척 지원
                    </Link>
                  </li>
                  <li>
                    <Link href="/planters" className="hover:text-white">
                      개척자들을 위해
                    </Link>
                  </li>
                </ul>
              </div>

              {/* <div className="col-span-1">
                <h3 className="text-white font-semibold mb-4">자료실</h3>
                <ul className="space-y-3 text-gray-400 text-sm">
                  <li>
                    <Link
                      href="http://youtube.com/@Grew-h1z"
                      className="hover:text-white"
                    >
                      개척 칼럼
                    </Link>
                  </li>
                  <li>
                    <Link href="/articles" className="hover:text-white">
                      논문 및 자료
                    </Link>
                  </li>
                </ul>
              </div> */}

              <div className="col-span-1">
                <h3 className="mb-4 font-semibold text-white">교회 찾기</h3>
              </div>

              <div className="col-span-1">
                <a href="mailto:ekkang@grew.or.kr">
                  <h3 className="mb-4 font-semibold text-white">문의하기</h3>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 text-sm text-[#757575]">
          <p>© 2024 GREW</p>
        </div>
      </div>
    </footer>
  );
}
