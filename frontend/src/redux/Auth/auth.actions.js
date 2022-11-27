import { useToast } from "@chakra-ui/react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getSingleUserDetails, get_profile_info } from "../SingleUserDetail/single.actions";
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
    .post(`https://graceful-visor-slug.cyclic.app/user/signup`, form)
    .then((res) =>
      dispatch({ type: GET_AUTH_SIGNUP_SUCCESS, payload: res.data })
    );
};

export const getLOGIN = (form) => async (dispatch) => {
  dispatch({ type: GET_AUTH_LOADING });

  try {
    let res = await axios.post(
      `https://graceful-visor-slug.cyclic.app/user/login`,
      form
    );
    dispatch({ type: GET_AUTH_SUCCESS, payload: res.data.token });
    let [email, id, passowrd] = res.data.token.split(":");
    dispatch(getSingleUserDetails(id));
  } catch (e) {
    dispatch({ type: GET_AUTH_ERROR });
  }
};

export const getUpdateProfile = (body, token, id) => (dispatch) => {
  console.log({ body, token });
  axios
    .patch(`https://graceful-visor-slug.cyclic.app/user`, body, {
      headers: {
        token: token,
      },
    })
    .then((res) => dispatch(get_profile_info(id)))
    .catch((e) => console.log(e.message));
};

export const sign_out_func = () => (dispatch) => {
  dispatch({ type: GET_SIGNOUT });
};

// export const add_friend = (body, token) => (dispatch) => {
//   const toast = useToast();
//   axios
//     .patch(`https://graceful-visor-slug.cyclic.app/user`, body, {
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
