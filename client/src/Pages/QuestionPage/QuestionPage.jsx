// import React from 'react';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import QuestionApi from "../../entities/QuestionApi";
import QuestionCard from "../../Widgets/QuestionCard/QuestionCard";
import './question.css'

function QuestionPage(props) {
  const [questions, setQuestions] = useState([]);
  const [count,setCount] = useState(0)

  useEffect(() => {
    getQuestionById();
  }, []);
  const themeId = useParams();

  console.log(333, +themeId.id);

  async function getQuestionById(params) {
    const questionFromDB = await QuestionApi.getQuestionById(+themeId.id);

    setQuestions(questionFromDB.data);
  }
  const handleNext = () => {
    if (count < questions.length - 1) {
      setCount(count + 1); 
    }
  };

  const handlePrevious = () => {
    if (count > 0) {
      setCount(count - 1); 
    }
  };

  return (
    <>
    <div className="question-container">
      {questions.length > 0 && (
        <QuestionCard key={questions[count].id} question={questions[count]} />
      )}
      
      <div className="navigation-buttons">
        <button onClick={handlePrevious} disabled={count === 0}>
          Предыдущая
        </button>
        <button onClick={handleNext} disabled={count === questions.length - 1}>
          Следующая
        </button>
      </div>
    </div>
  </>
  );
}

export default QuestionPage;
