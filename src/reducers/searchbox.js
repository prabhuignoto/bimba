export default (state = { engine: 'google' }, action) => {
  switch (action.type) {
    case 'SELECT_SEARCH_ENGINE':
      return Object.assign({}, state, { engine: action.engine });
    default: return state;
  }
};
