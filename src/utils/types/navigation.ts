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
  HomeTab: NavigatorScreenParams<HomeStackType>;
  ProfileTab: NavigatorScreenParams<ProfileStackType>;
  WorkoutTrackerTab: NavigatorScreenParams<WorkoutStackType>;
  SearchTab: undefined;
  CameraTab: undefined;
};

export type SignupAndLoginStackType = {
  RegisterAccountData: undefined;
  LoginScreen: undefined;
  ChooseYourGoals: undefined;
  SignupScreen: undefined;
  WelcomingScreen: undefined;
};

export type ProfileStackType = {
  ProfileScreen: undefined;
};

export type OnboardingStackType = {
  GetStarted: undefined;
  Onboarding1: undefined;
  Onboarding2: undefined;
  Onboarding3: undefined;
  Onboarding4: undefined;
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
};
