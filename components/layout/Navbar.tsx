"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LogoImg from "../../../public/logo-header.svg";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 right-0 left-0 z-50 w-full bg-white shadow-sm">
      {/* Inner container with responsive width */}
      <div className="mx-auto w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%]">
        {/* Main navbar row with logo and navigation */}
        <div className="flex h-16 items-center justify-between">
          {/* Logo - left side */}
          <div className="flex-shrink-0">
            <Link href="/">
              <div className="relative h-8 w-28 sm:w-36">
                <Image
                  src={LogoImg}
                  alt="그루 로고"
                  fill
                  style={{ objectFit: "contain" }}
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Navigation - right side with responsive width */}
          <div className="hidden items-center space-x-4 md:flex lg:space-x-6">
            <Link
              href="/about"
              className="font-medium text-gray-700 hover:text-green-600"
            >
              그루 소개
            </Link>
            <Link
              href="/ministry"
              className="font-medium text-gray-700 hover:text-green-600"
            >
              그루 사역
            </Link>
            {/* <Link
              href="/posts/column"
              className="text-gray-700 hover:text-green-600 font-medium"
            >
              자료실
            </Link> */}
            <Link
              href="/locations"
              className="font-medium text-gray-700 hover:text-green-600"
            >
              교회 찾기
            </Link>
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
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none"
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

      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="border-t border-gray-200 bg-white md:hidden">
          <div className="mx-auto w-[95%] py-2 sm:w-[90%]">
            <div className="space-y-2 py-2">
              <Link
                href="/about"
                className="block py-2 font-medium text-gray-700 hover:text-green-600"
              >
                그루 소개
              </Link>
              <Link
                href="/ministry"
                className="block py-2 font-medium text-gray-700 hover:text-green-600"
              >
                그루 사역
              </Link>
              {/* <Link
                href="/posts/column"
                className="block py-2 font-medium text-gray-700 hover:text-green-600"
              >
                자료실
              </Link> */}
              <Link
                href="/locations"
                className="block py-2 font-medium text-gray-700 hover:text-green-600"
              >
                교회 찾기
              </Link>
              <Link
                href="/give"
                className="mt-2 block w-fit rounded-md bg-green-500 px-4 py-2 font-medium text-white hover:bg-green-600"
              >
                후원안내
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
