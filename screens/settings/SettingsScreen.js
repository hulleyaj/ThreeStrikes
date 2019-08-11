import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import { inject, observer } from 'mobx-react';
import HeaderTheme from '../../themes/Header';
import ScreenContainerTheme from '../../themes/ScreenContainer';
import ThemePicker from './components/ThemePicker';

@inject('appStore')
@observer
class SettingsScreen extends React.Component {
  static navigationOptions = props => {
    const { screenProps: { theme } } = props;
    return {
      title: 'Settings',
      ...HeaderTheme(theme)
    };
  };

  render() {
    const { appStore } = this.props;

    return <View style={ styles(appStore.theme).container }>
      <ThemePicker { ...this.props } />
    </View>;
  }
}

SettingsScreen.propTypes = {
  appStore: PropTypes.object,
  theme: PropTypes.string
};

export default SettingsScreen;

const styles = theme => StyleSheet.create({
  ...ScreenContainerTheme(theme),
});
