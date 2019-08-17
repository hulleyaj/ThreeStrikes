const tintColor = '#2f95dc';

const colorPalette = {
  lightBlack: '#202020',
  lightGray: '#CCCCCC',
  gray: '#808080',
  darkGray: '#404040',
  darkWhite: '#F3F3F3'
};

const lightThemeColors = {
  textColorLight: colorPalette.lightBlack,
  iconColorLight: colorPalette.gray,
  tabBarLight: colorPalette.darkWhite,
  headerLight: colorPalette.darkWhite,
  backgroundLight: '#FFFFFF'
};

const darkThemeColors = {
  textColorDark: colorPalette.lightGray,
  iconColorDark: colorPalette.lightGray,
  tabBarDark: colorPalette.darkGray,
  headerDark: colorPalette.darkGray,
  backgroundDark: '#303030'
};

const componentColors = {
  enabledGreenButton: '#8EFF86',
  disabledGreenButton: '#8E9F86',
  enabledRedButton: '#FF3030',
  disabledRedButton: '#973030',
  iconFocused: '#2F95DC'
};

export default {
  tintColor,
  tabIconDefault: '#ccc',
  tabIconSelected: tintColor,
  tabBar: '#fefefe',
  errorBackground: 'red',
  errorText: '#fff',
  warningBackground: '#EAEB5E',
  warningText: '#666804',
  noticeBackground: tintColor,
  noticeText: '#fff',
  ...colorPalette,
  ...lightThemeColors,
  ...darkThemeColors,
  ...componentColors
};
