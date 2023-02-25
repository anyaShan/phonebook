import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { AppBar } from 'components/AppBar/AppBar';
import { LayoutWrap } from './Layout.stuled';

export const Layout = () => {
  return (
    <LayoutWrap>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </LayoutWrap>
  );
};
