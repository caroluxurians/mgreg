import { Route } from "next";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const useUpdateUrlQuery = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  return (newParams: Record<string, string | number>, scroll: boolean = false) => {
    const paramsObject = new URLSearchParams(searchParams);
    Object.entries(newParams).forEach(([name, value]) => {
      if (value === "") paramsObject.delete(name);
      else paramsObject.set(name, String(value));
    });

    router.push(`${pathname}?${paramsObject.toString()}` as Route, { scroll });
  };
};

export default useUpdateUrlQuery;
