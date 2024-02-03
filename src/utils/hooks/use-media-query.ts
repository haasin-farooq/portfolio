import { useEffect, useState } from "react";

export enum Breakpoints {
  SM = "(min-width: 640px)",
  MD = "(min-width: 768px)",
  LG = "(min-width: 1024px)",
  XL = "(min-width: 1280px)",
  "2XL" = "(min-width: 1536px)",
}

export const useMediaQuery = (query: Breakpoints, fallback = true): boolean => {
  const [matches, setMatches] = useState<boolean>();

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [query]);

  return matches ?? fallback;
};
