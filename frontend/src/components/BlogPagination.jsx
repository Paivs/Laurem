"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function BlogPagination({ totalItems, itemsPerPage }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentPage = Number(searchParams.get("page")) || 1;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const createPageURL = (pageNumber) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  // Função para gerar os números de página visíveis
  const getVisiblePages = () => {
    const visiblePages = [];
    const maxVisible = 5; // Número máximo de páginas visíveis

    let start = Math.max(1, currentPage - Math.floor(maxVisible / 2));
    let end = Math.min(totalPages, start + maxVisible - 1);

    if (end - start + 1 < maxVisible) {
      start = Math.max(1, end - maxVisible + 1);
    }

    for (let i = start; i <= end; i++) {
      visiblePages.push(i);
    }

    return visiblePages;
  };

  const visiblePages = getVisiblePages();

  return (
    <Pagination className="mt-8">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href={createPageURL(currentPage - 1)}
            onClick={(e) => {
              if (currentPage <= 1) {
                e.preventDefault();
              }
            }}
            isActive={currentPage > 1}
          />
        </PaginationItem>

        {visiblePages[0] > 1 && (
          <>
            <PaginationItem>
              <PaginationLink
                href={createPageURL(1)}
                isActive={1 === currentPage}
              >
                1
              </PaginationLink>
            </PaginationItem>
            {visiblePages[0] > 2 && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}
          </>
        )}

        {visiblePages.map((page) => (
          <PaginationItem key={page}>
            <PaginationLink
              href={createPageURL(page)}
              isActive={page === currentPage}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}

        {visiblePages[visiblePages.length - 1] < totalPages && (
          <>
            {visiblePages[visiblePages.length - 1] < totalPages - 1 && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}
            <PaginationItem>
              <PaginationLink
                href={createPageURL(totalPages)}
                isActive={totalPages === currentPage}
              >
                {totalPages}
              </PaginationLink>
            </PaginationItem>
          </>
        )}

        <PaginationItem>
          <PaginationNext
            href={createPageURL(currentPage + 1)}
            onClick={(e) => {
              if (currentPage >= totalPages) {
                e.preventDefault();
              }
            }}
            isActive={currentPage < totalPages}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
