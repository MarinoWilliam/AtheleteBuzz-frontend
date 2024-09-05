import React from 'react';
import { useSelector } from 'react-redux';
import SideNavbar from '../sideNavbar/sideNavbar';
import { Outlet } from 'react-router-dom';
import { selectIsCollapse } from '../../store/page/page.selector';

const Layout = () => {
 const isCollapsed = useSelector(selectIsCollapse)
  return (
    <div className="flex">
      <SideNavbar />
      <main className={`w-full ${isCollapsed ? 'ml-12' : 'ml-48'}`}  >
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
