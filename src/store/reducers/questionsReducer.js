import { SET_ANSWER } from "../types/questionsTypes";

const initialState = {
  section1: [
    {
      id: 1,
      text: "Is your business model B2C or B2B or both? ",
      answers: [
        { id: 1, text: "B2C" },
        { id: 2, text: "B2B" },
        { id: 3, text: "both" },
      ],
      selectedAnswer: null,
    },
    {
      id: 2,
      text: "Do you target all age brackets?",
      answers: [
        { id: 1, text: "yes" },
        { id: 2, text: "no" },
      ],
      selectedAnswer: null,
    },
    {
      id: 3,
      text: "Do you target all industries?",
      answers: [
        { id: 1, text: "yes" },
        { id: 2, text: "no" },
      ],
      selectedAnswer: null,
    },
  ],

  section2: [
    {
      id: 4,
      text: " Did you have an investment?",
      answers: [
        { id: 1, text: "yes" },
        { id: 2, text: "no" },
      ],
      selectedAnswer: null,
    },
    {
      id: 5,
      text: "how much was the investment?",
      selectedAnswer: null,
    },
  ],
};

export const questionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ANSWER:
      console.log(action.payload.values);
      const questions = [...state.section1, ...state.section2];
      questions.forEach((question) => {
        console.log(action.payload.values[question.id]);

        if (action.payload.values[question.id]) {
          question.selectedAnswer = action.payload.values[question.id];
        } else {
          question.selectedAnswer = null;
        }
      });
      return {
        section1: questions.splice(0, 3),
        section2: questions.splice(0, 2),
      };
    default:
      return state;
  }
};
