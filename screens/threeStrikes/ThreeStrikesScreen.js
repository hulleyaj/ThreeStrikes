import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import { inject, observer } from 'mobx-react';
import { Icon } from 'react-native-elements';
import ScreenContainerTheme from '../../themes/ScreenContainer';
import HeaderTheme from '../../themes/Header';
import IconsTheme from '../../themes/Icons';
import ItemPicker from './components/ItemPicker';
import Strikes from './components/Strikes';
import Guesses from './components/Guesses';
import Bucket from './components/Bucket';

@inject('threeStrikesStore', 'appStore')
@observer
class ThreeStrikesScreen extends React.Component {
  static navigationOptions = props => {
    console.log('props = ', props)

    const { screenProps: { theme }, navigation } = props;
    return {
      title: 'Three Strikes',
      ...HeaderTheme(theme),
      headerRight: (
        <Icon
          name="settings"
          type="feather"
          { ...IconsTheme(theme) }
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
    const { appStore, threeStrikesStore } = this.props;

    return <View style={ styles(appStore.theme).container }>
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
  appStore: PropTypes.object,
  threeStrikesStore: PropTypes.object
};

export default ThreeStrikesScreen;

const styles = theme => StyleSheet.create({
  ...ScreenContainerTheme(theme),
});
