import React from 'react';
import DashboardTitleBar from '../../dashboard-title-bar';

function MyOfferingsContent() {
  return (
    <div className="dashboard-content">
      <DashboardTitleBar title={'My Offerings'} />

      <div className="row">
        {/* Listings */}
        <div className="col-lg-12 col-md-12">
          <div className="dashboard-list-box margin-top-0">
            <h4>Active Offerings</h4>
            <ul>
              <li>
                <div className="list-box-listing">
                  <div className="list-box-listing-img">
                    <a href="#">
                      <img src="https://picsum.photos/200" alt="" />
                    </a>
                  </div>
                  <div className="list-box-listing-content">
                    <div className="inner">
                      <h3>
                        <a href="#">Package Name</a>
                      </h3>
                      <span>964 School Street, New York</span>
                      <div className="star-rating" data-rating="3.5">
                        <div className="rating-counter">(12 reviews)</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="buttons-to-right">
                  <a href="#" className="button gray">
                    <i className="sl sl-icon-note" /> Edit
                  </a>
                  <a href="#" className="button gray">
                    <i className="sl sl-icon-close" /> Delete
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyOfferingsContent;
