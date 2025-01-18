import { useState, useEffect } from "react";
import { getItem, setItem } from "../utils/localStorage";

export function usePersistedState<T>(key: string, initialValue: T) {
  const [value, setValue] = useState(() => {
    const item = getItem(key);
    return (item as T) || initialValue;
  });

  useEffect(() => {
    setItem(key, value);
  }, [key, value]);

  return [value, setValue] as const;
}
