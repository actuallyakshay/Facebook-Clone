import {
  PROFILE_INFO,
  PROFILE_INFO_LOADING,
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
  pINFOLOADING: false,
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
        singleLoading: false,
      };

    case SINGLE_ERROR:
      return {
        ...state,
        singleError: true,
      };

    case PROFILE_INFO_LOADING:
      return {
        ...state,
        pINFOLOADING: true,
      };

    case PROFILE_INFO:
      return {
        ...state,
        profileInfo: payload,
        pINFOLOADING: false,
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
