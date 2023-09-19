// createBrowserRouter: route (path)를 정의하는 함수
// RouterProvider: 정의된 router을 사용해야 한다고 리액트에게 알리기 위함
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from './pages/Home';
import ProductsPage from './pages/Products';
import RootLayout from './pages/Root';
import ErrorPage from './pages/Error';
import ProductDetailPage from './pages/ProductDetail';

// 용어정리
// path: domain뒤에 정의된 부분 (https://example.com/pathpath)

// 매개변수로 [라우트 정의 객체] 넣어주기
// 각 라우트 객체는 property를 가짐
// path: 라우트가 활성화될 경로, element: 어떤 component가 연결되어야 하는지
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <HomePage /> }, // 메인페이지
      { path: '/products', element: <ProductsPage />}, // 제품 목록 페이지
      { path: '/products/:productId', element: <ProductDetailPage />}, // 제품 디테일 페이지
    ]
  },
]);



function App() {
  // RouterProvider는 router prop을 꼭 가져야 함.
  // router prop의 값에는 createBrowserRouter로 생성한 router만 들어갈 수 있음
  return  <RouterProvider router={router}/>;
}

export default App;
