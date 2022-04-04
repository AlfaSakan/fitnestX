import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LinearGradient from 'react-native-linear-gradient';

import { HomeScreen, ProfileScreen } from '../screens/DashboardScreen';
import HomeStackScreen from './HomeStackScreen';
import ProfileStackScreen from './ProfileStackScreen';
import { WorkoutTracker } from '../screens/WorkoutTrackerScreen';

import { BottomNavbarStackType } from '../utils/types/navigation';

import {
  ActivityGradientIcon,
  ActivityIcon,
  CameraGradientIcon,
  CameraIcon,
  HomeGradientIcon,
  HomeIcon,
  ProfileGradientIcon,
  ProfileIcon,
  SearchIcon,
} from '../assets/Images/svg';
import { colors } from '../assets/colors';

const Tab = createBottomTabNavigator<BottomNavbarStackType>();

export default function BottomNavbarStackScreen({}) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarIcon: ({ focused, color, size }) => {
          const rn = route.name;

          switch (rn) {
            case 'HomeTab':
              return focused ? (
                <DotBottomNavbar testID="home tab">
                  <HomeGradientIcon width={size} height={size} />
                </DotBottomNavbar>
              ) : (
                <HomeIcon width={size} height={size} colorIcon={color} />
              );
            case 'ProfileTab':
              return focused ? (
                <DotBottomNavbar testID="profile tab">
                  <ProfileGradientIcon width={size} height={size} />
                </DotBottomNavbar>
              ) : (
                <ProfileIcon colorIcon={color} width={size} height={size} />
              );
            case 'SearchTab':
              return <SearchIcon colorIcon={color} width={size} height={size} />;
            case 'WorkoutTrackerTab':
              return focused ? (
                <DotBottomNavbar>
                  <ActivityGradientIcon width={size} height={size} />
                </DotBottomNavbar>
              ) : (
                <ActivityIcon colorIcon={color} width={size} height={size} />
              );
            case 'CameraTab':
              return focused ? (
                <DotBottomNavbar>
                  <CameraGradientIcon width={size} height={size} />
                </DotBottomNavbar>
              ) : (
                <CameraIcon colorIcon={color} width={size} height={size} />
              );
            default:
              return <HomeIcon colorIcon={color} width={size} height={size} />;
          }
        },
      })}
    >
      <Tab.Screen name="HomeTab" component={HomeScreen} options={{ headerShown: false }} />
      <Tab.Screen
        name="WorkoutTrackerTab"
        component={WorkoutTracker}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="SearchTab" component={ProfileScreen} options={{ headerShown: false }} />
      <Tab.Screen name="CameraTab" component={HomeScreen} options={{ headerShown: false }} />
      <Tab.Screen name="ProfileTab" component={ProfileScreen} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}

interface DotBottomNavbarProps {
  children: React.ReactNode;
  testID?: string;
}

const DotBottomNavbar: React.FC<DotBottomNavbarProps> = ({ children, testID }) => {
  return (
    <View testID={testID} style={styles.dotContainer}>
      {children}
      <LinearGradient colors={colors.purpleLinear} style={styles.dotStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  dotContainer: {
    alignItems: 'center',
  },
  dotStyle: {
    width: 4,
    height: 4,
    borderRadius: 2,
    marginTop: 3,
  },
});
