// NOTE: use this store variable to create a store.
import { applyMiddleware, compose, legacy_createStore } from "redux";
import thunk from "redux-thunk";
//   import { reducer as ProductReducer} from "./ProductsReducer/reducer"
//   import { reducer as ContactReducer } from "./ContactReducer/reducer"
//   import {reducer as CartReducer} from "./CartReducer/reducer"
//   import {reducer as AuthReducer} from "./AuthReducer/reducer"
import { reducer } from "./reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//   const rootReducer = combineReducers({ 
//     ProductReducer,
//     ContactReducer,
//     CartReducer,
//     AuthReducer
//    });

const store = legacy_createStore(
    reducer,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;


// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
    window.store = store;
}
