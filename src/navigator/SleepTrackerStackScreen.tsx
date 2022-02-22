import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SleepTrackerStackType } from '../utils/types/navigation';
import { AddAlarm, SleepSchedule, SleepTracker } from '../screens/SleepTracker';

const SleepTrackerStack = createNativeStackNavigator<SleepTrackerStackType>();

const SleepTrackerStackScreen = () => {
  return (
    <SleepTrackerStack.Navigator initialRouteName="SleepTracker">
      <SleepTrackerStack.Screen
        name="SleepTracker"
        component={SleepTracker}
        options={{ headerShown: false, animation: 'slide_from_right' }}
      />
      <SleepTrackerStack.Screen
        name="SleepSchedule"
        component={SleepSchedule}
        options={{ headerShown: false, animation: 'slide_from_right' }}
      />
      <SleepTrackerStack.Screen
        name="AddAlarm"
        component={AddAlarm}
        options={{ headerShown: false, animation: 'slide_from_right' }}
      />
    </SleepTrackerStack.Navigator>
  );
};

export default SleepTrackerStackScreen;
