/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck
//* Packages Imports */
import { useRef } from "react";

export default function useDebounce<T extends (...args: any[]) => any>(
  fn: T,
  delay: number = 300
) {
  const timer = useRef<NodeJS.Timeout | null>(null);

  return function (...args: Parameters<T>) {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    timer.current = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}
