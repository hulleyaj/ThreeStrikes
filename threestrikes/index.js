import React from 'react';
import { View } from 'react-native';
import { inject, observer } from 'mobx-react';
import ItemPicker from './components/ItemPicker';
import Strikes from './components/Strikes';
import Guesses from './components/Guesses';
import Bucket from './components/Bucket';

@inject('threeStrikes')
@observer
class ThreeStrikes extends React.Component {
    componentDidMount() {
        this.props.threeStrikes.getItemsAsync();
    }

    render() {
        const { selectedItem } = this.props.threeStrikes;

        return <View>
            { selectedItem ?
                <View>
                    <Strikes { ...this.props } />
                    <Guesses { ...this.props } />
                    <Bucket { ...this.props } />
                </View>
                : <ItemPicker { ...this.props } />
            }
        </View>
    }
}

export default ThreeStrikes;