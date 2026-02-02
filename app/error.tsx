"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // 에러 로깅 (필요시 에러 리포팅 서비스에 전송)
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4">
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-bold text-gray-300">500</h1>
        <h2 className="mb-4 text-2xl font-semibold text-gray-800">
          문제가 발생했습니다
        </h2>
        <p className="mb-8 text-gray-600">
          죄송합니다. 페이지를 불러오는 중 오류가 발생했습니다.
        </p>
        <button
          onClick={() => reset()}
          className="rounded-md bg-green-600 px-6 py-3 text-white transition-colors hover:bg-green-700"
        >
          다시 시도
        </button>
      </div>
    </div>
  );
}
