import React from 'react';
import NavBar from '../../components/nav-bar';
import Footer from '../../components/footer';
import MainSearchContainer from '../../components/main-search-container';

function HomeSixPage() {
  return (
    <div className="transparent-header">
      <div id="wrapper">
        <NavBar />
        <MainSearchContainer />
        {/* Container */}
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3 className="headline centered margin-bottom-35 margin-top-70">
                Popular Cities <span>Browse listings in popular places</span>
              </h3>
            </div>
            <div className="col-md-4">
              {/* Image Box */}
              <a
                href="listings-list-with-sidebar"
                className="img-box"
                style={{
                  backgroundImage:
                    'url(../../../assets/images/popular-location-01.jpg)',
                }}
              >
                <div className="img-box-content visible">
                  <h4>New York </h4>
                  <span>14 Listings</span>
                </div>
              </a>
            </div>
            <div className="col-md-8">
              {/* Image Box */}
              <a
                href="listings-list-with-sidebar"
                className="img-box"
                style={{
                  backgroundImage:
                    'url(../../../assets/images/popular-location-02.jpg)',
                }}
              >
                <div className="img-box-content visible">
                  <h4>Los Angeles</h4>
                  <span>24 Listings</span>
                </div>
              </a>
            </div>
            <div className="col-md-8">
              {/* Image Box */}
              <a
                href="listings-list-with-sidebar"
                className="img-box"
                style={{
                  backgroundImage:
                    'url(../../../assets/images/popular-location-03.jpg)',
                }}
              >
                <div className="img-box-content visible">
                  <h4>San Francisco </h4>
                  <span>12 Listings</span>
                </div>
              </a>
            </div>
            <div className="col-md-4">
              {/* Image Box */}
              <a
                href="listings-list-with-sidebar"
                className="img-box"
                style={{
                  backgroundImage:
                    'url(../../../assets/images/popular-location-04.jpg)',
                }}
              >
                <div className="img-box-content visible">
                  <h4>Miami</h4>
                  <span>9 Listings</span>
                </div>
              </a>
            </div>
          </div>
        </div>
        {/* Container / End */}
        <Footer />
      </div>
    </div>
  );
}

export default HomeSixPage;
