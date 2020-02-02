import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import { inject } from 'mobx-react';
import ItemPicker from './components/ItemPicker';
import { LIGHT, DARK } from '../../constants/Themes';
import Colors from '../../constants/Colors';

@inject('threeStrikesStore')
class ItemPickerScreen extends React.Component {
  static navigationOptions = () => ({ title: 'Select Item' });

  componentDidMount() {
    const { threeStrikesStore } = this.props;

    threeStrikesStore.getItemsAsync();
  }

  render() {
    const { screenProps: { theme } } = this.props;

    return <View style={ styles[theme] }>
      <ItemPicker { ...this.props } />
    </View>;
  }
}

ItemPickerScreen.propTypes = {
  threeStrikesStore: PropTypes.object,
  screenProps: PropTypes.shape({
    theme: PropTypes.string
  })
};

export default ItemPickerScreen;

const styles = StyleSheet.create({
  [LIGHT]: {
    flex: 1,
    backgroundColor: Colors.backgroundLight
  },
  [DARK]: {
    flex: 1,
    backgroundColor: Colors.backgroundDark
  }
});
