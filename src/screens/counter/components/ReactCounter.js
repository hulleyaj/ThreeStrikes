import React from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, TouchableOpacity
} from 'react-native';

class ReactCounter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  render() {
    const {
      screenProps: { theme },
      counterStyles,
      counterTextStyles
    } = this.props;
    const { count } = this.state;

    return <View style={ counterStyles.container }>
      <Text style={ counterTextStyles[theme] }>React Counter</Text>
      <View style={ counterStyles.counterContainer }>
        <TouchableOpacity
          onPress={ () => { this.setState({ count: count - 1 }); } }
          style={ counterStyles.button }
        >
          <Text style={ counterStyles.buttonText }>-</Text>
        </TouchableOpacity>
        <Text style={ counterTextStyles[theme] }>{ count }</Text>
        <TouchableOpacity
          onPress={ () => { this.setState({ count: count + 1 }); } }
          style={ counterStyles.button }
        >
          <Text style={ counterStyles.buttonText }>+</Text>
        </TouchableOpacity>
      </View>
    </View>;
  }
}

ReactCounter.propTypes = {
  screenProps: PropTypes.shape({
    theme: PropTypes.string
  }),
  counterStyles: PropTypes.object,
  counterTextStyles: PropTypes.object
};

export default ReactCounter;
