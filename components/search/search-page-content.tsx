"use client";

import { useSearchParams } from "next/navigation";
import { SearchResults } from "@/components/search/search-results";

export function SearchPageContent() {
  const searchParams = useSearchParams();

  return <SearchResults initialQuery={searchParams.get("q") ?? ""} />;
}
