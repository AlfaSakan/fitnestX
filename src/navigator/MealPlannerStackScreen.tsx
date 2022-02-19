import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MealPlannerStackType } from '../utils/types/navigation';
import { CategoryMeal, MealDetail, MealPlannerScreen } from '../screens/MealPlanner';

const MealPlannerStack = createNativeStackNavigator<MealPlannerStackType>();

const MealPlannerStackScreen = () => {
  return (
    <MealPlannerStack.Navigator initialRouteName="MealPlanner">
      <MealPlannerStack.Screen
        name="MealPlanner"
        component={MealPlannerScreen}
        options={{ headerShown: false, animation: 'slide_from_right' }}
      />
      <MealPlannerStack.Screen
        name="CategoryMeal"
        component={CategoryMeal}
        options={{ headerShown: false, animation: 'slide_from_right' }}
      />
      <MealPlannerStack.Screen
        name="MealDetail"
        component={MealDetail}
        options={{ headerShown: false, animation: 'slide_from_right' }}
      />
    </MealPlannerStack.Navigator>
  );
};

export default MealPlannerStackScreen;
