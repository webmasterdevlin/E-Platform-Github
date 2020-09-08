import React from 'react';
import DashboardTitleBar from '../dashboard-title-bar';

function BookingsContent() {
  return (
    <div className="dashboard-content">
      <DashboardTitleBar title={'Bookings'} />

      <div className="row">
        {/* Listings */}
        <div className="col-lg-12 col-md-12">
          <div className="dashboard-list-box margin-top-0">
            {/* Booking Requests Filters  */}
            <div className="booking-requests-filter">
              {/* Sort by */}
              <div className="sort-by">
                <div className="sort-by-select">
                  <select
                    data-placeholder="Default order"
                    className="chosen-select-no-single"
                  >
                    <option>All Listings</option>
                    <option>Burger House</option>
                    <option>Tom's Restaurant</option>
                    <option>Hotel Govendor</option>
                  </select>
                </div>
              </div>
              {/* Date Range */}
              <div id="booking-date-range">
                <span />
              </div>
            </div>
            {/* Reply to review popup */}
            <div id="small-dialog" className="zoom-anim-dialog mfp-hide">
              <div className="small-dialog-header">
                <h3>Send Message</h3>
              </div>
              <div className="message-reply margin-top-0">
                <textarea
                  cols={40}
                  rows={3}
                  placeholder="Your Message to Kathy"
                  defaultValue={''}
                />
                <button className="button">Send</button>
              </div>
            </div>
            <h4>Booking Requests</h4>
            <ul>
              <li className="pending-booking">
                <div className="list-box-listing bookings">
                  <div className="list-box-listing-img">
                    <img
                      src="http://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm&s=120"
                      alt=""
                    />
                  </div>
                  <div className="list-box-listing-content">
                    <div className="inner">
                      <h3>
                        Sunny and Modern Apartment{' '}
                        <span className="booking-status pending">Pending</span>
                        <span className="booking-status unpaid">Unpaid</span>
                      </h3>
                      <div className="inner-booking-list">
                        <h5>Booking Date:</h5>
                        <ul className="booking-list">
                          <li className="highlighted">
                            20.08.2018 - 24.08.2018
                          </li>
                        </ul>
                      </div>
                      <div className="inner-booking-list">
                        <h5>Booking Details:</h5>
                        <ul className="booking-list">
                          <li className="highlighted">2 Adults</li>
                        </ul>
                      </div>
                      <div className="inner-booking-list">
                        <h5>Price:</h5>
                        <ul className="booking-list">
                          <li className="highlighted">$147</li>
                        </ul>
                      </div>
                      <div className="inner-booking-list">
                        <h5>Client:</h5>
                        <ul className="booking-list">
                          <li>John Smith</li>
                          <li>john@example.com</li>
                          <li>123-456-789</li>
                        </ul>
                      </div>
                      <a
                        href="#small-dialog"
                        className="rate-review popup-with-zoom-anim"
                      >
                        <i className="sl sl-icon-envelope-open" /> Send Message
                      </a>
                    </div>
                  </div>
                </div>
                <div className="buttons-to-right">
                  <a href="#" className="button gray reject">
                    <i className="sl sl-icon-close" /> Reject
                  </a>
                  <a href="#" className="button gray approve">
                    <i className="sl sl-icon-check" /> Approve
                  </a>
                </div>
              </li>
              <li className="approved-booking">
                <div className="list-box-listing bookings">
                  <div className="list-box-listing-img">
                    <img
                      src="http://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm&s=120"
                      alt=""
                    />
                  </div>
                  <div className="list-box-listing-content">
                    <div className="inner">
                      <h3>
                        Burger House{' '}
                        <span className="booking-status">Approved</span>
                      </h3>
                      <div className="inner-booking-list">
                        <h5>Booking Date:</h5>
                        <ul className="booking-list">
                          <li className="highlighted">
                            10.12.2019 at 12:30 pm - 13:30 pm
                          </li>
                        </ul>
                      </div>
                      <div className="inner-booking-list">
                        <h5>Booking Details:</h5>
                        <ul className="booking-list">
                          <li className="highlighted">2 Adults, 2 Children</li>
                        </ul>
                      </div>
                      <div className="inner-booking-list">
                        <h5>Client:</h5>
                        <ul className="booking-list">
                          <li>Kathy Brown</li>
                          <li>kathy@example.com</li>
                          <li>123-456-789</li>
                        </ul>
                      </div>
                      <a
                        href="#small-dialog"
                        className="rate-review popup-with-zoom-anim"
                      >
                        <i className="sl sl-icon-envelope-open" /> Send Message
                      </a>
                    </div>
                  </div>
                </div>
                <div className="buttons-to-right">
                  <a href="#" className="button gray reject">
                    <i className="sl sl-icon-close" /> Cancel
                  </a>
                </div>
              </li>
              <li className="canceled-booking">
                <div className="list-box-listing bookings">
                  <div className="list-box-listing-img">
                    <img
                      src="http://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm&s=120"
                      alt=""
                    />
                  </div>
                  <div className="list-box-listing-content">
                    <div className="inner">
                      <h3>
                        Tom's Restaurant{' '}
                        <span className="booking-status">Canceled</span>
                      </h3>
                      <div className="inner-booking-list">
                        <h5>Booking Date:</h5>
                        <ul className="booking-list">
                          <li className="highlighted">
                            21.10.2019 at 9:30 am - 10:30 am
                          </li>
                        </ul>
                      </div>
                      <div className="inner-booking-list">
                        <h5>Booking Details:</h5>
                        <ul className="booking-list">
                          <li className="highlighted">2 Adults</li>
                        </ul>
                      </div>
                      <div className="inner-booking-list">
                        <h5>Client:</h5>
                        <ul className="booking-list">
                          <li>Kathy Brown</li>
                          <li>kathy@example.com</li>
                          <li>123-456-789</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingsContent;
