import React from 'react';
import { observer } from 'mobx-react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../../../constants/Colors';

@observer
class Strikes extends React.Component {
    renderStrikes = strikesPulled =>
      [...Array(3)].map((i, index) => {
        const strikeStyle = index >= strikesPulled ? styles.strikeClear : styles.strikePulled;
        return <View key={ index } style={ strikeStyle }>
          <Text style={ styles.strikeText }>X</Text>
        </View>;
      });

    render() {
      const { threeStrikesStore } = this.props;

      return <View style={ styles.strikes }>
        { this.renderStrikes(threeStrikesStore.strikesPulledCount) }
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
    backgroundColor: Colors.disabledRedButton
  },
  strikePulled: {
    ...strikeStyle,
    backgroundColor: Colors.enabledRedButton
  },
  strikeText: {
    color: 'white',
    fontSize: 70
  }
});
