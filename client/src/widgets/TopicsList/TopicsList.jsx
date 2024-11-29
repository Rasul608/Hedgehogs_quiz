import React from "react";
import Button from "../../shared/ui/Button/Button";
import TopicCard from "../TopicCard/TopicCard";
import './topicList.css'

export default function TopicsList({ topics, setTopics }) {
  console.log(topics,9999);
  
  return (
    <div className="card-container">
      {topics?.length !== 0 ? (
        topics?.map((topic) => (
          <TopicCard key={topic.id} topic={topic} setTopics={setTopics} />
        ))
      ) : (
        <h3>Нет данных по задачам</h3>
      )}
    </div>
  );
}
