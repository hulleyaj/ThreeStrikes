import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import { inject } from 'mobx-react';
import ReactCounter from './components/ReactCounter';
import { LIGHT, DARK } from '../../constants/Themes';
import Colors from '../../constants/Colors';
import MobXCounter from './components/MobXCounter';

@inject('counterStore')
class CounterScreen extends React.Component {
  static navigationOptions = () => ({
    title: 'Counter'
  });

  render() {
    const { screenProps: { theme } } = this.props;

    return <View style={ StyleSheet.flatten([styles.container, styles[theme]]) }>
      <ReactCounter
        { ...this.props }
        counterStyles={ counterStyles }
        counterTextStyles={ counterTextStyles }
      />
      <MobXCounter
        { ...this.props }
        counterStyles={ counterStyles }
        counterTextStyles={ counterTextStyles }
      />
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

const counterStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  counterContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: Colors.enabledGreenButton,
    borderRadius: 5,
    width: 50,
    height: 50,
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 36,
    color: Colors.textColorLight
  }
});

const counterTextStyles = StyleSheet.create({
  [LIGHT]: {
    marginLeft: 20,
    marginRight: 20,
    fontSize: 36,
    color: Colors.textColorLight
  },
  [DARK]: {
    marginLeft: 20,
    marginRight: 20,
    fontSize: 36,
    color: Colors.textColorDark
  }
});
