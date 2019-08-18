import React from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, StyleSheet, TouchableOpacity
} from 'react-native';
import { observer } from 'mobx-react';
import Colors from '../../../constants/Colors';

@observer
class ItemPicker extends React.Component {
  selectableItemOnPress(item) {
    const { threeStrikesStore: { setItem }, navigation } = this.props;

    setItem(item);
    navigation.pop();
  }

  renderSelectableItems = ({ threeStrikesStore: { itemList } }) =>
    itemList.map((item, index) =>
      <TouchableOpacity
        key={ index }
        style={ styles.selectableItem }
        onPress={ () => this.selectableItemOnPress(item) }
      >
        <Text style={ styles.selectableItemText }>{ item.item }</Text>
      </TouchableOpacity>);

  render() {
    return <View style={ styles.container }>
      <Text style={ styles.headerText }>SELECT ITEM</Text>
      <View style={ styles.selectableItemContainer }>
        { this.renderSelectableItems(this.props) }
      </View>
    </View>;
  }
}

ItemPicker.propTypes = {
  threeStrikesStore: PropTypes.object,
  navigation: PropTypes.shape({
    pop: PropTypes.func
  })
};

export default ItemPicker;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: 'center'
  },
  headerText: {
    color: Colors.textColorLight,
    fontSize: 20
  },
  selectableItemContainer: {
    width: '70%'
  },
  selectableItem: {
    backgroundColor: Colors.enabledGreenButton,
    borderRadius: 5,
    minHeight: 36,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  selectableItemText: {
    color: Colors.textColorDark,
    fontSize: 18
  }
});
