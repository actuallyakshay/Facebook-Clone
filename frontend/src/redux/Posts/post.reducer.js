import {
  GET_POST_ERROR,
  GET_POST_LOADING,
  GET_POST_SUCCESS,
  GTE_POST_ERROR,
  UPLOAD_POST,
} from "./post.types";

const iState = {
  postLoading: false,
  postError: false,
  postsData: [],
};

export const postReducer = (state = iState, { type, payload }) => {
  switch (type) {
    case GET_POST_LOADING:
      return {
        ...state,
        postLoading: true,
      };

    case GET_POST_SUCCESS:
      // console.log(payload.length);
      return {
        ...state,
        postLoading: false,
        postsData: payload,
      };

    case GET_POST_ERROR:
      return {
        ...state,
        postError: true,
      };

    case UPLOAD_POST:
      return {
        ...state,
        postsData: [payload, ...state.postsData],
      };

    default:
      return state;
  }
};
