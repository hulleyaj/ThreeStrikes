import Colors from '../constants/Colors';

const headerThemes = {
  light: {
    headerStyle: {
      backgroundColor: '#EDEDED'
    },
    headerTintColor: Colors.textColorDark
  },
  dark: {
    headerStyle: {
      backgroundColor: '#404040'
    },
    headerTintColor: Colors.textColorLight
  }
};

export default (theme) => (
  {
    ...headerThemes[theme]
  }
);
