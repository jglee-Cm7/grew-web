"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  categorySlug: string;
}

export function Pagination({
  currentPage,
  totalPages,
  categorySlug,
}: PaginationProps) {
  const searchParams = useSearchParams();

  // 페이지 번호 생성 (현재 페이지 기준 앞뒤 2개씩, 최대 5개)
  const getPageNumbers = () => {
    const pages: number[] = [];
    const maxVisible = 5;
    let start = Math.max(1, currentPage - 2);
    const end = Math.min(totalPages, start + maxVisible - 1);

    // 끝에서 시작점 조정
    if (end - start + 1 < maxVisible) {
      start = Math.max(1, end - maxVisible + 1);
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  };

  const buildHref = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    if (page === 1) {
      params.delete("page");
    } else {
      params.set("page", String(page));
    }
    const queryString = params.toString();
    return `/board/${categorySlug}${queryString ? `?${queryString}` : ""}`;
  };

  const pageNumbers = getPageNumbers();

  const buttonClass =
    "flex h-9 w-9 items-center justify-center rounded border border-gray-300 text-sm transition-colors hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50";
  const activeClass = "bg-green-600 border-green-600 text-white hover:bg-green-700";
  const disabledClass = "pointer-events-none opacity-50";

  const isFirstPage = currentPage <= 1;
  const isLastPage = currentPage >= totalPages || totalPages < 1;

  return (
    <nav
      className="flex items-center justify-center gap-1"
      aria-label="페이지 네비게이션"
    >
      {/* 처음으로 */}
      <Link
        href={buildHref(1)}
        className={cn(buttonClass, isFirstPage && disabledClass)}
        aria-label="처음 페이지"
        aria-disabled={isFirstPage}
      >
        <ChevronsLeft className="h-4 w-4" />
      </Link>

      {/* 이전 */}
      <Link
        href={buildHref(Math.max(1, currentPage - 1))}
        className={cn(buttonClass, isFirstPage && disabledClass)}
        aria-label="이전 페이지"
        aria-disabled={isFirstPage}
      >
        <ChevronLeft className="h-4 w-4" />
      </Link>

      {/* 페이지 번호 */}
      {pageNumbers.length > 0 ? (
        pageNumbers.map((page) => (
          <Link
            key={page}
            href={buildHref(page)}
            className={cn(buttonClass, page === currentPage && activeClass)}
            aria-current={page === currentPage ? "page" : undefined}
          >
            {page}
          </Link>
        ))
      ) : (
        <span className={cn(buttonClass, activeClass)}>1</span>
      )}

      {/* 다음 */}
      <Link
        href={buildHref(Math.max(1, Math.min(totalPages, currentPage + 1)))}
        className={cn(buttonClass, isLastPage && disabledClass)}
        aria-label="다음 페이지"
        aria-disabled={isLastPage}
      >
        <ChevronRight className="h-4 w-4" />
      </Link>

      {/* 마지막으로 */}
      <Link
        href={buildHref(Math.max(1, totalPages))}
        className={cn(buttonClass, isLastPage && disabledClass)}
        aria-label="마지막 페이지"
        aria-disabled={isLastPage}
      >
        <ChevronsRight className="h-4 w-4" />
      </Link>
    </nav>
  );
}
