import React from 'react';
import DashboardTitleBar from '../dashboard-title-bar';

function BookmarksContent() {
  return (
    <div className="dashboard-content">
      <DashboardTitleBar title={'Bookmarks'} />
      <div className="row">
        {/* Listings */}
        <div className="col-lg-12 col-md-12">
          <div className="dashboard-list-box margin-top-0">
            <h4>Bookmarked Listings</h4>
            <ul>
              <li>
                <div className="list-box-listing">
                  <div className="list-box-listing-img">
                    <a href="#">
                      <img
                        src="../../../../assets/images/listing-item-02.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="list-box-listing-content">
                    <div className="inner">
                      <h3>Sticky Band</h3>
                      <span>Bishop Avenue, New York</span>
                      <div className="star-rating" data-rating={5.0}>
                        <div className="rating-counter">(23 reviews)</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="buttons-to-right">
                  <a href="#" className="button gray">
                    <i className="sl sl-icon-close" /> Delete
                  </a>
                </div>
              </li>
              <li>
                <div className="list-box-listing">
                  <div className="list-box-listing-img">
                    <a href="#">
                      <img
                        src="../../../../assets/images/listing-item-04.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="list-box-listing-content">
                    <div className="inner">
                      <h3>Burger House</h3>
                      <span>2726 Shinn Street, New York</span>
                      <div className="star-rating" data-rating={5.0}>
                        <div className="rating-counter">(31 reviews)</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="buttons-to-right">
                  <a href="#" className="button gray">
                    <i className="sl sl-icon-close" /> Delete
                  </a>
                </div>
              </li>
              <li>
                <div className="list-box-listing">
                  <div className="list-box-listing-img">
                    <a href="#">
                      <img
                        src="../../../../assets/images/listing-item-06.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="list-box-listing-content">
                    <div className="inner">
                      <h3>Think Coffee</h3>
                      <span>215 Terry Lane, New York</span>
                      <div className="star-rating" data-rating={5.0}>
                        <div className="rating-counter">(31 reviews)</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="buttons-to-right">
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

export default BookmarksContent;
