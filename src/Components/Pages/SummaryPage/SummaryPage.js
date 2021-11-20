import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
export const SummaryPage = () => {
  const [questions, setQuestions] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const { section1, section2 } = useSelector(({ questions }) => {
    const { section1, section2 } = questions;
    return {
      section1,
      section2,
    };
  });
  useEffect(() => {
    const questions = [...section1, ...section2];
    const answeredQuestions = questions.filter((question) => {
      return question.selectedAnswer;
    });
    setQuestions(answeredQuestions);
  }, [section1, section2]);

  const submitHandler = async () => {
    const res = await axios.post(
      "https://business-plan.free.beeceptor.com/my/api/path",
      questions
    );
    setSubmitted(true);
  };
  return (
    <div className="h-100 align-items-center  d-flex">
      <div className="col-5 offset-4  d-flex flex-column  bg-white p-5 rounded">
        {questions.length &&
          questions.map((question) => (
            <>
              <h6 className="font-weight-bold text-capitalize font-size-18">
                {question.id} ) {question.text}
              </h6>
              <p className="font-weight-bold text-primary text-capitalize">
                A) {question.selectedAnswer}
              </p>
            </>
          ))}

        <button className="btn btn-primary" onClick={submitHandler}>
          Submit
        </button>
        {submitted ? (
          <div class="alert alert-success mt-5" role="alert">
            your answers are submitted successfully
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
