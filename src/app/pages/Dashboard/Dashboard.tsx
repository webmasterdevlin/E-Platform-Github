import React, { useEffect } from 'react';
import DashboardTopNavigation from './dashboard-top-navigation';
import DashboardSidebarNavigation from './dashboard-sidebar-navigation';
import { Dispatch } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOfferingsAction } from './contents/MyOfferingsContent/my-offerings.actions';
import { IApplicationState } from '../../../store/types';
import Copyright from '../../components/copyright';
import { Outlet, useNavigate } from 'react-router-dom';
import DashboardSidebarNavigationV2 from './dashboard-sidebar-navigation-v2';
import DashboardTopNavigationV2 from './dashboard-top-navigation-v2';

const Dashboard = () => {
  const dispatch: Dispatch = useDispatch();

  const { offerings } = useSelector(
    (state: IApplicationState) => state.offeringReducer,
  );

  useEffect(() => {
    if (!offerings.length) dispatch(fetchOfferingsAction());
  }, []);

  return (
    <div id="wrapper">
      <DashboardTopNavigationV2 />
      <div id="dashboard">
        <DashboardSidebarNavigationV2 />
        <Outlet />
      </div>
      <Copyright />
    </div>
  );
};

export default Dashboard;
