import type { Metadata } from "next";
import { Navbar, Footer } from "@/components/layout";
import Script from "next/script";

import "../globals.css";

export const metadata: Metadata = {
  title: "그루Grew - Church Planting for Cities",
  description: "대한민국 도시에 그루와 함께하는 교회와 공동체",
  keywords: "교회, 그루, 도시, 교회개척, 공동체, 신앙",
  authors: [{ name: "그루Grew" }],
  robots: "index, follow",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "그루Grew - Church Planting for Cities",
    description: "대한민국 도시에 그루와 함께하는 교회와 공동체",
    url: "https://grew.or.kr",
    siteName: "그루Grew",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "그루Grew - Church Planting for Cities",
    description: "대한민국 도시에 그루와 함께하는 교회와 공동체",
  },
  alternates: {
    canonical: "https://grew.or.kr",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <Script
          type="text/javascript"
          src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_APP_KEY}&libraries=services,clusterer&autoload=false`}
        ></Script>

        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
