import React from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, StyleSheet, TouchableOpacity, Animated
} from 'react-native';
import { observer } from 'mobx-react';
import { Feather } from '@expo/vector-icons';
import Colors from '../../../constants/Colors';
import { STRIKE } from '../../../stores/ThreeStrikesStore/ObservableThreeStrikesStore';

const Puck = ({ threeStrikesStore: { currentPuck } }) => {
  const backgroundColor = currentPuck === STRIKE ? Colors.enabledRedButton : Colors.enabledGreenButton;
  const [fadeAnim] = React.useState(new Animated.Value(0));

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 100,
    }).start();
  }, []);

  return <Animated.View style={ { ...styles.puck, backgroundColor, opacity: fadeAnim } }>
    <Text style={ styles.currentPuckText }>
      { currentPuck }
    </Text>
  </Animated.View>;
};

@observer
class PuckBasket extends React.Component {
  pulledStrike = ({ currentPuck }) => currentPuck === STRIKE;

  onButtonClick(threeStrikes) {
    if (this.pulledStrike(threeStrikes)) {
      threeStrikes.popCurrentPuck();
      threeStrikes.pullPuckFromPuckBasket();
    } else if (!threeStrikes.currentPuck) {
      threeStrikes.pullPuckFromPuckBasket();
    }
  }

  render() {
    const { threeStrikesStore } = this.props;
    const { currentPuck } = threeStrikesStore;
    // const buttonText = this.pulledStrike(threeStrikesStore) ? 'discard strike' : 'pull puck from puckBasket';
    // const buttonColor = (!threeStrikesStore.currentPuck || this.pulledStrike(threeStrikesStore)) ? 'rgb(22,186,232)' : 'rgb(150,150,150)';

    return <View style={ styles.puckBasket }>
      {
        currentPuck
        && <Puck { ...this.props } />
      }
      <TouchableOpacity
        style={ styles.basketButton }
        onPress={ () => this.onButtonClick(threeStrikesStore) }
      >
        <Feather
          name="shopping-bag"
          size={ 100 }
        />
      </TouchableOpacity>
    </View>;
  }
}

Puck.propTypes = {
  threeStrikesStore: PropTypes.shape({
    currentPuck: PropTypes.string
  })
};

PuckBasket.propTypes = {
  threeStrikesStore: PropTypes.object
};

export default PuckBasket;

const styles = StyleSheet.create({
  puckBasket: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 20
  },
  basketButton: {
    marginTop: 20
  },
  puck: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'solid',
    borderColor: 'grey',
    borderWidth: 2
  },
  currentPuckText: {
    fontSize: 100,
    marginTop: -10,
    color: 'white'
  }
});
