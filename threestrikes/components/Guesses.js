import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Guesses extends React.Component {
    renderGuesses = ({ correctGuesses }) =>
        correctGuesses.map((guess, index) => {
            return <View key={ index } style={ styles.guess }>
                <Text style={ styles.guessText }>{ guess }</Text>
            </View>;
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
