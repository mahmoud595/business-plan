import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

export const HomePage = () => {
  return (
    <div className="d-flex flex-row justify-content-center align-items-center h-100 container">
      <div className="h-auto">
        <Link to="/questionnaire">
          <button type="button" className="btn btn-primary h-auto">
            Generate Business Plan
          </button>
        </Link>
      </div>
    </div>
  );
};
