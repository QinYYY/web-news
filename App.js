
import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Tabbar from './Components/Tabbar';
import HomeScreen from './Components/HomeScreen';
import SettingScreen from './Components/SettingScreen';


export default function App() {
  return (
    <NavigationContainer>
      <Tabbar></Tabbar>
    </NavigationContainer>
  );
}
