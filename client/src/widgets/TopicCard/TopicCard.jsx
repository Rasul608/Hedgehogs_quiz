import styles from "./TopicCard.module.css";
import React, { useState } from "react";
import Button from "../../shared/ui/Button/Button";
import { useNavigate } from "react-router-dom";

export default function TopicCard({ topic, setTopics }) {
  const navigate = useNavigate();

  function redirectButtonHandler() {
    navigate(`/topics/${topic.id}`);
  }

  return (
    <div
      className="card mb-3"
      // style={{ }}
      style={{ maxHeight: "480px", maxWidth: "500px", display: 'flex', justifyContent: 'space-between', gap: '10px' }}
    >
      <img src={topic.img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{topic.title}</h5>
        <span
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          <button
            type="button"
            className="btn btn-outline-info"
            onClick={redirectButtonHandler}
          >
            Подробнее
          </button>
        </span>
      </div>
    </div>
    // <div className={styles.container} key={topic.title}>
    //   <span>{topic.title}</span>
    //   <span>{topic.body}</span>
    //   <Button text="Подробнее" color="blue" onClick={redirectButtonHandler} />
    // </div>
  );
}
