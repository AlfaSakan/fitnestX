import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {WorkoutDetail1, WorkoutDetail2, WorkoutTracker} from '../screens/WorkoutTrackerScreen';

const WorkoutTrackerStack = createNativeStackNavigator();

export default function WorkoutTrackerStackScreen({}) {
  return (
    <WorkoutTrackerStack.Navigator initialRouteName="SignupScreen">
      <WorkoutTrackerStack.Screen
        name="WorkoutTracker"
        component={WorkoutTracker}
        options={{headerShown: false}}
      />
      <WorkoutTrackerStack.Screen
        name="WorkoutDetail1"
        component={WorkoutDetail1}
        options={{headerShown: false}}
      />
      <WorkoutTrackerStack.Screen
        name="WorkoutDetail2"
        component={WorkoutDetail2}
        options={{headerShown: false}}
      />
    </WorkoutTrackerStack.Navigator>
  );
}
