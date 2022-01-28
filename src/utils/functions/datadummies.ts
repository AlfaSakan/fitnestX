import { ImageSourcePropType } from 'react-native';
import { images } from '../../assets/images';

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

export const latestWorkout = [
  {
    type: 'Fullbody Workout',
    caloriesBurn: '180',
    time: '20',
    progress: 0.4,
  },
  {
    type: 'Lowerbody Workout',
    caloriesBurn: '200',
    time: '30',
    progress: 0.55,
  },
  {
    type: 'Ab Workout',
    caloriesBurn: '150',
    time: '20',
    progress: 0.3,
  },
];

type workoutArrayType = {
  workout: workoutType[];
}[];

export interface workoutType {
  name: string;
  time: string;
  repetition: string;
  image: ImageSourcePropType;
  difficulty: 'easy' | 'medium' | 'hard';
  description: string;
  calories: string;
}

const dataExercises: workoutArrayType = [
  {
    workout: [
      {
        name: 'Warm Up',
        time: '5 minutes',
        repetition: '',
        image: images.vectorExercises,
        difficulty: 'easy',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pharetra odio eu finibus consequat. Mauris sed libero a nibh mollis sollicitudin. Phasellus at sem sed justo ultricies dignissim. Vivamus at augue ultricies quam efficitur tristique in id est. Suspendisse viverra, turpis placerat suscipit mattis, purus ex mattis metus, ut finibus arcu eros ut nunc. Suspendisse potenti.',
        calories: '390',
      },
      {
        name: 'Jumping Jack',
        time: '',
        repetition: '12',
        image: images.vectorExercises,
        difficulty: 'easy',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pharetra odio eu finibus consequat. Mauris sed libero a nibh mollis sollicitudin. Phasellus at sem sed justo ultricies dignissim. Vivamus at augue ultricies quam efficitur tristique in id est. Suspendisse viverra, turpis placerat suscipit mattis, purus ex mattis metus, ut finibus arcu eros ut nunc. Suspendisse potenti.',
        calories: '390',
      },
      {
        name: 'Skipping',
        time: '',
        repetition: '15',
        image: images.vectorExercises,
        difficulty: 'easy',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pharetra odio eu finibus consequat. Mauris sed libero a nibh mollis sollicitudin. Phasellus at sem sed justo ultricies dignissim. Vivamus at augue ultricies quam efficitur tristique in id est. Suspendisse viverra, turpis placerat suscipit mattis, purus ex mattis metus, ut finibus arcu eros ut nunc. Suspendisse potenti.',
        calories: '390',
      },
    ],
  },
  {
    workout: [
      {
        name: 'Warm Up',
        time: '5 minutes',
        repetition: '',
        image: images.vectorExercises,
        difficulty: 'easy',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pharetra odio eu finibus consequat. Mauris sed libero a nibh mollis sollicitudin. Phasellus at sem sed justo ultricies dignissim. Vivamus at augue ultricies quam efficitur tristique in id est. Suspendisse viverra, turpis placerat suscipit mattis, purus ex mattis metus, ut finibus arcu eros ut nunc. Suspendisse potenti.',
        calories: '390',
      },
      {
        name: 'Jumping Jack',
        time: '',
        repetition: '12',
        image: images.vectorExercises,
        difficulty: 'easy',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pharetra odio eu finibus consequat. Mauris sed libero a nibh mollis sollicitudin. Phasellus at sem sed justo ultricies dignissim. Vivamus at augue ultricies quam efficitur tristique in id est. Suspendisse viverra, turpis placerat suscipit mattis, purus ex mattis metus, ut finibus arcu eros ut nunc. Suspendisse potenti.',
        calories: '390',
      },
      {
        name: 'Skipping',
        time: '',
        repetition: '15',
        image: images.vectorExercises,
        difficulty: 'easy',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pharetra odio eu finibus consequat. Mauris sed libero a nibh mollis sollicitudin. Phasellus at sem sed justo ultricies dignissim. Vivamus at augue ultricies quam efficitur tristique in id est. Suspendisse viverra, turpis placerat suscipit mattis, purus ex mattis metus, ut finibus arcu eros ut nunc. Suspendisse potenti.',
        calories: '390',
      },
    ],
  },
  {
    workout: [
      {
        name: 'Warm Up',
        time: '5 minutes',
        repetition: '',
        image: images.vectorExercises,
        difficulty: 'easy',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pharetra odio eu finibus consequat. Mauris sed libero a nibh mollis sollicitudin. Phasellus at sem sed justo ultricies dignissim. Vivamus at augue ultricies quam efficitur tristique in id est. Suspendisse viverra, turpis placerat suscipit mattis, purus ex mattis metus, ut finibus arcu eros ut nunc. Suspendisse potenti.',
        calories: '390',
      },
      {
        name: 'Jumping Jack',
        time: '',
        repetition: '12',
        image: images.vectorExercises,
        difficulty: 'easy',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pharetra odio eu finibus consequat. Mauris sed libero a nibh mollis sollicitudin. Phasellus at sem sed justo ultricies dignissim. Vivamus at augue ultricies quam efficitur tristique in id est. Suspendisse viverra, turpis placerat suscipit mattis, purus ex mattis metus, ut finibus arcu eros ut nunc. Suspendisse potenti.',
        calories: '390',
      },
      {
        name: 'Skipping',
        time: '',
        repetition: '15',
        image: images.vectorExercises,
        difficulty: 'easy',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pharetra odio eu finibus consequat. Mauris sed libero a nibh mollis sollicitudin. Phasellus at sem sed justo ultricies dignissim. Vivamus at augue ultricies quam efficitur tristique in id est. Suspendisse viverra, turpis placerat suscipit mattis, purus ex mattis metus, ut finibus arcu eros ut nunc. Suspendisse potenti.',
        calories: '390',
      },
    ],
  },
];

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

export interface workoutTrackerType {
  name: string;
  exercises: string;
  minutes: string;
  listExercise: workoutArrayType;
}

export const listWorkout: workoutTrackerType[] = [
  {
    name: 'Fullbody Workout',
    exercises: '11',
    minutes: '32',
    listExercise: dataExercises,
  },
  {
    name: 'Upperbody Workout',
    exercises: '12',
    minutes: '40',
    listExercise: dataExercises,
  },
  {
    name: 'AB Workout',
    exercises: '13',
    minutes: '20',
    listExercise: dataExercises,
  },
];
