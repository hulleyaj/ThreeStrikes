import Colors from '../constants/Colors';

const iconThemes = focused => (
  {
    light: {
      color: focused ? Colors.iconFocused : Colors.iconColorLight
    },
    dark: {
      color: focused ? Colors.iconFocused : Colors.iconColorDark
    }
  }
);

export default (theme, focused) => (
  {
    ...iconThemes(focused)[theme]
  }
);
