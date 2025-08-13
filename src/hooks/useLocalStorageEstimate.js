import { useEffect, useMemo, useState } from "react";
import { getEstimate } from "../utils/getEstimate";

export function useLocalStorageEstimate(key, { decimals = 2 } = {}) {
  const [label, setLabel] = useState("");
  const [value, setValue] = useState(null);
  const [listItem, setListItem] = useState([]); // [{label, value}, ...] descending
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    try {
      const raw = localStorage.getItem(key);
      if (!raw) return; // nothing stored yet

      let obj;
      try {
        obj = JSON.parse(raw);
      } catch (e) {
        if (!cancelled) setError(e);
        return;
      }

      const { percentages, highestLabel, highestValue } = getEstimate(
        obj,
        decimals,
      );

      if (cancelled) return;

      // Build descending array
      const sorted = Object.entries(percentages || {})
        .sort((a, b) => b[1] - a[1])
        .map(([lbl, val]) => ({ label: lbl, value: val }));

      setListItem(sorted);
      setLabel(highestLabel);
      setValue(highestValue);
    } catch (e) {
      if (!cancelled) setError(e);
    }

    return () => {
      cancelled = true;
    };
  }, [key, decimals]);

  return useMemo(
    () => ({ label, value, listItem, error }),
    [label, value, listItem, error],
  );
}
