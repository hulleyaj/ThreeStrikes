import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import { inject, observer } from 'mobx-react';
import Icon from '../../components/Icon';
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
          name="rotate-ccw"
          screenProps={ screenProps }
          containerStyle={ { paddingRight: 10 } }
          onPress={ () => navigation.navigate('ItemPicker') }
        />
      )
    };
  };

  componentDidMount() {
    const { threeStrikesStore, navigation } = this.props;
    if (!threeStrikesStore.selectedItem) {
      navigation.navigate('ItemPicker');
    }
  }

  render() {
    const { screenProps: { theme }, threeStrikesStore } = this.props;

    return threeStrikesStore.selectedItem && <View style={ StyleSheet.flatten([styles.container, styles[theme]]) }>
      <Strikes { ...this.props } />
      <Guesses { ...this.props } />
      <Bucket { ...this.props } />
    </View>;
  }
}

ThreeStrikesScreen.propTypes = {
  screenProps: PropTypes.shape({
    theme: PropTypes.string
  }),
  threeStrikesStore: PropTypes.object
};

export default ThreeStrikesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  [LIGHT]: {
    backgroundColor: Colors.backgroundLight
  },
  [DARK]: {
    backgroundColor: Colors.backgroundDark
  }
});
