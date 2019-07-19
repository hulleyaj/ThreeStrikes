import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import ThemePicker from './components/ThemePicker';

class Settings extends React.Component {
  render() {
    return <View>
      <ThemePicker />
    </View>;
  }
}

export default Settings;
