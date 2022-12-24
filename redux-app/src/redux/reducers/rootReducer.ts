import { combineReducers } from "redux";
import {userReducer, addUserReducer} from "./addUserReducer";

const rootReducer = combineReducers({
  user: addUserReducer,
  user2: userReducer,
});

export default rootReducer;

// export type RootState = ReturnType<typeof rootReducer>;