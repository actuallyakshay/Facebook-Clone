import {
  GET_AUTH_ERROR,
  GET_AUTH_LOADING,
  GET_AUTH_SIGNUP_LOADING,
  GET_AUTH_SIGNUP_SUCCESS,
  GET_AUTH_SUCCESS,
  GET_SIGNOUT,
} from "./auth.types";

let token = localStorage.getItem("token");

let email, _id, password;

if (token) {
  [email, _id, password] = token.split(":");
} else {
  _id = "";
}

const iState = {
  authLoading: false,
  authError: false,
  signup_message: "",
  data: {
    token: token || "",
    isAuth: !!token,
  },
  email: email,
};

export const authReducer = (state = iState, { type, payload }) => {
  switch (type) {
    case GET_AUTH_SIGNUP_LOADING:
      return {
        ...state,
        authLoading: true,
      };

    case GET_AUTH_SIGNUP_SUCCESS:
      return {
        ...state,
        authLoading: false,
        signup_message: payload,
      };

    case GET_AUTH_LOADING:
      return {
        ...state,
        authLoading: true,
      };

    case GET_AUTH_SUCCESS:
      localStorage.setItem("token", payload);
      return {
        ...state,
        authLoading: false,
        data: {
          ...state.data,
          token: payload,
          isAuth: true,
        },
      };

    case GET_AUTH_ERROR:
      return {
        ...state,
        authError: true,
      };

    case GET_SIGNOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        data: {
          ...state.data,
          isAuth: false,
          token: "",
        },
      };

    default:
      return state;
  }
};
