import React from 'react';
import { Link } from 'react-router-dom';
import { logOut } from '../../features/auth/auth.localstorage.service';
import { useDispatch, useSelector } from 'react-redux';
import { IApplicationState } from '../../../store/types';
import { Status } from './contents/CreateOfferingsContent/all-steps/schema/create-offerings.value';
import { Dispatch } from 'redux';
import { logoutUserFromStoreAction } from '../../features/auth/sign-in/sign-in.actions';

function DashboardSidebarNavigation() {
  const dispatch: Dispatch = useDispatch();

  const { offerings } = useSelector(
    (state: IApplicationState) => state.offeringReducer,
  );

  return (
    <>
      {/* Navigation ================================================== */}
      {/* Responsive Navigation Trigger */}
      <a className="dashboard-responsive-nav-trigger">
        <i className="fa fa-reorder" /> Dashboard Navigation
      </a>
      <div className="dashboard-nav">
        <div className="dashboard-nav-inner">
          <ul data-submenu-title="Main">
            <li>
              <Link to={`/dashboard`}>
                <i className="im im-icon-Monitor-5" /> Dashboard
              </Link>
            </li>
            <li>
              <Link to={`inbox`}>
                <i className="sl sl-icon-envelope-open" /> Inbox
                <span className="nav-tag messages">2</span>
              </Link>
            </li>
            <li>
              <Link to={`bookings`}>
                <i className="fa fa-calendar-check-o" /> Bookings
              </Link>
            </li>
            <li>
              <Link to={`wallet`}>
                <i className="sl sl-icon-wallet" /> Wallet
              </Link>
            </li>
          </ul>
          <ul data-submenu-title="Listings">
            <li className={'active'}>
              <a>
                <i className="sl sl-icon-layers" /> My Offerings
              </a>
              <ul>
                <li>
                  <Link to={`active-offerings`}>
                    Active{' '}
                    {offerings.length > 0 && (
                      <span className="nav-tag green">
                        {
                          offerings?.filter(o => o.status === Status.active)
                            .length
                        }
                      </span>
                    )}
                  </Link>
                </li>
                <li>
                  <Link to={`offerings-for-reviews`}>
                    For reviews{' '}
                    {offerings.length > 0 && (
                      <span className="nav-tag yellow">
                        {
                          offerings?.filter(o => o.status === Status.forReview)
                            .length
                        }
                      </span>
                    )}
                  </Link>
                </li>
                <li>
                  <Link to={`inactive-offerings`}>
                    Inactive{' '}
                    {offerings.length > 0 && (
                      <span className="nav-tag red">
                        {
                          offerings?.filter(o => o.status === Status.inactive)
                            .length
                        }
                      </span>
                    )}
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to={`reviews`}>
                <i className="sl sl-icon-star" /> Reviews
              </Link>
            </li>
            {/*<li>*/}
            {/*  <Link to="dashboard-bookmarks">*/}
            {/*    <i className="sl sl-icon-heart" /> Bookmarks*/}
            {/*  </Link>*/}
            {/*</li>*/}
            {/*<li>*/}
            {/*  <Link to="dashboard-add-listing">*/}
            {/*    <i className="sl sl-icon-plus" /> Demo Add Listing*/}
            {/*  </Link>*/}
            {/*</li>*/}
            <li>
              <Link to={`create-offerings`}>
                <i className="sl sl-icon-plus" /> Create Offerings
              </Link>
            </li>
            <li>
              <Link to={`courses`}>
                <i className="im im-icon-Professor" /> Courses
              </Link>
            </li>
            <li>
              <Link to={`virtual-classrooms`}>
                <i className="im im-icon-Teacher" /> Virtual Classrooms
              </Link>
            </li>
          </ul>
          <ul data-submenu-title="Account">
            <li>
              <Link to={`settings`}>
                <i className="fa fa-cog" /> Settings
              </Link>
            </li>
            <li>
              <Link to={`resume`}>
                <i className="im im-icon-Letter-Open" /> Résumé
              </Link>
            </li>
            <li>
              <Link to={`my-profile`}>
                <i className="sl sl-icon-user" /> My Profile
              </Link>
            </li>
            <li>
              <a
                onClick={() => {
                  dispatch(logoutUserFromStoreAction());
                  logOut();
                }}
              >
                <i className="sl sl-icon-power" /> Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* Navigation / End */}
    </>
  );
}

export default DashboardSidebarNavigation;
