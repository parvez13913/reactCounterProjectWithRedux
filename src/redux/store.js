import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import rootReducer from "./rootReducer";


// create my first middleware

const myLogger = (store) => (next) => (action) => {
    console.log(`Action ${JSON.stringify(action)}`);
    console.log(`Before ${JSON.stringify(store.getState())}`);
    const upcomingState = [action].reduce(rootReducer, store.getState());
    console.log(`UpcomingState ${JSON.stringify(upcomingState)}`);
    next(action);
}

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, myLogger)));


export default store;