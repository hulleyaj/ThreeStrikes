import React from 'react';
import { View } from 'react-native';
import Counter from '../counter';

class ThreeStrikesScreen extends React.Component {
    render() {
        return <View>
            <Counter { ...this.props } />
        </View>;
    }
}

export default ThreeStrikesScreen;