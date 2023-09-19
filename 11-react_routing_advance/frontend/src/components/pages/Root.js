import { Outlet } from 'react-router-dom';
import MainNavigation from '../MainNavigation';
import EventsNavigation from '../EventsNavigation';

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
