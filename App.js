import React from 'react';
import PropTypes from 'prop-types';
import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import {
  Platform, StatusBar, StyleSheet, View
} from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { Provider, observer } from 'mobx-react';
import observableCounterStore from './stores/CounterStore/ObservableCounterStore';
import observableThreeStrikesStore from './stores/ThreeStrikesStore/ObservableThreeStrikesStore';
import ObservableAppStore from './stores/AppStore/ObservableAppStore';
import { registerForPushNotificationsAsync } from './utils/PushNotifications';
import Colors from './constants/Colors';
import { LIGHT, DARK } from './constants/Themes';

import AppNavigator from './navigation/AppNavigator';

const stores = {
  counterStore: observableCounterStore,
  threeStrikesStore: observableThreeStrikesStore,
  appStore: ObservableAppStore
};

@observer
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoadingComplete: false
    };
  }

  componentDidMount() {
    registerForPushNotificationsAsync();
  }

  render() {
    const { isLoadingComplete } = this.state;
    const { skipLoadingScreen } = this.props;
    const { theme } = stores.appStore;

    if (!isLoadingComplete && !skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={ loadResourcesAsync }
          onError={ handleLoadingError }
          onFinish={ () => this.setState({ isLoadingComplete: true }) }
        />
      );
    }

    return <Provider { ...stores }>
      <View style={ styles[theme] }>
        { Platform.OS === 'ios' && <StatusBar barStyle="default" /> }
        <AppNavigator screenProps={ { theme } } />
      </View>
    </Provider>;
  }
}

export default App;

async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([
      require('./assets/images/robot-dev.png'),
      require('./assets/images/robot-prod.png'),
    ]),
    Font.loadAsync({
      ...Feather.font,
      // This is the font that we are using for our tab bar
      ...Ionicons.font,
      // We include SpaceMono because we use it in HomeScreen.js. Feel free to
      // remove this if you are not using it in your app
      'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
    }),
    stores.appStore.getTheme(),
    stores.appStore.subscribeBattery()
  ]);
}

function handleLoadingError(error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}

App.propTypes = {
  skipLoadingScreen: PropTypes.bool
};

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
