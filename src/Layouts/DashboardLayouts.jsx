import React from 'react';
import Sidebar from '../dashboardcomponent/Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';

const DashboardLayouts = () => {
  return (
    <div className='grid md:grid-cols-12'>
      <div className=' col-span-3'>
        <Sidebar />
      </div>
      <div className=' col-span-9'>
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayouts;