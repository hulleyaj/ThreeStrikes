import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ThemeContext } from '../context';
import ThreeStrikes from '../threestrikes';
import ScreenContainerTheme from '../themes/ScreenContainer';
import HeaderTheme from '../themes/Header';

class ThreeStrikesScreen extends React.Component {
  static navigationOptions = props => (
    {
      title: 'Three Strikes',
      ...HeaderTheme({}, props.screenProps.theme)
    });

  render() {
    return <ThemeContext.Consumer>
      { theme =>
        <View style={styles(theme).container}>
          <ThreeStrikes />
        </View>
      }
    </ThemeContext.Consumer>;
  }
}

export default ThreeStrikesScreen;

const styles = theme => StyleSheet.create({
  ...ScreenContainerTheme(theme)
});
