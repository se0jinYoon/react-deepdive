import { uiActions } from './ui-slice';
import { cartActions } from './cart-slice';

//thunk (데이터 받아오기)
export const fetchCartData = () => {
  return async (dispatch) => {
    // try-catch로 묶고 싶다면 async를 사용해야 한다
    const fetchData = async () => {
        const response = await fetch('https://react-http-ab392-default-rtdb.firebaseio.com/cart.json');

        if (!response.ok) {
            throw new Error('장바구니 항목을 가져올 수 없음')
        }
        const data = await response.json();

        return data;
    }

    try {
        const cartData = await fetchData();
        dispatch(cartActions.replaceCart({
            items: cartData.items || [],
            totalQuantity: cartData.totalQuantity
        }));
    } catch (error) {
        dispatch(
            uiActions.showNotification({
              status: 'error',
              title: 'Error!',
              message: '장바구니 받아오기 실패',
            })
          );
    }
  };
};

//thunk (데이터 전송)
export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: 'pending',
        title: 'Sending...',
        message: '장바구니 전송중',
      })
    );

    const sendRequest = async () => {
      const response = await fetch('https://react-http-ab392-default-rtdb.firebaseio.com/cart.json', {
        method: 'PUT', // POST는 데이터를 추가, PUT는 데이터를 오버라이드
        body: JSON.stringify({items: cart.items, totalQuantity: cart.totalQuantity}),
      });

      if (!response.ok) {
        throw new Error('장바구니 전송 실패');
      }
    };

    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'Success...',
          message: '장바구니 전송 성공!',
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: '장바구니 전송 실패',
        })
      );
    }
  };
};
