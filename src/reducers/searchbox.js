export default (state = { engine: 'google' }, action) => {
  switch (action.type) {
    case 'SELECT_SEARCH_ENGINE':
      return Object.assign({}, state, { engine: action.engine });
    case 'OPEN_SETTINGS':
    case 'CLOSE_SETTINGS':
      return Object.assign({}, state, { settingsOpen: action.settingsOpen });
    default: return state;
  }
};
