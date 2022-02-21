export const sentenceCase = (value: string) => {
  value = value.toLowerCase();
  value = value[0].toUpperCase() + value.substring(1);

  return value;
};
