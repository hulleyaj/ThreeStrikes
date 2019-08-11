import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Platform, StatusBar, StyleSheet, View
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Provider } from 'mobx-react';
import observableCounterStore from './counter/models/ObservableCounterStore';
import observableThreeStrikesStore from './stores/ThreeStrikesStore/ObservableThreeStrikesStore';
import ObservableAppStore from './stores/AppStore/ObservableAppStore';
import ScreenContainerTheme from './themes/ScreenContainer';

import AppNavigator from './navigation/AppNavigator';

const stores = {
  counter: observableCounterStore,
  threeStrikesStore: observableThreeStrikesStore,
  appStore: ObservableAppStore
};

const App = props => {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  const { skipLoadingScreen } = props;

  if (!isLoadingComplete && !skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={ loadResourcesAsync }
        onError={ handleLoadingError }
        onFinish={ () => handleFinishLoading(setLoadingComplete) }
      />
    );
  }

  const { theme } = stores.appStore;

  return <Provider { ...stores }>
    <View style={ styles(theme).container }>
      { Platform.OS === 'ios' && <StatusBar barStyle="default" /> }
      <AppNavigator screenProps={ { theme } } />
    </View>
  </Provider>;
};

export default App;

async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([
      require('./assets/images/robot-dev.png'),
      require('./assets/images/robot-prod.png'),
    ]),
    Font.loadAsync({
      // This is the font that we are using for our tab bar
      ...Ionicons.font,
      // We include SpaceMono because we use it in HomeScreen.js. Feel free to
      // remove this if you are not using it in your app
      'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
    }),
    stores.appStore.getTheme()
  ]);
}

function handleLoadingError(error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

App.propTypes = {
  skipLoadingScreen: PropTypes.bool
};

const styles = theme => StyleSheet.create({
  ...ScreenContainerTheme(theme)
});
