import React from 'react';
import DashboardTitleBar from '../../dashboard-title-bar';
import MyProfileForm from './components/my-profile-form';

const MyProfileContainer = () => {
  return (
    <div className="dashboard-content">
      <DashboardTitleBar title={'My Profile'} />

      <div className="row d-flex justify-content-center">
        <div className="col-lg-9">
          <MyProfileForm />
        </div>
      </div>
    </div>
  );
};

export default MyProfileContainer;
