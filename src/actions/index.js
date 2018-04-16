import 'whatwg-fetch';

const URL = 'https://api.cognitive.microsoft.com/bing/v7.0/images/search';

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

export const changeThumbnailSize = size => ({
  type: 'CHANGE_THUMBNAIL_SIZE',
  size,
});

export const handleSearch = (
  searchTerm,
  safeSearch,
  imageType,
  freshness,
  size,
) => (dispatch) => {
  dispatch({
    type: 'START_SEARCH',
    searchTerm,
  });
  const queryString = [
    `${URL}?`,
    `q=${searchTerm}&`,
    `safeSearch=${safeSearch ? 'Strict' : 'Off'}`,
    `&freshness=${freshness}`,
    `&size=${size}`,
  ].join('');

  const request = fetch(queryString, {
    headers: {
      'Ocp-Apim-Subscription-Key': 'b7fd25deb2e94a7e85674206b6137417',
      'content-type': 'application/json',
    },
  });
  return request
    .then(response => response.json())
    .then((json) => {
      dispatch({
        type: 'COMPLETE_SEARCH',
        results: json.value,
      });
    });
};

export const clickThumbnail = image => ({
  type: 'THUMBNAIL_CLICKED',
  image,
});

export const changeSize = size => ({
  type: 'CHANGE_QUALITY',
  size,
});

export const changeImagetype = imageType => ({
  type: 'CHANGE_IMAGE_TYPE',
  imageType,
});

export const changeFreshness = freshness => ({
  type: 'CHANGE_FRESHNESS',
  freshness,
});

export const toggleSafeSearch = mode => ({
  type: 'TOGGLE_SAFE_SEARCH',
  mode,
});
