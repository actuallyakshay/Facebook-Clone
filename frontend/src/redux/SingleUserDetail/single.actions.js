import axios from "axios";
import {
  PROFILE_INFO,
  SINGLE_ERROR,
  SINGLE_LOADING,
  SINGLE_SUCCESS,
  USER_DATA,
} from "./single.types";

export const getSingleUserDetails = (_id) => (dispatch) => {
  dispatch({ type: SINGLE_LOADING });
  axios
    .get(`https://graceful-visor-slug.cyclic.app/user/${_id}`)
    .then((res) => dispatch({ type: SINGLE_SUCCESS, payload: res.data }))
    .catch((err) => dispatch({ type: SINGLE_ERROR }));
};

export const get_profile_info = (id) => (dispatch) => {
  axios
    .get(`https://graceful-visor-slug.cyclic.app/user/${id}`)
    .then((res) => dispatch({ type: PROFILE_INFO, payload: res.data }))
    .catch((e) => console.log(e.massage));

  axios.get(`https://graceful-visor-slug.cyclic.app/data`).then((res) => {
    const validate = res.data?.filter((elem) => {
      return elem?.user?._id == id;
    });
    dispatch({ type: USER_DATA, payload: validate });
  });
};
