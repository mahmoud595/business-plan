import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setAnswer } from "../../../store/actions/questionsActions";

export const QuestionnairePage = () => {
  const [selectedSection, setSelectedSection] = useState([]);
  const [sectionType, setSectionType] = useState(1);
  const [selectedValue, setSelectedValue] = useState({});
  const [visible, setVisible] = useState({ 1: true });
  const [available, setAvailable] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const { section1, section2 } = useSelector(({ questions }) => {
    const { section1, section2 } = questions;
    return {
      section1,
      section2,
    };
  });
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const clickHandler = (e) => {
    setSelectedValue({ ...selectedValue, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    setSelectedSection(section1);
  }, [section1]);
  useEffect(() => {
    if (sectionType === 1) {
      if (selectedValue[1] === "B2B") {
        setVisible({ 1: true, 2: true });
      } else if (selectedValue[1] === "B2C") {
        setVisible({ 1: true, 3: true });
      } else if (selectedValue[1] === "both") {
        setVisible({ 1: true, 2: true, 3: true });
      }
    } else if (sectionType === 2) {
      setAvailable(selectedValue[4] === "yes");
    }
  }, [selectedValue, sectionType]);

  const nextHandler = () => {
    if (sectionType === 1) {
      setSectionType(2);
      setSelectedSection(section2);
    } else {
      dispatch(setAnswer(selectedValue));
      navigate("/summary");
    }
  };

  const numberHandler = (e) => {
    if (available) {
      setSelectedValue({ ...selectedValue, [e.target.name]: +e.target.value });
    }
  };
  useEffect(() => {
    const check = Object.keys(visible).every((val) => {
      if (sectionType === 1) {
        return selectedValue[val];
      } else {
        return true;
      }
    });
    setDisabled(!check);
  }, [selectedValue, visible, sectionType]);
  return (
    <div className="h-100 align-items-center  d-flex">
      <div className="col-5 offset-4  d-flex flex-column  bg-white p-5 rounded">
        {selectedSection.length &&
          selectedSection.map((question) => (
            <div
              key={question.id}
              className="w-100"
              hidden={![4, 5].includes(question.id) && !visible[question.id]}
            >
              <p>
                {question.id}) {question.text}
              </p>

              <>
                {sectionType === 2 && question.id === 5 ? (
                  <div class="form-outline">
                    <input
                      type="number"
                      onkeyup="if(this.value<0)this.value=1"
                      onblur="if(this.value<0)this.value=1"
                      id={question.id}
                      className="form-control"
                      min="1"
                      onChange={numberHandler}
                      readOnly={!available}
                      name={question.id}
                    />
                  </div>
                ) : (
                  <>
                    {question.answers.map((answer) => (
                      <div class="form-check" key={answer.id}>
                        <input
                          className="form-check-input"
                          type="radio"
                          name={question.id}
                          onClick={clickHandler}
                          value={answer.text}
                        />
                        <label className="form-check-label" for={question.id}>
                          {answer.text}
                        </label>
                      </div>
                    ))}
                  </>
                )}
              </>
            </div>
          ))}
        <button
          className="btn btn-primary h-auto mt-5"
          onClick={nextHandler}
          disabled={disabled}
        >
          Next
        </button>
      </div>
    </div>
  );
};
