"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Run once on mount to set initial state
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  // Navigation items with their subpages
  const navItems = [
    {
      name: "그루 소개",
      href: "",
      subPages: [
        { name: "우리의 비전", href: "/about/vision" },
        { name: "섬기는 사람들", href: "/about/team" },
      ],
    },
    {
      name: "그루 사역",
      href: "",
      subPages: [
        { name: "교회 개척 지원", href: "/ministry/church-planting" },
        { name: "개척자들을 위해", href: "/ministry/for-planters" },
      ],
    },
    {
      name: "자료실",
      href: "",
      subPages: [
        { name: "목회 칼럼", href: "/board/column" },
        { name: "논문 및 자료", href: "/board/research" },
      ],
    },
    {
      name: "교회 찾기",
      href: "/locations",
      subPages: [],
    },
    {
      name: <a href="mailto:ekkang@grew.or.kr">문의하기</a>,
      href: "",
      subPages: [],
    },
  ];

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
      {/* Inner container with responsive width */}
      <div className="mx-auto w-[95%] sm:w-[95%] md:w-[90%] lg:w-[85%]">
        {/* Main navbar row with logo and navigation */}
        <div className="flex h-16 items-center justify-between">
          {/* Logo - left side */}
          <div className="flex-shrink-0">
            <Link href="/">
              <div className="relative h-8 w-28 sm:w-36">
                {scrolled ? (
                  <Image
                    src={"/logo/logo-header.svg"}
                    alt="그루 로고"
                    fill
                    style={{ objectFit: "contain" }}
                    priority
                  />
                ) : (
                  <Image
                    src={"/logo/logo-white-all.svg"}
                    alt="그루 로고"
                    fill
                    style={{ objectFit: "contain" }}
                    priority
                  />
                )}
              </div>
            </Link>
          </div>

          {/* Navigation - right side with responsive width */}
          <div className="hidden items-center space-x-8 md:flex lg:space-x-10">
            {navItems.map((item, index) => (
              <div
                key={index}
                className="group relative"
                onMouseEnter={() => setActiveDropdown(index)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.href ? (
                  <Link
                    onClick={(e) =>
                      item.subPages.length > 0 && e.preventDefault()
                    }
                    className={`group relative font-medium ${
                      scrolled ? "text-gray-700" : "text-white"
                    } hover:text-green-600`}
                    href={item.href}
                  >
                    {item.name}
                    {/* Underline animation */}
                    <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                ) : (
                  <div
                    onClick={(e) =>
                      item.subPages.length > 0 && e.preventDefault()
                    }
                    className={`group relative font-medium ${
                      scrolled ? "text-gray-700" : "text-white"
                    } hover:text-green-600`}
                  >
                    {item.name}
                    {/* Underline animation */}
                    <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
                  </div>
                )}

                {/* Invisible spacer to bridge the gap */}
                {item.subPages.length > 0 && (
                  <div className="absolute top-full left-0 h-4 w-full"></div>
                )}

                {/* Dropdown for subpages */}
                {item.subPages.length > 0 && activeDropdown === index && (
                  <div className="absolute top-[calc(100%+4px)] left-1/2 z-10 w-28 -translate-x-1/2 transform rounded-md bg-white py-1">
                    {item.subPages.map((subPage, subIndex) => (
                      <Link
                        key={subIndex}
                        href={subPage.href}
                        className="block px-2 py-2 text-center text-sm text-gray-700 hover:bg-gray-50 hover:text-green-600"
                      >
                        {subPage.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Donation button */}
            <Link
              href="/give"
              className="rounded-md bg-green-500 px-3 py-2 font-medium text-white hover:bg-green-600 lg:px-4 lg:py-2"
            >
              후원안내
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`inline-flex items-center justify-center rounded-md p-2 focus:outline-none ${
                scrolled
                  ? "text-gray-700 hover:text-gray-900"
                  : "text-white hover:text-gray-100"
              }`}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu - Full screen overlay with slide-in animation */}
      <div
        className={`fixed inset-0 z-50 overflow-y-auto bg-white transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close button */}
        <div className="absolute top-4 right-4">
          <button onClick={() => setIsMenuOpen(false)} className="p-2">
            <svg
              className="h-6 w-6 text-black"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Menu content */}
        <div className="px-8 py-12">
          {/* Menu grid */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-12">
            {/* 그루 소개 Section */}
            <div>
              <h2 className="mb-6 text-xl font-bold">{navItems[0].name}</h2>
              <ul className="space-y-4">
                {navItems[0].subPages.map((subPage, index) => (
                  <li key={index}>
                    <Link
                      href={subPage.href}
                      className="block text-gray-700"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {subPage.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* 그루 사역 Section */}
            <div>
              <h2 className="mb-6 text-xl font-bold">{navItems[1].name}</h2>
              <ul className="space-y-4">
                {navItems[1].subPages.map((subPage, index) => (
                  <li key={index}>
                    <Link
                      href={subPage.href}
                      className="block text-gray-700"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {subPage.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* 자료실 Section */}
            <div>
              <h2 className="mb-6 text-xl font-bold">{navItems[2].name}</h2>
              <ul className="space-y-4">
                {navItems[2].subPages.map((subPage, index) => (
                  <li key={index}>
                    <Link
                      href={subPage.href}
                      className="block text-gray-700"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {subPage.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* 교회 찾기 Section */}
            <div>
              <Link href="/locations" onClick={() => setIsMenuOpen(false)}>
                <h2 className="mb-6 text-xl font-bold text-gray-700 hover:text-green-600">
                  {navItems[2].name}
                </h2>
              </Link>
            </div>

            {/* 문의하기 Section */}
            <div className="col-span-2">
              <h2 className="mb-6 text-xl font-bold text-gray-700 hover:text-green-600">
                {navItems[2].name}
              </h2>
            </div>
          </div>

          {/* Horizontal divider */}
          <div className="my-8 border-t border-gray-200"></div>

          {/* Donation button */}
          <div className="flex justify-center">
            <Link
              href="/give"
              className="rounded-full bg-green-500 px-16 py-3 text-center font-medium text-white hover:bg-green-600"
              onClick={() => setIsMenuOpen(false)}
            >
              후원하기
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
