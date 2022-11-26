import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./Auth/auth.reducer";
import { postReducer } from "./Posts/post.reducer";
import { singleReducer } from "./SingleUserDetail/single.reducer";
import { storyReducer } from "./Story/story.reducer";


const rootreducer = combineReducers({
  auth: authReducer,
  post: postReducer,
  singleUser: singleReducer,
  story: storyReducer,
});

export const store = legacy_createStore(rootreducer, applyMiddleware(thunk));
