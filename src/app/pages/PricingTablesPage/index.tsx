import React from 'react';
import NavBar from '../../components/nav-bar';
import Footer from '../../components/footer';
import TitleBar from '../../components/title-bar';

function PricingTablesPage() {
  return (
    <div id="wrapper">
      <NavBar />
      <div>
        <TitleBar title={'Pricing Tables'} />

        {/* Pricing Tables================================================== */}
        {/* Container / Start */}
        <div className="container">
          {/* Row / Start */}
          <div className="row">
            <div className="col-md-12">
              <div className="pricing-container margin-top-30">
                {/* Plan #1 */}
                <div className="plan">
                  <div className="plan-price">
                    <h3>Basic</h3>
                    <span className="value">Free</span>
                    <span className="period">
                      Free of charge one standard listing active for 90 days
                    </span>
                  </div>
                  <div className="plan-features">
                    <ul>
                      <li>One Listing</li>
                      <li>90 Days Availability</li>
                      <li>Non-Featured</li>
                      <li>Limited Support</li>
                    </ul>
                    <a className="button border" href="#">
                      Get Started
                    </a>
                  </div>
                </div>
                {/* Plan #3 */}
                <div className="plan featured">
                  <div className="listing-badge">
                    <span className="featured">Featured</span>
                  </div>
                  <div className="plan-price">
                    <h3>Extended</h3>
                    <span className="value">$9</span>
                    <span className="period">
                      One time fee for one listing, highlighted in search
                      results
                    </span>
                  </div>
                  <div className="plan-features">
                    <ul>
                      <li>One Time Fee</li>
                      <li>One Listing</li>
                      <li>Lifetime Availability</li>
                      <li>Featured In Search Results</li>
                      <li>24/7 Support</li>
                    </ul>
                    <a className="button" href="#">
                      Get Started
                    </a>
                  </div>
                </div>
                {/* Plan #3 */}
                <div className="plan">
                  <div className="plan-price">
                    <h3>Professional</h3>
                    <span className="value">$59</span>
                    <span className="period">
                      Monthly subscription for unlimited listings and lifetime
                      availability
                    </span>
                  </div>
                  <div className="plan-features">
                    <ul>
                      <li>Unlimited Listings</li>
                      <li>Lifetime Availability</li>
                      <li>Featured In Search Results</li>
                      <li>24/7 Support</li>
                    </ul>
                    <a className="button border" href="#">
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Row / End */}
        </div>
        {/* Container / End */}
      </div>
      <Footer />
    </div>
  );
}

export default PricingTablesPage;
