import { workoutTrackerType } from '../screens/WorkoutTrackerScreen/dummyData';
import { workoutType } from '../screens/WorkoutTrackerScreen/WorkoutDetail1';

export type WorkoutStackType = {
  WorkoutTracker: undefined;
  WorkoutDetail1: {
    data: workoutTrackerType;
  };
  WorkoutDetail2: {
    data: workoutType;
  };
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
  HomeScreen: undefined;
};

export type MainStackNavigation = {
  WorkoutTrackerStackScreen: undefined;
  BottomNavbarStackScreen: undefined;
  OnboardingStackScreen: undefined;
  SignupAndLoginStackScreen: undefined;
  NotificationScreen: undefined;
}
