import React from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, StyleSheet, TouchableOpacity
} from 'react-native';
import { observer } from 'mobx-react';
import { LIGHT, DARK } from '../../../constants/Themes';
import Colors from '../../../constants/Colors';

@observer
class ItemPicker extends React.Component {
  selectableItemOnPress = (item, setItem, pop) => {
    setItem(item);
    pop();
  }

  renderSelectableItems = (itemList, setItem, pop) =>
    itemList.map((item, index) =>
      <TouchableOpacity
        key={ index }
        style={ styles.selectableItem }
        onPress={ () => this.selectableItemOnPress(item, setItem, pop) }
      >
        <Text style={ styles.selectableItemText }>{ item.item }</Text>
      </TouchableOpacity>);

  render() {
    const {
      threeStrikesStore: { itemList, setItem },
      screenProps: { theme },
      navigation: { pop }
    } = this.props;

    return <View style={ styles.container }>
      <Text style={ { ...headerStyles.text, ...headerStyles[theme] } }>SELECT ITEM</Text>
      <View style={ styles.selectableItemContainer }>
        { this.renderSelectableItems(itemList, setItem, pop) }
      </View>
    </View>;
  }
}

ItemPicker.propTypes = {
  threeStrikesStore: PropTypes.shape({
    itemList: PropTypes.array,
    setItem: PropTypes.func
  }),
  screenProps: PropTypes.shape({
    theme: PropTypes.string
  }),
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
  selectableItemContainer: {
    width: '70%'
  },
  selectableItem: {
    backgroundColor: Colors.enabledGreenButton,
    borderRadius: 5,
    minHeight: 36,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10
  },
  selectableItemText: {
    fontSize: 18,
    color: Colors.textColorLight
  }
});

const headerStyles = StyleSheet.create({
  text: {
    fontSize: 20
  },
  [LIGHT]: {
    color: Colors.textColorLight
  },
  [DARK]: {
    color: Colors.textColorDark
  }
});
