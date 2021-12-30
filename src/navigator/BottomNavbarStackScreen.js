import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen, ProfileScreen} from '../screens/DashboardScreen';
import HomeStackScreen from './HomeStackScreen';
import ProfileStackScreen from './ProfileStackScreen';
import HomeIcon from '../assets/Images/svg/HomeIcon';
import {colors} from '../assets/colors';
import HomeGradientIcon from '../assets/Images/svg/HomeGradientIcon';
import ProfileIcon from '../assets/Images/svg/ProfileIcon';
import ActivityIcon from '../assets/Images/svg/ActivityIcon';
import CameraIcon from '../assets/Images/svg/CameraIcon';
import SearchIcon from '../assets/Images/svg/SearchIcon';
import ProfileGradientIcon from '../assets/Images/svg/ProfileGradientIcon';
import CameraGradientIcon from '../assets/Images/svg/CameraGradientIcon';
import ActivityGradientIcon from '../assets/Images/svg/ActivityGradientIcon';

const Tab = createBottomTabNavigator();

export default function BottomNavbarStackScreen({}) {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarShowLabel: false,
        tabBarIcon: ({focused, color, size}) => {
          const rn = route.name;

          switch (rn) {
            case 'HomeTab':
              return focused ? (
                <HomeGradientIcon width={size} height={size} />
              ) : (
                <HomeIcon width={size} height={size} colorIcon={color} />
              );
            case 'ProfileTab':
              return focused ? (
                <ProfileGradientIcon width={size} height={size} />
              ) : (
                <ProfileIcon colorIcon={color} width={size} height={size} />
              );
            case 'SearchTab':
              return (
                <SearchIcon colorIcon={color} width={size} height={size} />
              );
            case 'ActivityTab':
              return focused ? (
                <ActivityGradientIcon width={size} height={size} />
              ) : (
                <ActivityIcon colorIcon={color} width={size} height={size} />
              );
            case 'CameraTab':
              return focused ? (
                <CameraGradientIcon width={size} height={size} />
              ) : (
                <CameraIcon colorIcon={color} width={size} height={size} />
              );
            default:
              return <HomeIcon colorIcon={color} width={size} height={size} />;
          }
        },
      })}>
      <Tab.Screen
        name="HomeTab"
        component={HomeStackScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="ActivityTab"
        component={HomeStackScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="SearchTab"
        component={ProfileStackScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="CameraTab"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="ProfileTab"
        component={ProfileScreen}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
}
