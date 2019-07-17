const tintColor = '#2f95dc';

const myColors = {
  textColorLight: '#F1F1F1',
  textColorDark: '#202020',
  enabledGreenButton: '#8EFF86',
  disabledGreenButton: '#8E9F86',
  enabledRedButton: '#FF3030',
  disabledRedButton: '#973030'
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
  ...myColors
};
