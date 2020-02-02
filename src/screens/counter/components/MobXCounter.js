import React from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, TouchableOpacity
} from 'react-native';
import { observer } from 'mobx-react';

@observer
class MobXCounter extends React.Component {
  render() {
    const {
      screenProps: { theme },
      counterStyles,
      counterTextStyles,
      counterStore
    } = this.props;

    return <View style={ counterStyles.container }>
      <Text style={ counterTextStyles[theme] }>MobX Counter</Text>
      <View style={ counterStyles.counterContainer }>
        <TouchableOpacity
          onPress={ () => counterStore.decrement() }
          style={ counterStyles.button }
        >
          <Text style={ counterStyles.buttonText }>-</Text>
        </TouchableOpacity>
        <Text style={ counterTextStyles[theme] }>{ counterStore.count }</Text>
        <TouchableOpacity
          onPress={ () => counterStore.increment() }
          style={ counterStyles.button }
        >
          <Text style={ counterStyles.buttonText }>+</Text>
        </TouchableOpacity>
      </View>
    </View>;
  }
}

MobXCounter.propTypes = {
  screenProps: PropTypes.shape({
    theme: PropTypes.string
  }),
  counterStyles: PropTypes.object,
  counterTextStyles: PropTypes.object,
  counterStore: PropTypes.shape({
    count: PropTypes.number,
    decrement: PropTypes.func,
    increment: PropTypes.func
  })
};

export default MobXCounter;
