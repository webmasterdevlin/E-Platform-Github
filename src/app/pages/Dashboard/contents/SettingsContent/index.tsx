import React from 'react';
import DashboardTitleBar from '../../dashboard-title-bar';
import { Link } from 'react-router-dom';

function SettingsContent() {
  return (
    <div className="dashboard-content">
      <DashboardTitleBar title={'Settings'} />
      <h2>//TODO: Accordion design</h2>
      <h3> https://material-ui.com/components/accordion/</h3>
      <h3>https://www.seek.com.au/settings</h3>
      <div className={'d-flex flex-column justify-content-center'}>
        {/* Change Password */}
        <div className="col-md-9 mb-5">
          <div className="dashboard-list-box margin-top-0">
            <h4 className="gray">Change Password</h4>
            <div className="dashboard-list-box-static">
              {/* Change Password */}
              <div className="my-profile">
                <label className="margin-top-0">Current Password</label>
                <input type="password" />
                <label>New Password</label>
                <input type="password" />
                <label>Confirm New Password</label>
                <input type="password" />
                <button className="button margin-top-15">
                  Change Password
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Change Email */}
        <div className="col-md-9 mb-5">
          <div className="dashboard-list-box margin-top-0">
            <h4 className="gray">Change Email</h4>
            <div className="dashboard-list-box-static">
              {/* Change Email */}
              <div className="my-profile">
                <label className="margin-top-0">Email address</label>
                <input type="email" />
                <label>Confirm email address</label>
                <input type="email" />
                <label>Password</label>
                <input type="email" />
                <button className="button margin-top-15">Change Email</button>
              </div>
            </div>
          </div>
        </div>

        {/* Change Notifications */}
        <div className="col-md-9 mb-5">
          <div className="dashboard-list-box margin-top-0">
            <Link to={'/'}>
              <h4 className="gray">Notifications</h4>
            </Link>
          </div>
        </div>

        {/* Delete Account */}
        <div className="col-md-9 mb-5">
          <div className="dashboard-list-box margin-top-0">
            <Link to={'/'}>
              <h4 className="gray">Delete my account</h4>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SettingsContent;
