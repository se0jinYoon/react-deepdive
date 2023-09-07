import { Fragment } from 'react';
import {useSelector} from 'react-redux';

import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth'
import UserProfier from './components/UserProfile'

function App() {
const isAuth = useSelector(state => state.auth.isAuthenticated);

  return (
    <Fragment>
      <Header />
      {!isAuth && <Auth />}
      {isAuth && <UserProfier />}
      <Counter />
    </Fragment>
  );
}

export default App;
