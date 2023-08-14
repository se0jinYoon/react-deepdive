import Section from '../UI/Section';
import TaskForm from './TaskForm';
import useHttp from '../../hooks/use-http';

const NewTask = (props) => {
  const {isLoading, error, sendRequest: sendTaskRequest} = useHttp();

  const createTask = (taskText, taskData) => {
    const generatedId = taskData.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, text: taskText };

    props.onAddTask(createdTask);
  }

  const enterTaskHandler = async (taskText) => {
    sendTaskRequest({
      url: 'https://react-http-ab392-default-rtdb.firebaseio.com/tasks.json', 
      method:'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: { text: taskText }
      // bind는 함수를 호출 즉시 실행하지 않게 해준다
      // 첫 번째 인자는 호출할 때 사용할 this 값 정의하기
      // 두 번째 인자는 호출 예정인 함수가 받는 첫 번째 인자로 이 경우에는 taskText
    }, createTask.bind(null, taskText)
  );
};

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
