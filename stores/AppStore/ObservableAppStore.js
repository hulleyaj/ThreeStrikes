import { action, observable } from 'mobx';
import { AsyncStorage } from 'react-native';
// import * as Battery from 'expo-battery';
import { THEME_KEY } from '../../constants/AsyncStorageKeys';
import { LIGHT, DARK } from '../../constants/Themes';

class ObservableAppStore {
  @observable theme = null;

  @action getTheme = async () => {
    if (!this.theme) {
      try {
        this.theme = await AsyncStorage.getItem(THEME_KEY);
      } catch (e) {
        // uhhhh
        console.log('error getting theme');
      }
    }

    if (!this.theme) {
      this.theme = LIGHT;
    }

    return this.theme;
  }

  @action setTheme = async newTheme => {
    if (newTheme === LIGHT || newTheme === DARK) {
      try {
        await AsyncStorage.setItem(THEME_KEY, newTheme);
        this.theme = newTheme;
      } catch (e) {
        // uhhhh
        console.log('error setting themez');
      }
    }
  }
}

// Battery.addLowPowerModeListener(() => {
//   console.log('WOAHHH');
// });

export default new ObservableAppStore();
