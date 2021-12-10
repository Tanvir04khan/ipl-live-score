import { matchNameReducer } from "./reducers/matchName.reducer";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { matchDataReducer } from "./reducers/matchData.reducer";

const rootReducer = combineReducers({
  matchName: matchNameReducer,
  matchData: matchDataReducer,
});

const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
