import { useEffect, useState } from "react";
import { getEstimate } from "../utils/getEstimate";

export function useLocalStorageEstimate(key, { decimals = 0 } = {}) {
  const [label, setLabel] = useState("");
  const [value, setValue] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    try {
      const raw = localStorage.getItem(key);
      if (!raw) {
        if (!cancelled) return;
      }
      let obj;
      try {
        obj = JSON.parse(raw);
      } catch (e) {
        if (!cancelled) {
          setError(e);
        }
        return;
      }

      const { highestLabel, highestValue } = getEstimate(obj, decimals);
      if (!cancelled) {
        setLabel(highestLabel || "");
        setValue(highestValue);
      }
    } catch (e) {
      if (!cancelled) {
        setError(e);
      }
    }
    return () => {
      cancelled = true;
    };
  }, [key, decimals]);

  return {
    label,
    value,
    error,
  };
}
