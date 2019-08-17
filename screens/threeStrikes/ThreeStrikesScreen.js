import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import { inject, observer } from 'mobx-react';
import Icon from '../../components/Icon';
import ItemPicker from './components/ItemPicker';
import Strikes from './components/Strikes';
import Guesses from './components/Guesses';
import Bucket from './components/Bucket';
import { LIGHT, DARK } from '../../constants/Themes';
import Colors from '../../constants/Colors';

@inject('threeStrikesStore')
@observer
class ThreeStrikesScreen extends React.Component {
  static navigationOptions = props => {
    const { screenProps, navigation } = props;

    return {
      title: 'Three Strikes',
      headerRight: (
        <Icon
          name="settings"
          screenProps={ screenProps }
          containerStyle={ { paddingRight: 10 } }
          onPress={ () => navigation.navigate('Settings') }
        />
      )
    };
  };

  componentDidMount() {
    const { threeStrikesStore } = this.props;

    threeStrikesStore.getItemsAsync();
  }

  render() {
    const { screenProps: { theme }, threeStrikesStore } = this.props;

    return <View style={ styles[theme] }>
      { threeStrikesStore.selectedItem
        ? <View>
          <Strikes { ...this.props } />
          <Guesses { ...this.props } />
          <Bucket { ...this.props } />
        </View>
        : <ItemPicker { ...this.props } />
      }
    </View>;
  }
}

ThreeStrikesScreen.propTypes = {
  screenProps: PropTypes.object,
  threeStrikesStore: PropTypes.object
};

export default ThreeStrikesScreen;

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
