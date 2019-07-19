import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import { ThemeContext } from '../context';
import ThreeStrikes from '../threestrikes';
import ScreenContainerTheme from '../themes/ScreenContainer';
import HeaderTheme from '../themes/Header';
import IconsTheme from '../themes/Icons';

class ThreeStrikesScreen extends React.Component {
  static navigationOptions = props => {
    const { screenProps: { theme }, navigation } = props;
    return {
      title: 'Three Strikes',
      ...HeaderTheme(theme),
      headerRight: (
        <Icon
          name="settings"
          type="feather"
          {...IconsTheme(theme)}
          containerStyle={{ paddingRight: 10 }}
          onPress={() => navigation.navigate('Settings')}
        />
      )
    };
  };

  render() {
    return <ThemeContext.Consumer>
      {theme =>
        <View style={styles(theme).container}>
          <ThreeStrikes />
        </View>
      }
    </ThemeContext.Consumer>;
  }
}

export default ThreeStrikesScreen;

const styles = theme => StyleSheet.create({
  ...ScreenContainerTheme(theme),
});
