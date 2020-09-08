import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { IApplicationState } from '../../../store/types';
import { Status } from './contents/CreateOfferingsContent/all-steps/schema/create-offerings.value';
import { Dispatch } from 'redux';

function DashboardSidebarNavigationV2() {
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
      <div className="dashboard-nav" style={{ height: '100%' }}>
        <div className="dashboard-nav-inner" style={{ height: '100%' }}>
          <ul>
            <li>
              <Link to={'/dashboard'}>
                <i className="fa fa-dashboard" /> Dashboard
              </Link>
            </li>
            <li>
              <Link to={'/'}>
                <i className="sl sl-icon-envelope-open" /> Inbox
              </Link>
            </li>
            <li>
              <Link to={'/'}>
                <i className="fa fa-calendar" /> My Calendar
              </Link>
            </li>
          </ul>
          <ul>
            <li className={'active'}>
              <a>
                <i className="sl sl-icon-layers" /> My Lesson-Ads
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
          </ul>
          <ul data-submenu-title="Accounts">
            <li>
              <Link to={'settings'}>
                <i className="im im-icon-Administrator" /> Account Page
              </Link>
            </li>
            <li>
              <Link to={'my-profile'}>
                <i className="im im-icon-Profile" /> Profile Page
              </Link>
            </li>
            <li>
              <Link to={'reviews'}>
                <i className="sl sl-icon-star" /> Reviews
              </Link>
            </li>
            <li>
              <Link to={'wallet'}>
                <i className="im im-icon-Wallet-2" /> Wallet
              </Link>
            </li>
          </ul>
          <ul data-submenu-title="Settings">
            <li>
              <Link to={''}>
                <i className="im im-icon-Bell" /> Notification Options
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* Navigation / End */}
    </>
  );
}

export default DashboardSidebarNavigationV2;
