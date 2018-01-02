export default (state = {}, action) => {


  console.log(action);
  console.log({results: [], searchTerm: action.searchTerm});

  switch (action.type) {
    case 'SEARCH_RESULTS':
      return { results: action.results, searchTerm: action.searchTerm };
    default:
      return state;
  }
};