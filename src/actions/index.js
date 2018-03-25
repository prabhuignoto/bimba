export const selectSearchEngine = engine => ({
  type: 'SELECT_SEARCH_ENGINE',
  engine,
});

export const openSettings = () => ({
  type: 'OPEN_SETTINGS',
  settingsOpen: true,
});

export const closeSettings = () => ({
  type: 'CLOSE_SETTINGS',
  settingsOpen: false,
});
