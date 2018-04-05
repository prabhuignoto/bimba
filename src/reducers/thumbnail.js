export default (state = { size: '1x' }, action) => {
  switch (action.type) {
    case 'CHANGE_THUMBNAIL_SIZE':
      return Object.assign(
        {},
        state,
        {
          size: action.size,
        },
      );
    case 'THUMBNAIL_CLICKED':
      return Object.assign(
        {},
        state,
        {
          activeImage: action.image,
        },
      );
    default:
      return state;
  }
};
