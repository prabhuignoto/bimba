export default (state = {
  results: [],
  searchInProgress: false,
  searchTerm: 'space',
}, action) => {
  switch (action.type) {
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
            contentURL: x.contentUrl,
            name: x.name,
          })),
          searchInProgress: false,
        },
      );
    default: return state;
  }
};
