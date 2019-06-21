import React from 'react';
import { View } from 'react-native';
import { inject } from 'mobx-react';
import DisplayText from './components/DisplayText';
import AddButton from './components/AddButton';
import SubtractButton from './components/SubtractButton';

@inject('counter')
class Counter extends React.Component {
    render() {
        return <View>
            <DisplayText { ...this.props } />
            <AddButton { ...this.props } />
            <SubtractButton { ...this.props } />
        </View>;
    }
}

export default Counter;