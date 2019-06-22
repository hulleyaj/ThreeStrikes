import React from 'react';
import { View } from 'react-native';
import { inject } from 'mobx-react';
import Guesses from './components/Guesses';
import Bucket from './components/Bucket';

@inject('threeStrikes')
class ThreeStrikes extends React.Component {
    render() {
        return <View>
            <Guesses {...this.props} />
            <Bucket { ...this.props } />
        </View>
    }
}

export default ThreeStrikes;