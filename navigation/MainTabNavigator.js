import React from 'react';
import { Platform } from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';
import { Icon } from 'react-native-elements';
import IconsTheme from '../themes/Icons';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import ThreeStrikesScreen from '../screens/threeStrikes/ThreeStrikesScreen';
import SettingsScreen from '../screens/settings/SettingsScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={ focused }
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const LinksStack = createStackNavigator({
  Links: LinksScreen
});

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={ focused }
      name={ Platform.OS === 'ios' ? 'ios-link' : 'md-link' }
    />
  ),
};

const ThreeStrikesStack = createStackNavigator(
  {
    ThreeStrikes: ThreeStrikesScreen,
    Settings: SettingsScreen
  },
  { mode: 'modal' }
);

ThreeStrikesStack.navigationOptions = ({ screenProps }) => (
  {
    tabBarLabel: 'Three Strikes',
    tabBarIcon: ({ focused }) => (
      <Icon
        name="tag"
        type="feather"
        { ...IconsTheme(screenProps.theme, focused) }
      />
    )
  }
);

export default createBottomTabNavigator({
  HomeStack,
  LinksStack,
  ThreeStrikesStack
});
