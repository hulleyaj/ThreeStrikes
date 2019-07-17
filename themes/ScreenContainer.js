const generic = theme => ({
  container: {
    flex: 1,
    ...screenContainerThemes[theme]
  }
});

const screenContainerThemes = {
  light: {
    backgroundColor: '#FFFFFF'
  },
  dark: {
    backgroundColor: '#303030'
  }
};

export default theme => (
  {
    ...generic(theme)
  });
