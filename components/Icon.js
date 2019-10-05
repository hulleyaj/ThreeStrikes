import React from 'react';
import PropTypes from 'prop-types';
import { Feather } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import { LIGHT, DARK } from '../constants/Themes';

const Icon = ({
  name,
  screenProps,
  focused,
  ...additionalProps
}) => (<Feather
  name={ name }
  size={ 24 }
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
