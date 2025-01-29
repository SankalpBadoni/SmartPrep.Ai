import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div >
      <div>
        <Navbar />
      </div>
 
      <div >
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
