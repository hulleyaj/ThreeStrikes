import React from 'react';
import PropTypes from 'prop-types';
import {
  View, StyleSheet, Text, TouchableOpacity
} from 'react-native';
import { observer } from 'mobx-react';
import { LIGHT, DARK } from '../../../constants/Themes';

@observer
class ThemePicker extends React.Component {
  render() {
    const { appStore } = this.props;

    return <View>
      <TouchableOpacity onPress={ () => { appStore.setTheme(LIGHT); } }>
        <Text>Light</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={ () => { appStore.setTheme(DARK); } }>
        <Text>Dark</Text>
      </TouchableOpacity>
    </View>;
  }
}

ThemePicker.propTypes = {
  appStore: PropTypes.object,
  setTheme: PropTypes.func
};

export default ThemePicker;
