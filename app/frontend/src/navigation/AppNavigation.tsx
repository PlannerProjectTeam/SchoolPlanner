/**
 * Root of the application.
 * @author PlannerProjectTeam
 * @version 0.1.0 02/01/25
 */

import React from 'react';

import {
  StyleSheet,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Calendar } from '../screens/Calendar';
import { Profile } from '../screens/Profile';
import { EditTask } from '../screens/EditTask';
import { EditEvent } from '../screens/EditEvent';

export type RootStackParams = {
  Calendar : undefined,
  Profile : undefined,
  EditTask: undefined,
  EditEvent : undefined,
}

const Stack = createNativeStackNavigator<RootStackParams>();

export const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Calendar'>
        <Stack.Screen name="Calendar" component={Calendar}/>
        <Stack.Screen name="EditEvent" component={EditEvent}/>
        <Stack.Screen name="EditTask" component={EditTask}/>
        <Stack.Screen name="Profile" component={Profile}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
