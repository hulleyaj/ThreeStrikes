import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ThemeContext } from '../context';
import HeaderTheme from '../themes/Header';
import ScreenContainerTheme from '../themes/ScreenContainer';
import Settings from '../settings';

class SettingsScreen extends React.Component {
  static navigationOptions = props => {
    const { screenProps: { theme } } = props;
    return {
      title: 'Settings',
      ...HeaderTheme(theme)
    };
  };

  render() {
    return <ThemeContext.Consumer>
      {theme =>
        <View style={styles(theme).container}>
          <Settings />
        </View>
      }
    </ThemeContext.Consumer>;
  }
}

export default SettingsScreen;

const styles = theme => StyleSheet.create({
  ...ScreenContainerTheme(theme),
});
