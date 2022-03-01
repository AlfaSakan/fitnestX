import { NavigatorScreenParams } from '@react-navigation/native';

import { workoutTrackerType, workoutType } from '../functions/datadummies';

export type WorkoutStackType = {
  WorkoutDetail1: {
    data: workoutTrackerType;
  };
  WorkoutDetail2: {
    data: workoutType;
  };
};

export type BottomNavbarStackType = {
  // HomeTab: NavigatorScreenParams<HomeStackType>;
  HomeTab: undefined;
  ProfileTab: NavigatorScreenParams<ProfileStackType>;
  WorkoutTrackerTab: NavigatorScreenParams<WorkoutStackType>;
  SearchTab: undefined;
  CameraTab: undefined;
};

export type SignupAndLoginStackType = {
  RegisterAccountData: {
    password: string;
  };
  LoginScreen: undefined;
  ChooseYourGoals: {
    password: string;
  };
  SignupScreen: undefined;
  WelcomingScreen: undefined;
};

export type ProfileStackType = {
  ProfileScreen: undefined;
};

export type OnboardingStackType = {
  LandingScreen: undefined;
  GetStarted: undefined;
  Onboarding1: undefined;
  Onboarding2: undefined;
  Onboarding3: undefined;
  Onboarding4: undefined;
};

export type MealPlannerStackType = {
  MealPlanner: undefined;
  CategoryMeal: undefined;
  MealDetail: undefined;
  MealSchedule: undefined;
};

export type SleepTrackerStackType = {
  AddAlarm: undefined;
  SleepTracker: undefined;
  SleepSchedule: undefined;
};

export type HomeStackType = {
  ActivityTrackerScreen: undefined;
  CongratulationScreen: undefined;
  NotificationScreen: undefined;
};

export type MainStackNavigation = {
  WorkoutTrackerStackScreen: NavigatorScreenParams<WorkoutStackType>;
  BottomNavbarStackScreen: NavigatorScreenParams<BottomNavbarStackType>;
  OnboardingStackScreen: NavigatorScreenParams<OnboardingStackType>;
  SignupAndLoginStackScreen: NavigatorScreenParams<SignupAndLoginStackType>;
  HomeStackScreen: NavigatorScreenParams<HomeStackType>;
  MealPlannerStackScreen: NavigatorScreenParams<MealPlannerStackType>;
  SleepTrackerStackType: NavigatorScreenParams<SleepTrackerStackType>;
};
