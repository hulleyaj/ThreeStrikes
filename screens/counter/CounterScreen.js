import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import { inject } from 'mobx-react';
import ReactCounter from './components/ReactCounter';
import { LIGHT, DARK } from '../../constants/Themes';
import Colors from '../../constants/Colors';

@inject('counterStore')
class CounterScreen extends React.Component {
  static navigationOptions = () => ({
    title: 'Counter'
  });

  render() {
    const { screenProps: { theme } } = this.props;

    return <View style={ StyleSheet.flatten([styles.container, styles[theme]]) }>
      <ReactCounter { ...this.props } />
    </View>;
  }
}

CounterScreen.propTypes = {
  screenProps: PropTypes.shape({
    theme: PropTypes.string
  })
};

export default CounterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  [LIGHT]: {
    backgroundColor: Colors.backgroundLight
  },
  [DARK]: {
    backgroundColor: Colors.backgroundDark
  }
});
