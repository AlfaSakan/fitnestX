import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ProfileScreen } from '../screens/DashboardScreen';
import { ProfileStackType } from '../utils/types/navigation';

const ProfileStack = createNativeStackNavigator<ProfileStackType>();

export default function ProfileStackScreen({}) {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
    </ProfileStack.Navigator>
  );
}
