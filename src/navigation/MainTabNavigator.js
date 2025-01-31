import React from 'react';
import {
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';
import Icon from '../components/Icon';
import TabBar from '../components/TabBar';
import ThreeStrikesScreen from '../screens/threeStrikes/ThreeStrikesScreen';
import ItemPickerScreen from '../screens/itemPicker/ItemPickerScreen';
import CounterScreen from '../screens/counter/CounterScreen';
import SettingsScreen from '../screens/settings/SettingsScreen';
import NativeScreen from '../screens/native/NativeScreen';
import { LIGHT, DARK } from '../constants/Themes';
import Colors from '../constants/Colors';

// name={
//   Platform.OS === 'ios'
//     ? `ios-information-circle${focused ? '' : '-outline'}`
//     : 'md-information-circle'
// }
// name={ Platform.OS === 'ios' ? 'ios-link' : 'md-link' }

// headerMode differs ios and android
const ThreeStrikesStack = createStackNavigator(
  {
    ThreeStrikes: ThreeStrikesScreen,
    ItemPicker: ItemPickerScreen
  },
  {
    mode: 'modal',
    defaultNavigationOptions: ({ screenProps: { theme } }) => headerStyles[theme]
  }
);

ThreeStrikesStack.navigationOptions = ({ screenProps }) => (
  {
    tabBarLabel: 'Three Strikes',
    tabBarIcon: ({ focused }) => (
      <Icon
        focused={ focused }
        name="tag"
        screenProps={ screenProps }
        containerStyle={ { marginBottom: -3 } }
      />
    )
  }
);

const CounterStack = createStackNavigator(
  {
    Counter: CounterScreen
  },
  {
    defaultNavigationOptions: ({ screenProps: { theme } }) => headerStyles[theme]
  }
);

CounterStack.navigationOptions = ({ screenProps }) => (
  {
    tabBarLabel: 'Counter',
    tabBarIcon: ({ focused }) => (
      <Icon
        focused={ focused }
        name="plus"
        screenProps={ screenProps }
        containerStyle={ { marginBottom: -3 } }
      />
    )
  }
);

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen
  },
  {
    defaultNavigationOptions: ({ screenProps: { theme } }) => headerStyles[theme]
  }
);

SettingsStack.navigationOptions = ({ screenProps }) => (
  {
    tabBarLabel: 'Settings',
    tabBarIcon: ({ focused }) => (
      <Icon
        focused={ focused }
        name="settings"
        screenProps={ screenProps }
        containerStyle={ { marginBottom: -3 } }
      />
    )
  }
);

const NativeStack = createStackNavigator(
  {
    Native: NativeScreen
  },
  {
    defaultNavigationOptions: ({ screenProps: { theme } }) => headerStyles[theme]
  }
);

NativeStack.navigationOptions = ({ screenProps }) => (
  {
    tabBarLabel: 'Native',
    tabBarIcon: ({ focused }) => (
      <Icon
        focused={ focused }
        name="package"
        screenProps={ screenProps }
        containerStyle={ { marginBottom: -3 } }
      />
    )
  }
);

export default createBottomTabNavigator({
  ThreeStrikesStack,
  CounterStack,
  SettingsStack,
  NativeStack
},
{
  tabBarComponent: props => <TabBar { ...props } />
});

const headerStyles = {
  [LIGHT]: {
    headerStyle: {
      backgroundColor: Colors.headerLight
    },
    headerTintColor: Colors.textColorLight
  },
  [DARK]: {
    headerStyle: {
      backgroundColor: Colors.headerDark
    },
    headerTintColor: Colors.textColorDark
  }
};
