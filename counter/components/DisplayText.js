import React from 'react';
import { Text, View } from 'react-native';
import { observer } from 'mobx-react';

@observer
class DisplayText extends React.Component {
  render() {
    return <Text>{ `Current Count: ${this.props.counter.count}` }</Text>;
  }
}

export default DisplayText;
