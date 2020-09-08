import React from 'react';
import { Link } from 'react-router-dom';
import UserMenu from '../../features/auth/components/user-menu';

const DashboardTopNavigation = () => {
  return (
    <>
      {/* Header Container ================================================== */}
      <header id="header-container" className="fixed fullwidth dashboard">
        {/* Header */}
        <div id="header" className="not-sticky">
          <div className="container">
            {/* Left Side Content */}
            <div className="left-side">
              {/* Logo */}
              <div id="logo">
                <Link to={'/'}>
                  <img src="../../../assets/images/logo.png" alt="" />
                </Link>
                <Link to={'/'} className="dashboard-logo">
                  <img src="../../../assets/images/logo2.png" alt="" />
                </Link>
              </div>
              {/* Mobile Navigation */}
              <div className="mmenu-trigger">
                <button className="hamburger hamburger--collapse" type="button">
                  <span className="hamburger-box">
                    <span className="hamburger-inner" />
                  </span>
                </button>
              </div>
              {/* Main Navigation */}
              <nav id="navigation" className="style-1">
                <ul id="responsive">
                  <li>
                    <a>Home</a>
                    <ul>
                      <li>
                        <Link to={'/home-two'}>Home 2</Link>
                      </li>
                      <li>
                        <Link to={'/home-2-airbnb'}>Home 2 (Airbnb)</Link>
                      </li>
                      <li>
                        <Link to={'/home-three'}>Home 3</Link>
                      </li>
                      <li>
                        <Link to={'/home-four'}>Home 4</Link>
                      </li>
                      <li>
                        <Link to={'/home-five'}>Home 5</Link>
                      </li>
                      <li>
                        <Link to={'/home-six'}>Home 6</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a>Listings</a>
                    <ul>
                      <li>
                        <a>List Layout</a>
                        <ul>
                          <li>
                            <a>With Sidebar</a>
                          </li>
                          <li>
                            <a>Full Width</a>
                          </li>
                          <li>
                            <a>Full Width + Map</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a>Grid Layout</a>
                        <ul>
                          <li>
                            <a>With Sidebar 1</a>
                          </li>
                          <li>
                            <a>With Sidebar 2</a>
                          </li>
                          <li>
                            <a>Full Width</a>
                          </li>
                          <li>
                            <a>Full Width + Map</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a>Half Screen Map</a>
                        <ul>
                          <li>
                            <a>List Layout</a>
                          </li>
                          <li>
                            <a>Grid Layout 1</a>
                          </li>
                          <li>
                            <a>Grid Layout 2</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a>Single Listings</a>
                        <ul>
                          <li>
                            <a>Single Listing 1</a>
                          </li>
                          <li>
                            <a>Single Listing 2</a>
                          </li>
                          <li>
                            <a>Single Listing 3</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a>Open Street Map</a>
                        <ul>
                          <li>
                            <a>Half Screen Map List Layout</a>
                          </li>
                          <li>
                            <a>Half Screen Map Grid Layout 1</a>
                          </li>
                          <li>
                            <a>Half Screen Map Grid Layout 2</a>
                          </li>
                          <li>
                            <a>Full Width List</a>
                          </li>
                          <li>
                            <a>Full Width Grid</a>
                          </li>
                          <li>
                            <a>Single Listing</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a className="current">User Panel</a>
                    <ul>
                      <li>
                        <Link to={`/`}>Dashboard</Link>
                      </li>
                      <li>
                        <Link to={`inbox`}>Inbox</Link>
                      </li>
                      <li>
                        <Link to={`bookings`}>Bookings</Link>
                      </li>
                      <li>
                        <Link to={`wallet`}>Wallet</Link>
                      </li>
                      <li>
                        <Link to={`my-offerings`}>My Offerings</Link>
                      </li>
                      <li>
                        <Link to={`reviews`}>Reviews</Link>
                      </li>
                      <li>
                        <Link to={`bookmarks`}>Bookmarks</Link>
                      </li>
                      <li>
                        <Link to={`create-offerings`}>Create Offering</Link>
                      </li>
                      <li>
                        <Link to={`my-profile`}>My Profile</Link>
                      </li>
                      <li>
                        <Link to={`invoice`}>Invoice</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a>Pages</a>
                    <div className="mega-menu mobile-styles three-columns">
                      <div className="mega-menu-section">
                        <ul>
                          <li className="mega-menu-headline">Pages #1</li>
                          <li>
                            <Link to={'/user-profile'}>
                              <i className="sl sl-icon-user" /> User Profile
                            </Link>
                          </li>
                          <li>
                            <Link to={'booking'}>
                              <i className="sl sl-icon-check" /> Booking Page
                            </Link>
                          </li>
                          <li>
                            <Link to={`create-offerings`}>
                              <i className="sl sl-icon-plus" /> Create Offerings
                            </Link>
                          </li>
                          <li>
                            <Link to={'/blog'}>
                              <i className="sl sl-icon-docs" /> Blog
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="mega-menu-section">
                        <ul>
                          <li className="mega-menu-headline">Pages #2</li>
                          <li>
                            <Link to={'/contact'}>
                              <i className="sl sl-icon-envelope-open" /> Contact
                            </Link>
                          </li>
                          <li>
                            <Link to={'/coming-soon'}>
                              <i className="sl sl-icon-hourglass" /> Coming Soon
                            </Link>
                          </li>
                          <li>
                            <Link to={'/not-found'}>
                              <i className="sl sl-icon-close" /> 404 Page
                            </Link>
                          </li>
                          <li>
                            <Link to={'/lesson-filtering'}>
                              <i className="sl sl-icon-equalizer" /> Lesson
                              Filtering
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="mega-menu-section">
                        <ul>
                          <li className="mega-menu-headline">Other</li>
                          <li>
                            <Link to={'/elements'}>
                              <i className="sl sl-icon-settings" /> Elements
                            </Link>
                          </li>
                          <li>
                            <Link to={'/pricing-tables'}>
                              <i className="sl sl-icon-tag" /> Pricing Tables
                            </Link>
                          </li>
                          <li>
                            <Link to={'/typography'}>
                              <i className="sl sl-icon-pencil" /> Typography
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>
              </nav>
              <div className="clearfix" />
              {/* Main Navigation / End */}
            </div>
            {/* Left Side Content / End */}

            {/* Right Side Content / End */}
            <div className="right-side">
              {/* Header Widget */}
              <div className="header-widget">
                {/* User Menu */}
                <UserMenu />
                <Link
                  to={`create-offerings`}
                  className="button border with-icon"
                >
                  Create Offerings <i className="sl sl-icon-plus" />
                </Link>
              </div>
              {/* Header Widget / End */}
            </div>
            {/* Right Side Content / End */}
          </div>
        </div>
        {/* Header / End */}
      </header>
      <div className="clearfix" />
      {/* Header Container / End */}
    </>
  );
};

export default DashboardTopNavigation;
