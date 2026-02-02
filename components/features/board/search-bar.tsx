"use client";

import { useState, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Search } from "lucide-react";

type SearchType = "title" | "content";

interface SearchBarProps {
  currentCategorySlug: string;
}

export function SearchBar({ currentCategorySlug }: SearchBarProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "");
  const [searchType, setSearchType] = useState<SearchType>(
    (searchParams.get("type") as SearchType) || "title",
  );

  const handleSearch = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      const params = new URLSearchParams();
      if (searchQuery.trim()) {
        params.set("q", searchQuery.trim());
        params.set("type", searchType);
      }
      const queryString = params.toString();
      router.push(
        `/board/${currentCategorySlug}${queryString ? `?${queryString}` : ""}`,
      );
    },
    [router, currentCategorySlug, searchQuery, searchType],
  );

  return (
    <form
      onSubmit={handleSearch}
      className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end"
    >
      <select
        value={searchType}
        onChange={(e) => setSearchType(e.target.value as SearchType)}
        className="h-10 appearance-none rounded-md border border-gray-300 bg-white bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22%236b7280%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20d%3D%22M5.23%207.21a.75.75%200%20011.06.02L10%2011.168l3.71-3.938a.75.75%200%20111.08%201.04l-4.25%204.5a.75.75%200%2001-1.08%200l-4.25-4.5a.75.75%200%2001.02-1.06z%22%20clip-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E')] bg-[length:1.25rem_1.25rem] bg-[right_0.5rem_center] bg-no-repeat pr-8 pl-3 text-sm focus:border-green-500 focus:ring-1 focus:ring-green-500 focus:outline-none"
      >
        <option value="title">제목</option>
        <option value="content">내용</option>
      </select>

      <div className="relative">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="검색어를 입력하세요"
          className="h-10 w-full rounded-md border border-gray-300 pr-10 pl-3 text-sm focus:border-green-500 focus:ring-1 focus:ring-green-500 focus:outline-none sm:w-64"
        />
        <button
          type="submit"
          className="absolute top-0 right-0 flex h-10 w-10 items-center justify-center text-gray-400 transition-colors hover:text-green-600"
          aria-label="검색"
        >
          <Search className="h-4 w-4" />
        </button>
      </div>
    </form>
  );
}
