import { Outlet } from 'react-router-dom';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';

function BothHandF() {
  return (
    <>
      <HeaderComponent />
      <main className="flex-grow-1">
        <Outlet />
      </main>
      <FooterComponent />
    </>
  );
}

export default BothHandF;