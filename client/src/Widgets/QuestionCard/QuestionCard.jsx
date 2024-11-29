import React, { useState } from "react";

function QuestionCard({ question }) {
  async function checkAnswer(params) {
    const [count, setCount] = useState();
  }
  return (
    <>
      <div
        className="card mb-3"
        style={{ maxHeight: "480px", maxWidth: "500px" }}
      >
        <div>
          <img src={question.img} className="card-img-top" alt="..." />
        </div>

        <div className="card-body">
          <h5 className="card-title">{question.question}</h5>
          <span
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "10px",
            }}
          >
            <button type="button" className="btn btn-outline-info">
              {question.answer1}
            </button>
            <button
              type="button"
              className="btn btn-outline-info"
              onClick={checkAnswer}
            >
              {question.currentAnswer}
            </button>
          </span>
        </div>
      </div>
    </>
  );
}

export default QuestionCard;
