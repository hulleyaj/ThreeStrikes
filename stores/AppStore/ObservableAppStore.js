import { action, observable } from 'mobx';
import { AsyncStorage } from 'react-native';
import { THEME_KEY } from '../../constants/AsyncStorageKeys';
import { LIGHT, DARK } from '../../constants/Themes';

class ObservableAppStore {
  @observable theme = null;

  @action getTheme = async () => {
    if (!this.theme) {
      try {
        const theme = await AsyncStorage.getItem(THEME_KEY);
        this.theme = theme;
      } catch (e) {
        // uhhhh
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
        // await AsyncStorage.setItem(THEME_KEY, newTheme);
        this.theme = newTheme;
      } catch (e) {
        // uhhhh
      }
    }
  }
}

export default new ObservableAppStore();