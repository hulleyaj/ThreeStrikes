import React from 'react';
import PropTypes from 'prop-types';
import { Icon as NativeIcon } from 'react-native-elements';
import Colors from '../constants/Colors';
import { LIGHT, DARK } from '../constants/Themes';

const Icon = ({
  name,
  screenProps,
  focused,
  ...additionalProps
}) => (<NativeIcon
  type="feather"
  name={ name }
  { ...styles(focused)[screenProps.theme] }
  { ...additionalProps }
/>);

Icon.propTypes = {
  focused: PropTypes.bool,
  screenProps: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired
};

export default Icon;

const styles = focused => ({
  [LIGHT]: {
    color: focused ? Colors.iconFocused : Colors.iconColorLight
  },
  [DARK]: {
    color: focused ? Colors.iconFocused : Colors.iconColorDark
  }
});
