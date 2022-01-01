export interface WaterInTakeDataInterface {
  fromTime: string;
  untilTime: string;
  amount: number;
}

export const waterInTakeDummy: WaterInTakeDataInterface[] = [
  {
    fromTime: '6am',
    untilTime: '8am',
    amount: 600,
  },
  {
    fromTime: '9am',
    untilTime: '11am',
    amount: 500,
  },
  {
    fromTime: '11am',
    untilTime: '2pm',
    amount: 1000,
  },
  {
    fromTime: '2pm',
    untilTime: '4pm',
    amount: 700,
  },
  {
    fromTime: '4pm',
    untilTime: '6pm',
    amount: 900,
  },
];
