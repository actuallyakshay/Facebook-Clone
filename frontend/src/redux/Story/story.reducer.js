import { GET_STORY, SINGLE_STORY_DATA } from "./story.types";

const iState = {
  stories: [],
  singleStory: {},
};

export const storyReducer = (state = iState, { type, payload }) => {
  switch (type) {
    case GET_STORY:
      return {
        ...state,
        stories: payload,
      };
    case SINGLE_STORY_DATA:
      return {
        ...state,
        singleStory: payload,
      };
    default:
      return state;
  }
};
