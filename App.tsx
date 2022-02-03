import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Provider } from 'react-redux';
import { store } from './src/config/redux/app/store';

import { MainStackNavigation } from './src/utils/types/navigation';

import OnboardingStackScreen from './src/navigator/OnboardingStackScreen';
import SignupAndLoginStackScreen from './src/navigator/SignupAndLoginStackScreen';
import BottomNavbarStackScreen from './src/navigator/BottomNavbarStackScreen';
import WorkoutTrackerStackScreen from './src/navigator/WorkoutTrackerStackScreen';
import HomeStackScreen from './src/navigator/HomeStackScreen';
import { LoadProvider } from './src/config/LoaderContext/LoaderContext';

const Stack = createNativeStackNavigator<MainStackNavigation>();

export default function App() {
  return (
    <Provider store={store}>
      <LoadProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="OnboardingStackScreen">
            <Stack.Screen
              name="OnboardingStackScreen"
              component={OnboardingStackScreen}
              options={{ headerShown: false, animation: 'slide_from_right' }}
            />
            <Stack.Screen
              name="WorkoutTrackerStackScreen"
              component={WorkoutTrackerStackScreen}
              options={{ headerShown: false, animation: 'slide_from_right' }}
            />
            <Stack.Screen
              name="BottomNavbarStackScreen"
              component={BottomNavbarStackScreen}
              options={{ headerShown: false, animation: 'slide_from_right' }}
            />
            <Stack.Screen
              name="SignupAndLoginStackScreen"
              component={SignupAndLoginStackScreen}
              options={{ headerShown: false, animation: 'slide_from_right' }}
            />
            <Stack.Screen
              name="HomeStackScreen"
              component={HomeStackScreen}
              options={{ headerShown: false, animation: 'slide_from_right' }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </LoadProvider>
    </Provider>
  );
}
