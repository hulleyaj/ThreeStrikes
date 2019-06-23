import React from 'react';
import { observer } from 'mobx-react';
import { View, Text, StyleSheet } from 'react-native';
import { STRIKE } from '../models/ObservableThreeStrikesStore';

@observer
class Strikes extends React.Component {
    howManyStrikesPulled = ({ bucket }) => (3 - bucket.filter(puck => puck === STRIKE).length);

    renderStrikes = strikesPulled =>
        [...Array(3)].map((i, index) => {
            const strikeStyle = index >= strikesPulled ? styles.strikeClear : styles.strikePulled;
            return <View key={ index } style={ strikeStyle }>
                <Text style={ styles.strikeText }>X</Text>
            </View>;
        });

    render() {
        const { threeStrikes } = this.props;
        const strikesPulled = this.howManyStrikesPulled(threeStrikes);

        return <View style={ styles.strikes }>
            { this.renderStrikes(strikesPulled) }
            </View>;
    }
}

export default Strikes;

const strikeStyle = {
    width: 100,
    height: 100,
    alignItems: 'center',
    borderRadius: 5
};

const styles = StyleSheet.create({
    strikes: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 30
    },
    strikeClear: {
        ...strikeStyle,
        backgroundColor: 'rgb(150,150,150)'
    },
    strikePulled: {
        ...strikeStyle,
        backgroundColor: 'rgb(255,60,60)'
    },
    strikeText: {
        color: 'white',
        fontSize: 70
    }
});
