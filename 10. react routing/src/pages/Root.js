// outlet은 chlidren들이 렌더링되어야할 위치를 정해준다
import { Outlet } from 'react-router-dom';
import MainNavigation from '../components/MainNavaigation';

// child route 요소들이 어느 위치에 렌더링 되어야할지 정하는 부모 컴포넌트
function RootLayout() {
  return (
    <>
      <MainNavigation />
      <main>
      <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
