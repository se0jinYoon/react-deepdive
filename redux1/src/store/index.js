import {createSlice, configureStore} from '@reduxjs/toolkit'

const initialState = { counter: 0, showCounter: true };

// 전역상태 slice 미리 만들어서 사용하기
// name : slice마다 필요한 식별자
// initialState: 초기 state값
// reducers: 관련된 메서드 정의해두기
const counterSlice = createSlice({
    name: 'counter',
    initialState: initialState,
    // reducer들은 가장 최신의 state와 action을 받아올 수 있음
    // reducer를 trigger하는 액션은 이제 필요하지 않음 (알아서 trigger해줌)
    // 데이터를 전달해야 하는 경우에 액션을 사용하게 된다
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter = state.counter + action.payload;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        },
    }
});

// store 만들고 slice에 설정한 Reducer들 전달
const store = configureStore({
    reducer: counterSlice.reducer
});

export const counterActions = counterSlice.actions

export default store;
