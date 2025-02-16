import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackType} from './navigationType';
import BottomNavigation from './BottomNavigation';
import InitialScreen from '@app/screens/InitialScreen/InitialScreen';
import MapScreen from '@app/screens/MapScreen/MapScreen';

type Props = {
  firstScreen?: string;
};

const Navigation = (props: Props) => {
  const {firstScreen} = props;
  const Stack: any = createNativeStackNavigator<RootStackType>();

  return (
    <Stack.Navigator
      initialRouteName={'BottomTabNav'}
      screenOptions={{headerShown: false, gestureEnabled: true}}>
      <Stack.Group>
        <Stack.Screen name={'InitialScreen'} component={InitialScreen} />
        <Stack.Screen name={'BottomTabNav'} component={BottomNavigation} />
        <Stack.Screen name={'MapScreen'} component={MapScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
