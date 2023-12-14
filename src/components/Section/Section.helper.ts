function calculateSectionWidth(items: string[]) {
  const longestItem = items.reduce((a, b) => (a.length > b.length ? a : b));
  const padding = 16;
  const wordWidth = 16;
  const iconWidth = 24;

  const longestItemWidth =
    longestItem.length * wordWidth + padding * 2 + iconWidth;
  return longestItemWidth;
}

export { calculateSectionWidth };
