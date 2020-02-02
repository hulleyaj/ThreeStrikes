import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import { BottomTabBar } from 'react-navigation';
import Colors from '../constants/Colors';
import { LIGHT, DARK } from '../constants/Themes';

const TabBar = props => {
  const { screenProps: { theme } } = props;

  return <BottomTabBar { ...props } style={ styles[theme] } />;
};

TabBar.propTypes = {
  screenProps: PropTypes.shape({
    theme: PropTypes.string
  })
};

export default TabBar;

const styles = StyleSheet.create({
  [LIGHT]: {
    backgroundColor: Colors.tabBarLight
  },
  [DARK]: {
    backgroundColor: Colors.tabBarDark,
    borderTopColor: Colors.gray
  }
});
