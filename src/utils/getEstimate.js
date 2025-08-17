export function getEstimate(probabilities, decimals = 2) {
  const percentages = {};
  let highestLabel = null;
  let highestValue = -Infinity;

  if (!probabilities || typeof probabilities !== "object") {
    return { percentages, highestLabel, highestValue: null };
  }

  for (const [label, raw] of Object.entries(probabilities)) {
    if (typeof raw !== "number" || isNaN(raw)) continue;
    const pct = Number((raw * 100).toFixed(decimals));
    percentages[label] = pct;
    if (pct > highestValue) {
      highestValue = pct;
      highestLabel = label;
    }
  }

  return {
    percentages,
    highestLabel,
    highestValue: highestValue === -Infinity ? null : highestValue,
  };
}
