import React from 'react';
import { Button } from 'react-native';

class AddButton extends React.Component {
    render() {
        return <Button
        title="+"
        onPress={ () => this.props.counter.addCount() }
        />; 
    }
}

export default AddButton;