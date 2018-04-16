import { combineReducers } from 'redux';
import SearchBox from './searchbox';
import Thumbnail from './thumbnail';
import Search from './search';
import Query from './query';

export default combineReducers({
  Search,
  SearchBox,
  Thumbnail,
  Query,
});
