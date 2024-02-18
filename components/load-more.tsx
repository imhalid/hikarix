"use client";
import MovieCard from "@/components/ui/movie-card";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import useStore from "@/zustand/useStore";
import { useOptionsStore, OptionsValues } from "@/zustand/useOptionsStore";

export type MovieCard = JSX.Element;

interface LoadMoreButtonProps {
  API_FUNC?: (page: number, genre_id?: number, query?: string) => Promise<any>;
  genre_id?: number;
  query?: string;
  year?: number;
  QUERY_FUNC?: (page: number, query: string) => Promise<any>;
  YEAR_FUNC?: (page: number, year: number) => Promise<any>;
}
let page = 2;
export default function LoadMoreButton({
  API_FUNC,
  genre_id,
  query,
  year,
  QUERY_FUNC,
  YEAR_FUNC,
}: LoadMoreButtonProps) {
  const infinity = useStore(
    useOptionsStore,
    (state: OptionsValues) => state.infinity,
  );
  const [infinityValue, setInfinityValue] = useState<Boolean>();

  useEffect(() => {
    const item = localStorage.getItem("infinity-scroll");
    if (item) {
      const parsedItem = JSON.parse(item);
      const infinityValue = parsedItem.state.infinity;
      setInfinityValue(infinityValue);
    }
  }, [infinity]);

  const { ref, inView } = useInView();
  const [results, setResults] = useState<MovieCard[]>([]);

  const loadMoreData = () => {
    if (QUERY_FUNC && query) {
      QUERY_FUNC(page, query).then((res: any) => {
        setResults((prev) => [...prev, ...res]);
        page++;
      });
      return;
    }

    if (API_FUNC && genre_id) {
      API_FUNC(page, genre_id).then((res: any) => {
        setResults((prev) => [...prev, ...res]);
        page++;
      });
      return;
    }

    if (API_FUNC) {
      API_FUNC(page).then((res: any) => {
        setResults((prev) => [...prev, ...res]);
        page++;
      });
    }

    if (YEAR_FUNC && year) {
      YEAR_FUNC(page, year).then((res: any) => {
        setResults((prev) => [...prev, ...res]);
        page++;
      });
    }
  };

  useEffect(() => {
    if (inView && infinityValue) {
      loadMoreData();
    }
  }, [inView, infinityValue]);

  const handleClick = () => {
    if (!infinityValue) {
      loadMoreData();
    }
  };
  return (
    <>
      <div className="grid-area mt-2">{results}</div>
      <div ref={ref} className="mt-7 flex w-full items-center justify-center">
        <button
          onClick={handleClick}
          className="flex h-12 w-fit items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-violet-400 px-5 text-lg font-bold text-white"
        >
          Load More
        </button>
      </div>
    </>
  );
}
