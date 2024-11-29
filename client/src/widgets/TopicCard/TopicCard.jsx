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
    <div className={styles.container} key={topic.title}>
      <span>{topic.title}</span>
      <span>{topic.body}</span>
      <Button text="Подробнее" color="blue" onClick={redirectButtonHandler} />
    </div>
  );
}
