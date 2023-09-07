import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './counter';
import authReducer from './auth';


// store 만들고 slice에 설정한 Reducer들 전달
const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});

export default store;
