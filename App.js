
import React from 'react';
import {createAppContainer} from react-navigation;
import {createStackNavigator} from react-navigation-stack;
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/home';
import DetailsScreen from './screens/Details';

export default function App() {
  return (
    <AppContainer/>
  );
}
const appStackNavigator = createStackNavigator(
  {
    Home:{
      screen:HomeScreen,
      navigationOptions:{
        headShown:false
      }
    },
    Details:{
      screen:DetailsScreen
    }
  },
  {
    intialRouteName:"Home"
  }
)
const AppContainer=createAppContainer(appStackNavigator);
