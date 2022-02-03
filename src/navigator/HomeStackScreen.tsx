import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  ActivityTrackerScreen,
  CongratulationScreen,
  HomeScreen,
} from '../screens/DashboardScreen';
import { HomeStackType } from '../utils/types/navigation';
import { NotificationScreen } from '../screens/NotificationScreen';

const HomeStack = createNativeStackNavigator<HomeStackType>();

export default function HomeStackScreen({}) {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="ActivityTrackerScreen"
        component={ActivityTrackerScreen}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="CongratulationScreen"
        component={CongratulationScreen}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="NotificationScreen"
        component={NotificationScreen}
        options={{ headerShown: false }}
      />
    </HomeStack.Navigator>
  );
}
