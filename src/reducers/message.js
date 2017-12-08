export default (state = "Initial", action) => {

  switch (action.type) {

    case 'SHOW_MESSAGE':
      return action.action;

    default:
      return state;
  }

};