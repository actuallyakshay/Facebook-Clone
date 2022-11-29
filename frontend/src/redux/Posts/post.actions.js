import axios from "axios";
import { useSelector } from "react-redux";
import { getSingleUserDetails } from "../SingleUserDetail/single.actions";
import {
  GET_POST_ERROR,
  GET_POST_LOADING,
  GET_POST_SUCCESS,
  UPLOAD_POST,
} from "./post.types";

export const uploadPost = (body, token) => async (dispatch) => {
  try {
    let res = await axios.post(
      `${process.env.REACT_APP_URL}/data`,
      body,
      {
        headers: {
          token: token,
        },
      }
    );
    dispatch(getAllPOSTS());
  } catch (error) {
    console.log(error);
  }
};

export const getAllPOSTS = (page) => async (dispatch) => {
  dispatch({ type: GET_POST_LOADING });
  await axios
    .get(`${process.env.REACT_APP_URL}/data?page=${page}&limit=20`)
    .then((res) => {
      dispatch({ type: GET_POST_SUCCESS, payload: res.data });
    })
    .catch((err) => dispatch({ type: GET_POST_ERROR }));
};

export const PUT_LIKE = (_id, body) => async (dispatch) => {
  try {
    let res = await axios.patch(
      `${process.env.REACT_APP_URL}/data/${_id}`,
      body
    );
    dispatch(getAllPOSTS());
  } catch (error) {
    console.log(error);
  }
};

export const PUT_COMMENT = (_id, body) => async (dispatch) => {
  try {
    let res = await axios.patch(
      `${process.env.REACT_APP_URL}/data/${_id}`,
      body
    );
    dispatch(getAllPOSTS());
  } catch (error) {
    console.log(error);
  }
};

export const POST_DELETE = (id, token) => async (dispatch) => {
  try {
    let res = await axios.delete(
      `${process.env.REACT_APP_URL}/data/${id}`,
      {
        headers: {
          token: token,
        },
      }
    );
    dispatch(getAllPOSTS());
    console.log("res.data",res.data)
  } catch (error) {
    console.log(error);
  }
};
