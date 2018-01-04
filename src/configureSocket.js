import io from "socket.io-client";
import history from "./configureHistory";

const socket = io();

export default (store) => {

  const events = {

    "SEARCH_RECIPE": (searchTerm) => {

      return (dispatch) => {
        fetch(`/api/search?q=${searchTerm}`)
          .then(response => response.json())
          .then((results) => {

            history.push("/search");

            store.dispatch({
              type: "SEARCH_RESULTS",
              results, searchTerm
            });

          })

      };

    },
  };

  socket.on("recipe-event", event => {

    var resolvedEvent = events[event.action];
    store.dispatch(resolvedEvent(event.searchTerm));

  });

};