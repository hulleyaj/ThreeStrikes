import { action, observable } from 'mobx';
import { AsyncStorage } from 'react-native';
import * as Battery from 'expo-battery';
import { THEME_KEY } from '../../constants/AsyncStorageKeys';
import { LIGHT, DARK } from '../../constants/Themes';

class ObservableAppStore {
  @observable theme = null;

  @action getTheme = async () => {
    try {
      const storedTheme = await AsyncStorage.getItem(THEME_KEY) || LIGHT;
      const { lowPowerMode } = await Battery.getPowerStateAsync();

      this.theme = lowPowerMode ? DARK : storedTheme;
    } catch (e) {
      // uhhhh
      console.log('error getting theme');
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
        console.log('error setting theme');
      }
    }
  }

  subscribeBattery = () => Battery.addLowPowerModeListener(() => this.getTheme());
}

export default new ObservableAppStore();
