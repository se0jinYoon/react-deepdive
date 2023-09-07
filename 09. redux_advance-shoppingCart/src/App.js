import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { sendCartData, fetchCartData } from './store/cart-actions';

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

  // dispatch dependency는 절대 변하지 않으므로 사실상 dependency 없이 실행되는 것
  // 따라서 앱이 로딩될 때 한 번만 실행되어 장바구니 항목을 가져오게 됨.
  useEffect(() => {
    dispatch(fetchCartData())
  }, [dispatch])

  // dependency에 cart를 넣었기 때문에 cart가 업데이트 될 때마다 PUT 요청을 보내서 백엔드에 데이터 전송
  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (cart.changed) {
      dispatch(sendCartData(cart))
    }
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
