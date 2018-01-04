import { SEARCH_RESULTS } from '../actions/types';

export default (state = {results: [], searchTerm: ''}, action) => {

  switch (action.type) {
    case SEARCH_RESULTS:
      return { results: action.results, searchTerm: action.searchTerm };
    default:
      return state;
  }

};