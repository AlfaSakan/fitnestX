import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { WorkoutDetail1, WorkoutDetail2, WorkoutTracker } from '../screens/WorkoutTrackerScreen';
import { WorkoutStackType } from '../utils/types/navigation';

const WorkoutTrackerStack = createNativeStackNavigator<WorkoutStackType>();

export default function WorkoutTrackerStackScreen({}) {
  return (
    <WorkoutTrackerStack.Navigator>
      <WorkoutTrackerStack.Screen
        name="WorkoutDetail1"
        component={WorkoutDetail1}
        options={{ headerShown: false }}
      />
      <WorkoutTrackerStack.Screen
        name="WorkoutDetail2"
        component={WorkoutDetail2}
        options={{ headerShown: false }}
      />
    </WorkoutTrackerStack.Navigator>
  );
}
