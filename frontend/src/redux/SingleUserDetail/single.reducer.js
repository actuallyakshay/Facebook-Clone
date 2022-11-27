import {
  PROFILE_INFO,
  SINGLE_ERROR,
  SINGLE_LOADING,
  SINGLE_SUCCESS,
  USER_DATA,
} from "./single.types";

const iState = {
  singleLoading: false,
  singleError: false,
  singleUserData: {},
  profileInfo: {},
  userPosts: [],
};

export const singleReducer = (state = iState, { type, payload }) => {
  switch (type) {
    case SINGLE_LOADING:
      return {
        ...state,
        singleLoading: true,
      };

    case SINGLE_SUCCESS:
      return {
        ...state,
        singleUserData: payload,
      };

    case SINGLE_ERROR:
      return {
        ...state,
        singleError: true,
      };
    case PROFILE_INFO:
      return {
        ...state,
        profileInfo: payload,
      };

    case USER_DATA:
      return {
        ...state,
        userPosts: payload,
      };
    default:
      return state;
  }
};
