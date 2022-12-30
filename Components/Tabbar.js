import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import SettingScreen from './SettingScreen';
import NewsItem from './NewsItem';
import Detail from './Detail';

const Tab = createBottomTabNavigator();
const Nav = createNativeStackNavigator({
  HomeScreen: { screen: HomeScreen },
  Detail: { screen: Detail },
})

export default function Tabbar() {
  return (

    <Tab.Navigator>

      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingScreen} />

    </Tab.Navigator>
  );
}


