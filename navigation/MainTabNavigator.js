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
import ThreeStrikesScreen from '../screens/ThreeStrikesScreen';
import SettingsScreen from '../screens/SettingsScreen';
import { ThemeContext } from '../context';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
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
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
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

ThreeStrikesStack.navigationOptions = {
  tabBarLabel: 'Three Strikes',
  tabBarIcon: ({ focused }) =>
    <ThemeContext.Consumer>
      { theme =>
        <Icon
          name="tag"
          type="feather"
          {...IconsTheme(theme, focused)}
        />
    }
    </ThemeContext.Consumer>
};

export default createBottomTabNavigator({
  HomeStack,
  LinksStack,
  ThreeStrikesStack
});
