import { useEffect, useMemo, useState } from "react";
import { getEstimate } from "../utils/getEstimate";

export function useLocalStorageEstimate(key, subKey, { decimals = 2 } = {}) {
  const [label, setLabel] = useState("");
  const [value, setValue] = useState(null);
  const [listItem, setListItem] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    try {
      const raw = localStorage.getItem(key);
      if (!raw) return;

      let obj;
      try {
        obj = JSON.parse(raw);
      } catch (e) {
        if (!cancelled) setError(e);
        return;
      }

      // Pick the relevant sub-object
      const subObj = obj[subKey];
      if (!subObj) {
        if (!cancelled) setError(new Error(`Missing subKey: ${subKey}`));
        return;
      }

      const { percentages, highestLabel, highestValue } = getEstimate(
        subObj,
        decimals,
      );

      if (cancelled) return;

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
  }, [key, subKey, decimals]);

  return useMemo(
    () => ({ label, value, listItem, error }),
    [label, value, listItem, error],
  );
}
