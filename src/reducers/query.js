export default (state = {
  size: 'Large',
  freshness: 'Month',
  imageType: 'Photo',
  safeSearch: false,
}, action) => {
  switch (action.type) {
    case 'CHANGE_QUALITY':
      return Object.assign({}, state, {
        size: action.size,
      });
    case 'CHANGE_IMAGE_TYPE':
      return Object.assign({}, state, {
        imageType: action.imageType,
      });
    case 'CHANGE_FRESHNESS':
      return Object.assign({}, state, {
        freshness: action.freshness,
      });
    case 'TOGGLE_SAFE_SEARCH':
      return Object.assign({}, state, {
        safeSearch: action.mode,
      });
    default:
      return state;
  }
};
