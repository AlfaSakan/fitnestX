export const upcomingData = [
  {
    name: 'Fullbody Workout',
    upcomingDate: new Date(),
    isActive: true,
  },
  {
    name: 'Upperbody Workout',
    upcomingDate: new Date(),
    isActive: false,
  },
];

export type workoutTrackerType = {
  name: string;
  exercises: string;
  minutes: string;
};

export const listWorkout: workoutTrackerType[] = [
  {
    name: 'Fullbody Workout',
    exercises: '11',
    minutes: '32',
  },
  {
    name: 'Upperbody Workout',
    exercises: '12',
    minutes: '40',
  },
  {
    name: 'AB Workout',
    exercises: '13',
    minutes: '20',
  },
];
