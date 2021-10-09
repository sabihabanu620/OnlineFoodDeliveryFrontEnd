import { combineReducers } from "redux";

import shoppingReducer from "./FoodCart/FoodCart-reducer";

const rootReducer = combineReducers({
  shop: shoppingReducer,
});

export default rootReducer;
