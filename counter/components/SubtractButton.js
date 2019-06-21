import React from 'react';
import { Button } from 'react-native';

class SubtractButton extends React.Component {
    render() {
        return <Button
        title="-"
        onPress={ () => this.props.counter.subtractCount() }
        />; 
    }
}

export default SubtractButton;