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
        { searchTerm: action.searchTerm },
      );
    case 'COMPLETE_SEARCH':
      return Object.assign(
        {},
        state,
        { results: action.results },
      );
    default: return state;
  }
};
