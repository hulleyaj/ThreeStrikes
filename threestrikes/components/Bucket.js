import React from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, Button, StyleSheet
} from 'react-native';
import { observer } from 'mobx-react';
import { STRIKE, EMPTY } from '../models/ObservableThreeStrikesStore';

@observer
class Bucket extends React.Component {
  pulledStrike = ({ pulledPuck }) => pulledPuck === STRIKE;

  awaitingPulledPuck = ({ pulledPuck }) => pulledPuck === EMPTY;

  onButtonClick(threeStrikes) {
    if (this.pulledStrike(threeStrikes)) {
      threeStrikes.popPulledPuck();
      threeStrikes.pullPuckFromBucket();
    } else if (this.awaitingPulledPuck(threeStrikes)) {
      threeStrikes.pullPuckFromBucket();
    }
  }

  render() {
    const { threeStrikes } = this.props;
    const pulledPuckText = this.pulledStrike(threeStrikes) ? 'X' : threeStrikes.pulledPuck;
    const pulledPuckStyle = this.pulledStrike(threeStrikes) ? styles.pulledPuckStrike : styles.pulledPuck;
    const buttonText = this.pulledStrike(threeStrikes) ? 'discard strike' : 'pull puck from bucket';
    const buttonColor = (this.awaitingPulledPuck(threeStrikes) || this.pulledStrike(threeStrikes)) ? 'rgb(22,186,232)' : 'rgb(150,150,150)';

    return <View style={styles.bucket}>
      <Button
        title={buttonText}
        onPress={() => this.onButtonClick(threeStrikes)}
        color={buttonColor}
      />
      {
        threeStrikes.pulledPuck !== EMPTY
          ? <View style={pulledPuckStyle}>
            <Text style={styles.pulledPuckText}>
              {pulledPuckText}
            </Text>
          </View>
          : null
      }
    </View>;
  }
}

Bucket.propTypes = {
  threeStrikes: PropTypes.object
};

export default Bucket;

const puckStyle = {
  width: 150,
  height: 150,
  borderRadius: 10,
  alignItems: 'center',
  borderStyle: 'solid',
  borderColor: 'grey',
  borderWidth: 2,
  marginTop: 20
};

const styles = StyleSheet.create({
  bucket: {
    alignItems: 'center',
    marginTop: 50
  },
  pulledPuck: {
    ...puckStyle,
    backgroundColor: 'rgb(92,195,84)'
  },
  pulledPuckStrike: {
    ...puckStyle,
    backgroundColor: 'rgb(255,60,60)'
  },
  pulledPuckText: {
    fontSize: 100,
    color: 'white'
  }
});
