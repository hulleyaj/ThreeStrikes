import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import { inject, observer } from 'mobx-react';
import ThemePicker from './components/ThemePicker';
import { LIGHT, DARK } from '../../constants/Themes'
import Colors from '../../constants/Colors';;

@inject('appStore')
@observer
class SettingsScreen extends React.Component {
  static navigationOptions = props => {
    return {
      title: 'Settings'
    };
  };

  render() {
    const { appStore: { theme } } = this.props;

    return <View style={ styles[theme] }>
      <ThemePicker { ...this.props } />
    </View>;
  }
}

SettingsScreen.propTypes = {
  appStore: PropTypes.object,
  theme: PropTypes.string
};

export default SettingsScreen;

const styles = StyleSheet.create({
  [LIGHT]: {
    flex: 1,
    backgroundColor: Colors.backgroundLight
  },
  [DARK]: {
    flex: 1,
    backgroundColor: Colors.backgroundDark
  }
});
