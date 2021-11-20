import { SET_ANSWER } from "../types/questionsTypes";

export const setAnswer = (values) => {
  return {
    type: SET_ANSWER,
    payload: {
      values,
    },
  };
};
