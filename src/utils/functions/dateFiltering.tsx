export const dateHandler = (value: string) => {
  while (value.includes('-')) {
    value = value.replace('-', '');
  }

  if (value.length > 4) {
    value = `${value.substring(0, 2)}-${value.substring(2, 4)}-${value.substring(4, 8)}`;
  } else if (value.length > 2) {
    value = `${value.substring(0, 2)}-${value.substring(2, 4)}`;
  }

  return value;
};
