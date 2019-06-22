import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

class Bucket extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            currentPuck: -1
        };
    }

    pullPuck = () => this.setState({ currentPuck: this.props.threeStrikes.getPuckFromBucket() });

    render() {
        return <View>
            <Button
                title="Get Puck"
                onPress={() => this.pullPuck()}
            />
            <Text>{this.state.currentPuck}</Text>
        </View>;
    }
}

export default Bucket;
