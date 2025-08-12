import { useEffect, useState } from "react";
import { getEstimate } from "../utils/getEstimate";

export function useLocalStorageEstimate(key, { decimals = 0 } = {}) {
  const [label, setLabel] = useState("");
  const [value, setValue] = useState(null);
  const [percentages, setPercentages] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    try {
      const raw = localStorage.getItem(key);
      if (!raw) {
        if (!cancelled) setLoading(false);
        return;
      }
      let obj;
      try {
        obj = JSON.parse(raw);
      } catch (e) {
        if (!cancelled) {
          setError(e);
          setLoading(false);
        }
        return;
      }

      const { percentages, highestLabel, highestValue } = getEstimate(
        obj,
        decimals,
      );
      if (!cancelled) {
        setLabel(highestLabel || "");
        setValue(highestValue);
        setPercentages(percentages);
        setLoading(false);
      }
    } catch (e) {
      if (!cancelled) {
        setError(e);
        setLoading(false);
      }
    }
    return () => {
      cancelled = true;
    };
  }, [key, decimals]);

  return {
    label,
    value,
    percentages,
    loading,
    error,
  };
}
