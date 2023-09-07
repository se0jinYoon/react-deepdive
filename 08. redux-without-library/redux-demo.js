const redux = require('redux');

// reducer 함수
// 1. 기존 state (첫실행을 고려해서 default값 넣어주기)
// 2. 발송된 action (액션에 따라 다른 동작 실행하기)
// return : 새로운 state 반환 (보통 객체)
// http 요청, local storage에 저장하기 fetch하기 등등은 못함
const counterReducer = (state = { counter: 0 }, action) => {
    if(action.type === 'increment') {
        return {
            counter: state.counter + 1,
          }; 
    }

    if(action.type === 'decrement'){
        return {
            counter: state.counter - 1,
        }
    }
    return state;
};

// redux에서 제공하는 저장소 만드는 메소드
// 어떤 reducer가 이 저장소를 변경하는지 알려주기 위한 매개변수
const store = redux.createStore(counterReducer);

// 이 저장소를 구독하는 함수
// 상태가 변경될 때마다 trigger되게 됨
const counterSubscriber = () => {
  // 저장소의 가장 최신 state를 가져오는 메소드
  const latestState = store.getState();
  console.log(latestState);
};

// 리덕스에 해당 구독함수 인식시키기
// state가 변경될 때마다 구독함수 실행시키도록 하기
// 매개변수로 실행할 구독함수 넣기
store.subscribe(counterSubscriber);

// 액션 보내는 메소드
store.dispatch({ type: 'increment' });
store.dispatch({ type: 'decrement' });
