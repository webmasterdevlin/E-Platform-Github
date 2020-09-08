import React from 'react';
import NavBar from '../../components/nav-bar';
import Footer from '../../components/footer';
import TitleBar from '../../components/title-bar';

function LessonFilteringPage() {
  return (
    <div id="wrapper">
      <NavBar />
      <div>
        <TitleBar title={'Lesson Filtering'} />

        {/* Content================================================== */}
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              {/* Filters */}
              <div id="filters">
                <ul className="option-set margin-bottom-30">
                  <li>
                    <a href="#filter" className="selected" data-filter="*">
                      All
                    </a>
                  </li>
                  <li>
                    <a href="#filter" data-filter=".first-filter">
                      First Filter
                    </a>
                  </li>
                  <li>
                    <a href="#filter" data-filter=".second-filter">
                      Second Filter
                    </a>
                  </li>
                  <li>
                    <a href="#filter" data-filter=".third-filter">
                      Third Filter
                    </a>
                  </li>
                </ul>
                <div className="clearfix" />
              </div>
            </div>
          </div>
          <div className="row">
            {/* Projects */}
            <div className="projects isotope-wrapper">
              {/* Listing Item */}
              <div className="col-lg-4 col-md-6 isotope-item first-filter">
                <a
                  href="listings-single-page.html"
                  className="listing-item-container compact"
                >
                  <div className="listing-item">
                    <img
                      src="../../../assets/images/listing-item-01.jpg"
                      alt=""
                    />
                    <div className="listing-badge now-open">Now Open</div>
                    <div className="listing-item-content">
                      <div className="numerical-rating" data-rating="3.5" />
                      <h3>Tom's Restaurant</h3>
                      <span>964 School Street, New York</span>
                    </div>
                    <span className="like-icon" />
                  </div>
                </a>
              </div>
              {/* Listing Item / End */}
              {/* Listing Item */}
              <div className="col-lg-4 col-md-6 isotope-item second-filter first-filter">
                <a
                  href="listings-single-page.html"
                  className="listing-item-container compact"
                >
                  <div className="listing-item">
                    <img
                      src="../../../assets/images/listing-item-02.jpg"
                      alt=""
                    />
                    <div className="listing-item-details">
                      <ul>
                        <li>Friday, August 10</li>
                      </ul>
                    </div>
                    <div className="listing-item-content">
                      <div className="numerical-rating" data-rating={5.0} />
                      <h3>Sticky Band</h3>
                      <span>Bishop Avenue, New York</span>
                    </div>
                    <span className="like-icon" />
                  </div>
                </a>
              </div>
              {/* Listing Item / End */}
              {/* Listing Item */}
              <div className="col-lg-4 col-md-6 isotope-item third-filter first-filter">
                <a
                  href="listings-single-page.html"
                  className="listing-item-container compact"
                >
                  <div className="listing-item">
                    <img
                      src="../../../assets/images/listing-item-03.jpg"
                      alt=""
                    />
                    <div className="listing-item-details">
                      <ul>
                        <li>Starting from $59 per night</li>
                      </ul>
                    </div>
                    <div className="listing-item-content">
                      <div className="numerical-rating" data-rating={2.0} />
                      <h3>Hotel Govendor</h3>
                      <span>778 Country Street, New York</span>
                    </div>
                    <span className="like-icon" />
                  </div>
                </a>
              </div>
              {/* Listing Item / End */}
              {/* Listing Item */}
              <div className="col-lg-4 col-md-6 isotope-item third-filter">
                <a
                  href="listings-single-page.html"
                  className="listing-item-container compact"
                >
                  <div className="listing-item">
                    <img
                      src="../../../assets/images/listing-item-04.jpg"
                      alt=""
                    />
                    <div className="listing-badge now-open">Now Open</div>
                    <div className="listing-item-content">
                      <div className="numerical-rating" data-rating={5.0} />
                      <h3>Burger House</h3>
                      <span>2726 Shinn Street, New York</span>
                    </div>
                    <span className="like-icon" />
                  </div>
                </a>
              </div>
              {/* Listing Item / End */}
              {/* Listing Item */}
              <div className="col-lg-4 col-md-6 isotope-item second-filter">
                <a
                  href="listings-single-page.html"
                  className="listing-item-container compact"
                >
                  <div className="listing-item">
                    <img
                      src="../../../assets/images/listing-item-05.jpg"
                      alt=""
                    />
                    <div className="listing-item-content">
                      <div className="numerical-rating" data-rating="3.5" />
                      <h3>Airport</h3>
                      <span>1512 Duncan Avenue, New York</span>
                    </div>
                    <span className="like-icon" />
                  </div>
                </a>
              </div>
              {/* Listing Item / End */}
              {/* Listing Item */}
              <div className="col-lg-4 col-md-6 isotope-item first-filter">
                <a
                  href="listings-single-page.html"
                  className="listing-item-container compact"
                >
                  <div className="listing-item">
                    <img
                      src="../../../assets/images/listing-item-06.jpg"
                      alt=""
                    />
                    <div className="listing-badge now-closed">Now Closed</div>
                    <div className="listing-item-content">
                      <div className="numerical-rating" data-rating="4.5" />
                      <h3>Think Coffee</h3>
                      <span>215 Terry Lane, New York</span>
                    </div>
                    <span className="like-icon" />
                  </div>
                </a>
              </div>
              {/* Listing Item / End */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LessonFilteringPage;
