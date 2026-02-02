"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="ko">
      <body>
        <div
          style={{
            display: "flex",
            minHeight: "100vh",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#f9fafb",
            padding: "1rem",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <h1
              style={{
                marginBottom: "1rem",
                fontSize: "3.75rem",
                fontWeight: "bold",
                color: "#d1d5db",
              }}
            >
              500
            </h1>
            <h2
              style={{
                marginBottom: "1rem",
                fontSize: "1.5rem",
                fontWeight: "600",
                color: "#1f2937",
              }}
            >
              오류가 발생했습니다
            </h2>
            <p
              style={{
                marginBottom: "2rem",
                color: "#4b5563",
              }}
            >
              죄송합니다. 예기치 않은 오류가 발생했습니다.
            </p>
            <button
              onClick={() => reset()}
              style={{
                borderRadius: "0.375rem",
                backgroundColor: "#16a34a",
                padding: "0.75rem 1.5rem",
                color: "white",
                border: "none",
                cursor: "pointer",
              }}
            >
              다시 시도
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
