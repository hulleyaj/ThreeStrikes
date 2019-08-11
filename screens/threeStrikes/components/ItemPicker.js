import React from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, StyleSheet, TouchableOpacity
} from 'react-native';
import { observer } from 'mobx-react';
import Colors from '../../../constants/Colors';

@observer
class ItemPicker extends React.Component {
  renderSelectableItems = ({ itemList, setItem }) =>
    itemList.map((item, index) =>
      <TouchableOpacity
        key={ index }
        style={ styles.selectableItem }
        onPress={ () => setItem(item) }
      >
        <Text style={ styles.selectableItemText }>{ item.item }</Text>
      </TouchableOpacity>);

  render() {
    const { threeStrikesStore } = this.props;

    return <View style={ styles.container }>
      <Text style={ styles.headerText }>SELECT ITEM</Text>
      <View style={ styles.selectableItemContainer }>
        { this.renderSelectableItems(threeStrikesStore) }
      </View>
    </View>;
  }
}

ItemPicker.propTypes = {
  threeStrikesStore: PropTypes.object
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
