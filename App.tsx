import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NotificationScreen from './src/screens/NotificationScreen/NotificationScreen';
import OnboardingStackScreen from './src/navigator/OnboardingStackScreen';
import SignupAndLoginStackScreen from './src/navigator/SignupAndLoginStackScreen';
import BottomNavbarStackScreen from './src/navigator/BottomNavbarStackScreen';
import WorkoutTrackerStackScreen from './src/navigator/WorkoutTrackerStackScreen';
import { MainStackNavigation } from './src/types/navigation';

const Stack = createNativeStackNavigator<MainStackNavigation>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="WorkoutTrackerStackScreen"
          component={WorkoutTrackerStackScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BottomNavbarStackScreen"
          component={BottomNavbarStackScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OnboardingStackScreen"
          component={OnboardingStackScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignupAndLoginStackScreen"
          component={SignupAndLoginStackScreen}
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen
          name="HomeStackScreen"
          component={HomeStackScreen}
          options={{headerShown: false}}
        /> */}
        <Stack.Screen
          name="NotificationScreen"
          component={NotificationScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
