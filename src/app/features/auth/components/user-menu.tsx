import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IApplicationState } from '../../../../store/types';

function UserMenu() {
  const { email } = useSelector(
    (state: IApplicationState) => state.signInReducer,
  );
  return (
    <div className="user-menu">
      <div className="user-name">
        <span>
          {email ? (
            <img
              src="../../../../assets/images/dashboard-avatar-dev.jpg"
              alt="avatar"
            />
          ) : (
            '😥'
          )}
        </span>
        {email ? email : 'You are not authorized here'}
      </div>
      <ul>
        <li>
          <Link to="dashboard">
            <i className="sl sl-icon-settings" /> Dashboard
          </Link>
        </li>
        <li>
          <Link to="dashboard-messages">
            <i className="sl sl-icon-envelope-open" /> Messages
          </Link>
        </li>
        <li>
          <Link to="dashboard-bookings">
            <i className="fa fa-calendar-check-o" /> Bookings
          </Link>
        </li>
        <li>
          <Link to="/">
            <i className="sl sl-icon-power" /> Logout
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default UserMenu;
