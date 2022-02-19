export const logicColors = (
  index: number,
  color1: (string | number)[],
  color2: (string | number)[]
) => {
  if (index % 2 === 0) return color2;

  return color1;
};
