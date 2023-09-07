import React, { useEffect, useState } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useHttp from './hooks/use-http';

function App() {
  const [tasks, setTasks] = useState([]);

  // custom Hook을 부를 때 매개변수로 넘길 값들 포함해서 호출
  // custom Hook이 return하는 값 받아오기
  // 객체분해할당 통해서 원하는 값들 뽑아오기 
  // customHook의 함수를 호출하지만 alias를 통해서 custom Hook내부 함수 불러오기
  const {isLoading, error, sendRequest: fetchTasks} = useHttp();

  
  // useHttp 내부의 함수를 useEffect를 통해서 실행시키기
  useEffect(() => {
  // custom Hook에 전달해서 실행할 함수
  // firebase 에서 받아온 데이터들을 우리가 사용하려는 task로 변환해서 배열에 넣는 로직
  const transformTasks = tasksObj => {
    const loadedTasks = [];

    for (const taskKey in tasksObj) {
      loadedTasks.push({ id: taskKey, text: tasksObj[taskKey].text });
    }

    setTasks(loadedTasks);
  };

    fetchTasks(
      {url: 'https://react-http-ab392-default-rtdb.firebaseio.com/tasks.json'}, 
      transformTasks
    );
}, [fetchTasks]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks items={tasks} loading={isLoading} error={error} onFetch={fetchTasks} />
    </React.Fragment>
  );
}

export default App;
