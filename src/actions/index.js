export const selectSearchEngine = engine => ({
  type: 'SELECT_SEARCH_ENGINE',
  engine,
});

export const resetSearchEngine = () => ({
  type: 'RESET_SEARCH_ENGINE',
});
