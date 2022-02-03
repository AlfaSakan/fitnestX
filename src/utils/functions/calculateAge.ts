import { yearInMiliSecond } from './timeUtils';

export const calculateAge = (date: Date) => {
  const birthOfDate = date.getTime();
  const nowInMiliSecond = new Date().getTime();

  return Math.round((nowInMiliSecond - birthOfDate) / yearInMiliSecond);
};
