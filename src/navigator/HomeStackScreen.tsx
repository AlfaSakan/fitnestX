import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  ActivityTrackerScreen,
  CongratulationScreen,
  HomeScreen,
} from '../screens/DashboardScreen';
import { HomeStackType } from '../types/navigation';

const HomeStack = createNativeStackNavigator<HomeStackType>();

export default function HomeStackScreen({}) {
  return (
    <HomeStack.Navigator initialRouteName="HomeScreen">
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
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
    </HomeStack.Navigator>
  );
}