// link를 대신해서 NavLink를 사용할 수 있음
// NavLink는 현재 활성인 라우터가 to=''의 값으로 시작하는지 확인
// 이 경우 /는 모든 라우터에 isActive하게 되므로 end 프로퍼티를 추가해야 함
// end 프로퍼티는 현재 활성화된 경로가 to=''로 끝날 때만 이 링크가 활성화 됐다고 간주한다.
// className을 동적으로 추가할 수 있는데 이때 className으로 익명함수를 받음
// 이 익명함수는 {isActive}라는 react-router-dom이 제공하는 객체값(bool값)을 매개변수로 받음

import { NavLink } from 'react-router-dom';

import classes from './MainNavigation.module.css';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? classes.active : undefined)} end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" className={({ isActive }) => (isActive ? classes.active : undefined)}>
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
