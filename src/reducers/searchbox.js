export default (state = { engine: 'google' }, action) => {
  switch (action.type) {
    case 'SELECT_SEARCH_ENGINE':
      return Object.assign(
        {},
        state,
        { engine: action.engine },
      );
    case 'OPEN_SETTINGS':
    case 'CLOSE_SETTINGS':
      return Object.assign(
        {},
        state,
        { settingsOpen: action.settingsOpen },
      );
    case 'START_SEARCH':
      return Object.assign(
        {},
        state,
        { searchTerm: action.searchTerm, searchInProgress: true },
      );
    case 'COMPLETE_SEARCH':
      return Object.assign(
        {},
        state,
        {
          results: action.results.map(x => ({
            thumbnailURL: x.thumbnailUrl,
            name: x.name,
          })),
          searchInProgress: false,
        },
      );
    default: return state;
  }
};
