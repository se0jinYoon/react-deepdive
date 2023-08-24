import { useSelector, useDispatch } from 'react-redux';

import {counterActions} from '../store/index'
import classes from './Counter.module.css';



const Counter = () => {
  // store에서 사용하고자 하는 state값을 뽑아오는 함수를 매개변수로 넣어주기
  // useSelector사용시 자동으로 이 component를 state저장소에 구독을 설정하게된다.
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showCounter);

  // 매개변수로 아무것도 받지 않음
  // dispatch function을 반환한다
  const dispatch = useDispatch();

  // 받아온 dispatch 함수를 통해서 store에 action을 보낸다.
  // 이때 보내는 action 객체는 store에 저장된 값을 그대로 사용해야한다. ex)type: 'increment'
  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };
  const increaseHandler = () => {
    dispatch(counterActions.increase(5)); // {type: redux가 만든 고유 Identifier, payload: 5}
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  }; 
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
