import React from 'react';
import {
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';
import Icon from '../components/Icon';
import TabBar from '../components/TabBar';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import ThreeStrikesScreen from '../screens/threeStrikes/ThreeStrikesScreen';
import SettingsScreen from '../screens/settings/SettingsScreen';
import { LIGHT, DARK } from '../constants/Themes';
import Colors from '../constants/Colors';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = ({ screenProps }) => (
  {
    tabBarLabel: 'Home',
    tabBarIcon: ({ focused }) => (
      <Icon
        focused={ focused }
        name="info"
        screenProps={ screenProps }
        containerStyle={ { marginBottom: -3 } }
      />
    ),
  }
);

// name={
//   Platform.OS === 'ios'
//     ? `ios-information-circle${focused ? '' : '-outline'}`
//     : 'md-information-circle'
// }

const LinksStack = createStackNavigator({
  Links: LinksScreen
});

LinksStack.navigationOptions = ({ screenProps }) => (
  {
    tabBarLabel: 'Links',
    tabBarIcon: ({ focused }) => (
      <Icon
        focused={ focused }
        name="link"
        screenProps={ screenProps }
        containerStyle={ { marginBottom: -3 } }
      />
    ),
  }
);
// name={ Platform.OS === 'ios' ? 'ios-link' : 'md-link' }

//headerMode differs ios and android
const ThreeStrikesStack = createStackNavigator(
  {
    ThreeStrikes: ThreeStrikesScreen,
    Settings: SettingsScreen
  },
  {
    mode: 'modal',
    defaultNavigationOptions: props => {
      const { screenProps: { theme } } = props;

      return {
        ...headerStyles[theme],
      };
    }
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

export default createBottomTabNavigator({
  HomeStack,
  LinksStack,
  ThreeStrikesStack
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
