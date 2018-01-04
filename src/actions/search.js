import { SEARCH_RESULTS } from './types';

const showSearchResults = ({searchTerm, results}) => {
  return {
    type: SEARCH_RESULTS,
    results,
    searchTerm
  }
};

export { showSearchResults }