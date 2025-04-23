"use client";

import Image from "next/image";
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

  const maxVisible = 7;
  let start = Math.max(1, currentPage - Math.floor(maxVisible / 2));
  let end = start + maxVisible - 1;

  if (end > numberOfPages) {
    end = numberOfPages;
    start = Math.max(1, end - maxVisible + 1);
  }

  const visiblePages = arrayOfPages.slice(start - 1, end);

  return (
    <div className="mb-10 flex justify-center gap-2 sm:mb-16 md:mb-20 xl:mb-22">
      {currentPage > 1 && (
        <button
          type="button"
          onClick={() => handlePageClick(currentPage - 1)}
          className="px-2 hover:bg-light-pink transition duration-200"
        >
          <Image
            src="/arrow-pagination.svg"
            height={25}
            width={25}
            alt="arrow back"
            className="sm:w-7"
          />
        </button>
      )}
      {visiblePages.map((num) => (
        <button
          type="button"
          key={num}
          onClick={() => handlePageClick(num)}
          className={`font-heading text-3xl w-6 sm:w-7 sm:text-4xl ${num === currentPage
            ? "bg-medium-pink text-white"
            : "text-medium-pink"} hover:bg-light-pink transition duration-200 cursor-pointer`}
        >
          {num}
        </button>
      ))}
      {currentPage < numberOfPages && (
        <button
          type="button"
          onClick={() => handlePageClick(currentPage + 1)}
          className="px-2 hover:bg-light-pink transition duration-200"
        >
          <Image
            src="/arrow-pagination.svg"
            height={25}
            width={25}
            alt="arrow forward"
            className="transition-transform rotate-180 sm:w-7"
          />
        </button>
      )}
    </div>
  );
};

export default Pagination;
