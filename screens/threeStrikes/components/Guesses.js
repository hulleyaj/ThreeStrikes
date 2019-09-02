import React from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, StyleSheet, TouchableOpacity
} from 'react-native';
import { observer } from 'mobx-react';
import { EMPTY, STRIKE } from '../../../stores/ThreeStrikesStore/ObservableThreeStrikesStore';
import Colors from '../../../constants/Colors';

@observer
class Guesses extends React.Component {
  renderGuesses = ({ correctGuesses, takeGuess, pulledPuck }) =>
    correctGuesses.map((guess, index) => {
      const guessText = guess !== EMPTY ? guess : ' ';
      const isDisabled = pulledPuck === EMPTY || pulledPuck === STRIKE;
      const backgroundColor = isDisabled ? styles.guessDisabled : styles.guessEnabled;

      return <TouchableOpacity
        key={ index }
        style={ StyleSheet.flatten([styles.guess, backgroundColor]) }
        onPress={ () => takeGuess(index) }
        disabled={ isDisabled }
      >
        <Text style={ styles.guessText }>{ guessText }</Text>
      </TouchableOpacity>;
    });

  render() {
    const { threeStrikesStore } = this.props;

    return <View style={ styles.guesses }>
      { this.renderGuesses(threeStrikesStore) }
    </View>;
  }
}

Guesses.propTypes = {
  threeStrikesStore: PropTypes.object
};

export default Guesses;

const styles = StyleSheet.create({
  guesses: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: '10%'
  },
  guess: {
    borderRadius: 5,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  guessDisabled: {
    backgroundColor: Colors.disabledOrangeButton
  },
  guessEnabled: {
    backgroundColor: Colors.enabledOrangeButton
  },
  guessText: {
    fontSize: 40,
    color: 'white'
  }
});
