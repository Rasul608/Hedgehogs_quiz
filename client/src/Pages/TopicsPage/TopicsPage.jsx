import { useEffect, useState } from 'react';
import TopicsList from '../../widgets/TopicsList/TopicsList';
import { message as antMessage } from 'antd';
import TopicApi from '../../entities/topic/TopicApi';

export default function TopicsPage() {
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadTopics = async () => {
    setLoading(true);
    try {
      const { data, message, error, statusCode } = await TopicApi.getTopics();
      if (error) {
        antMessage.error(error);
        return;
      }
      antMessage.success(message);
      if (statusCode === 200) {
        setTopics(data); 
      }
    } catch (error) {
      antMessage.error(error.message); 
      console.log(error);
    } finally {

      antMessage.info('Загрузка завершена');
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTopics();
  }, []);

  return (
    <div>
      {loading && <h3>Загрузка...</h3>}
      <TopicsList topics={topics} setTopics={setTopics} />
    </div>
  );
}
