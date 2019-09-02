import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Colors from '../../../constants/Colors';
import { LIGHT, DARK } from '../../../constants/Themes';

class ReactCounter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  render() {
    const { screenProps: { theme } } = this.props;
    const { count } = this.state;

    return <View style={ styles.container }>
      <TouchableOpacity
        onPress={ () => { this.setState({ count: count - 1 }); } }
        style={ styles.button }
      >
        <Text style={ styles.buttonText }>-</Text>
      </TouchableOpacity>
      <Text style={ textStyles[theme] }>{ count }</Text>
      <TouchableOpacity
        onPress={ () => { this.setState({ count: count + 1 }); } }
        style={ styles.button }
      >
        <Text style={ styles.buttonText }>+</Text>
      </TouchableOpacity>
    </View>;
  }
}

export default ReactCounter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
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

const textStyles = StyleSheet.create({
  [LIGHT]: {
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
