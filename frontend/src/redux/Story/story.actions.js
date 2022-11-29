import axios from "axios";
import { GET_STORY, SINGLE_STORY_DATA } from "./story.types";

export const add_story_to_db = (token, url) => (dispatch) => {
  let body = {
    image: url,
  };

  axios
    .post(`${process.env.REACT_APP_URL}/story`, body, {
      headers: {
        token: token,
      },
    })
    .then((res) => console.log(res.data));
};

export const get_stories = () => (dispatch) => {
  axios
    .get(`${process.env.REACT_APP_URL}/story`)
    .then((res) => dispatch({ type: GET_STORY, payload: res.data }));
};


export const single_story = (el) => (dispatch) => {
    dispatch({ type: SINGLE_STORY_DATA, payload : el });
}
