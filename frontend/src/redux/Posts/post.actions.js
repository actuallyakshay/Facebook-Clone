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
    let res = await axios.post(`http://localhost:8080/data`, body, {
      headers: {
        token: token,
      },
    });
    dispatch(getAllPOSTS());
  } catch (error) {
    console.log(error);
  }
};

export const getAllPOSTS = () => async (dispatch) => {
  dispatch({ type: GET_POST_LOADING });
  await axios
    .get(`http://localhost:8080/data`)
    .then((res) => {
      dispatch({ type: GET_POST_SUCCESS, payload: res.data });

    })
    .catch((err) => dispatch({ type: GET_POST_ERROR }));
};

export const PUT_LIKE = (_id, body) => async (dispatch) => {
  try {
    let res = await axios.patch(`http://localhost:8080/data/${_id}`, body);
    dispatch(getAllPOSTS());
  } catch (error) {
    console.log(error);
  }
};

export const PUT_COMMENT = (_id, body) => async (dispatch) => {
  try {
    let res = await axios.patch(`http://localhost:8080/data/${_id}`, body);
    dispatch(getAllPOSTS());
  } catch (error) {
    console.log(error);
  }
};

export const POST_DELETE = (id, token) => async (dispatch) => {
  try {
    let res = await axios.delete(`http://localhost:8080/data/${id}`, {
      headers: {
        token: token,
      },
    });
    dispatch(getAllPOSTS());
  } catch (error) {
    console.log(error);
  }
};
