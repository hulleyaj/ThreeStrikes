import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { observer } from 'mobx-react';
import { EMPTY } from '../models/ObservableThreeStrikesStore';

@observer
class Guesses extends React.Component {
    onGuessPress(index, takeGuess) {
        takeGuess(index);
    }

    renderGuesses = ({ correctGuesses, takeGuess }) =>
        correctGuesses.map((guess, index) => {
            const guessText = guess !== EMPTY ? guess : ' ';
            return <TouchableOpacity 
            key={ index } 
            style={ styles.guess }
            onPress={ () => this.onGuessPress(index, takeGuess) }
            >
                <Text style={ styles.guessText }>{ guessText }</Text>
            </TouchableOpacity>;
        });

    render() {
        return <View style={ styles.guesses }>
            { this.renderGuesses(this.props.threeStrikes) }
            </View>
    }
}

export default Guesses;

const styles = StyleSheet.create({
    guesses: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: '10%'
    },
    guess: {
        backgroundColor: 'rgb(236,143,39)',
        borderRadius: 5,
        width: '13%',
        alignItems: 'center'
    },
    guessText: {
        fontSize: 40,
        color: 'white'
    }
});
