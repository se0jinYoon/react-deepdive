import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { uiActions } from './store/ui-slice';
import Notification from './components/UI/Notification';

import { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// 초기실행 막기 위한 전역변수
let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  // useSelector를 사용해서 새로운 값이 업데이트 될 때마다 cart 갱신 됨
  const cart = useSelector(state => state.cart);
  const notification = useSelector(state => state.ui.notification);

  // dependency에 cart를 넣었기 때문에 cart가 업데이트 될 때마다 PUT 요청을 보내서 백엔드에 데이터 전송
  useEffect(() => {
    const sendCartData = async () => {
      dispatch(
        uiActions.showNotification({
          status: 'pending',
          title: 'Sending...',
          message: '장바구니 전송중'
        })
      );
      const response = await fetch('https://react-http-ab392-default-rtdb.firebaseio.com/cart.json', {
        method: 'PUT', // POST는 데이터를 추가, PUT는 데이터를 오버라이드
        body: JSON.stringify(cart),
      });

      if (!response.ok) {
        throw new Error('장바구니 전송 실패')
      }

      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'Success...',
          message: '장바구니 전송 성공!'
        })
      ); 
    };

    // 초기 실행 막기!
    if (isInitial) {
      isInitial = false;
      return;
    }

    sendCartData().catch(error => {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: '장바구니 전송 실패'
        })
      );
    });
    }, [cart, dispatch]);


  return (
    <Fragment>
      {notification && <Notification status={notification.status} title={notification.title} message={notification.message}/>}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
