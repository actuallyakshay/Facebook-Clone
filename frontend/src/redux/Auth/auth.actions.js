import { useToast } from "@chakra-ui/react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getSingleUserDetails,
  get_profile_info,
} from "../SingleUserDetail/single.actions";
import {
  GET_AUTH_ERROR,
  GET_AUTH_LOADING,
  GET_AUTH_SIGNUP_LOADING,
  GET_AUTH_SIGNUP_SUCCESS,
  GET_AUTH_SUCCESS,
  GET_SIGNOUT,
} from "./auth.types";

export const getAuth = (form) => (dispatch) => {
  console.log("form", form);
  dispatch({ type: GET_AUTH_SIGNUP_LOADING });
  axios
    .post(`${process.env.REACT_APP_URL}/user/signup`, form)
    .then((res) =>
      dispatch({ type: GET_AUTH_SIGNUP_SUCCESS, payload: res.data })
    );
};

export const getLOGIN = (form) => async (dispatch) => {
  dispatch({ type: GET_AUTH_LOADING });

  try {
    let res = await axios.post(
      `${process.env.REACT_APP_URL}/user/login`,
      form
    );
    dispatch({ type: GET_AUTH_SUCCESS, payload: res.data.token });
    console.log(res.data.token);
    let [email, id, passowrd] = res.data.token.split(":");
    dispatch(getSingleUserDetails(id));
  } catch (e) {
    dispatch({ type: GET_AUTH_ERROR });
  }
};

export const getUpdateProfile = (body, token, id) => async (dispatch) => {
  try {
    let res = await axios.patch(
      `${process.env.REACT_APP_URL}/user`,
      body,
      {
        headers: {
          token: token,
        },
      }
    );
    dispatch(getSingleUserDetails(id));
  } catch (e) {
    console.log(e.message);
  }
};

export const sign_out_func = () => (dispatch) => {
  dispatch({ type: GET_SIGNOUT });
};

// export const add_friend = (body, token) => (dispatch) => {
//   const toast = useToast();
//   axios
//     .patch(`${process.env.REACT_APP_URL}/user`, body, {
//       headers: {
//         token: token,
//       },
//     })
//     .then((res) => {
//       if (res.data !== "Already exist") {
//         toast({
//           title: "Hey ! Congo 👏",
//           description: `You have added ${body.user_name} as a friend `,
//           status: "success",
//           duration: 2000,
//           position: "top",
//           isClosable: true,
//         });
//       } else {
//         toast({
//           title: "Ooppss!! 😰",
//           description: `${body.user_name} already added in your friendlist`,
//           status: "success",
//           duration: 9000,
//           isClosable: true,
//         });
//       }
//     });
// };
