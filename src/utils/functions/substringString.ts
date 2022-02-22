export const substringString = (value: String) => {
  value = value.substring(0, 100);

  return value.substring(0, value.lastIndexOf(' '));
};
