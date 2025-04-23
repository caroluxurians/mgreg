"use client";

import { useSearchParams, useRouter } from "next/navigation";

type PaginationProps = {
  numberOfArticles: number
  perPage?: number
};

const Pagination = ({ numberOfArticles, perPage = 10 }: PaginationProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const numberOfPages = Math.ceil(numberOfArticles / perPage);
  const currentPage = Number(searchParams.get("page")) || 1;

  const handlePageClick = (page: number) => {
    const params = new URLSearchParams(searchParams);
    if (page === 1) {
      params.delete("page");
    } else {
      params.set("page", page.toString());
    }
    router.push(`?${params.toString()}`);
  };

  const arrayOfPages = Array.from({ length: numberOfPages }, (_, i) => i + 1);
  console.log(arrayOfPages);

  return (
    <div className="mb-10 flex justify-center gap-3">
      {arrayOfPages.map((num) => (
        <button
          type="button"
          key={num}
          onClick={() => handlePageClick(num)}
          className={`px-3 py-1 rounded ${num === currentPage
            ? "bg-medium-pink text-white"
            : "bg-light-pink text-medium-pink"
            } hover:bg-pink-200 transition`}
        >
          {num}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
