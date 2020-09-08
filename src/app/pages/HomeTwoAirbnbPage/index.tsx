import React from 'react';
import NavBar from '../../components/nav-bar';
import Footer from '../../components/footer';

function HomeTwoAirbnbPage() {
  return (
    <div className="transparent-header">
      <div id="wrapper">
        <NavBar />
        {/* Banner================================================== */}
        <div
          className="main-search-container full-height alt-search-box centered"
          style={{
            backgroundImage: 'url(../../../assets/images/listeo_bg3.jpg)',
          }}
        >
          <div className="main-search-inner">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="main-search-input">
                    <div className="main-search-input-headline">
                      <h2>Find deals for any season</h2>
                      <h4>From cozy country homes to funky city apartments!</h4>
                    </div>
                    <div className="main-search-input-item location">
                      <div id="autocomplete-container">
                        <input
                          id="autocomplete-input"
                          type="text"
                          placeholder="Location"
                        />
                      </div>
                      <a href="#">
                        <i className="fa fa-map-marker" />
                      </a>
                    </div>
                    <div className="main-search-input-item search-input-icon">
                      <input
                        type="text"
                        placeholder="Check-In - Check-Out"
                        id="booking-date-search"
                      />
                      <i className="fa fa-calendar" />
                    </div>
                    <div className="main-search-input-item">
                      <select
                        data-placeholder="All Categories"
                        className="chosen-select"
                      >
                        <option>All Categories</option>
                        <option>Shops</option>
                        <option>Hotels</option>
                        <option>Restaurants</option>
                        <option>Fitness</option>
                        <option>Events</option>
                      </select>
                    </div>
                    <button
                      className="button"
                      onClick={() =>
                        (window.location.href = 'listings-half-screen-map-list')
                      }
                    >
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Content================================================== */}
        {/* Container */}
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3 className="headline centered margin-bottom-35 margin-top-70">
                <strong className="headline-with-separator">
                  Trending Destinations
                </strong>
                <span>Top Destinations to Visit in 2019</span>
              </h3>
            </div>
            <div className="col-md-6">
              {/* Image Box */}
              <a
                href="listings-list-with-sidebar"
                className="img-box alternative-imagebox"
                data-background-image="../../../assets/images/popular-location-01.jpg"
              >
                <div className="img-box-content visible">
                  <h4>New York </h4>
                  <span>14 Listings</span>
                </div>
              </a>
            </div>
            <div className="col-md-6">
              {/* Image Box */}
              <a
                href="listings-list-with-sidebar"
                className="img-box alternative-imagebox"
                data-background-image="../../../assets/images/popular-location-02.jpg"
              >
                <div className="img-box-content visible">
                  <h4>Los Angeles</h4>
                  <span>24 Listings</span>
                </div>
              </a>
            </div>
            <div className="col-md-4">
              {/* Image Box */}
              <a
                href="listings-list-with-sidebar"
                className="img-box alternative-imagebox"
                data-background-image="../../../assets/images/popular-location-03.jpg"
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
                className="img-box alternative-imagebox"
                data-background-image="../../../assets/images/popular-location-04.jpg"
              >
                <div className="img-box-content visible">
                  <h4>Miami</h4>
                  <span>9 Listings</span>
                </div>
              </a>
            </div>
            <div className="col-md-4">
              {/* Image Box */}
              <a
                href="listings-list-with-sidebar"
                className="img-box alternative-imagebox"
                data-background-image="../../../assets/images/popular-location-05.jpg"
              >
                <div className="img-box-content visible">
                  <h4>Chicago</h4>
                  <span>5 Listings</span>
                </div>
              </a>
            </div>
          </div>
        </div>
        {/* Container / End */}
        {/* Most Visited Places */}
        <section
          className="fullwidth border-top margin-top-65 padding-top-75 padding-bottom-70"
          data-background-color="#fff"
        >
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h3 className="headline centered margin-bottom-45">
                  <strong className="headline-with-separator">
                    Most Visited Places
                  </strong>
                  <span>Discover top-rated local businesses</span>
                </h3>
              </div>
            </div>
          </div>
          {/* Carousel / Start */}
          <div className="simple-fw-slick-carousel dots-nav">
            {/* Listing Item */}
            <div className="fw-carousel-item">
              <a
                href="listings-single-page"
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
            <div className="fw-carousel-item">
              <a
                href="listings-single-page"
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
            <div className="fw-carousel-item">
              <a
                href="listings-single-page"
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
            <div className="fw-carousel-item">
              <a
                href="listings-single-page"
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
            <div className="fw-carousel-item">
              <a
                href="listings-single-page"
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
            <div className="fw-carousel-item">
              <a
                href="listings-single-page"
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
          {/* Carousel / End */}
        </section>
        {/* Fullwidth Section / End */}
        {/* Info Section */}
        <section
          className="fullwidth padding-top-75 padding-bottom-70"
          data-background-color="#f9f9f9"
        >
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2">
                <h3 className="headline centered headline-extra-spacing">
                  <strong className="headline-with-separator">
                    Plan The Vacation of Your Dreams
                  </strong>
                  <span className="margin-top-25">
                    Explore some of the best tips from around the world from our
                    partners and friends. Discover some of the most popular
                    listings!
                  </span>
                </h3>
              </div>
            </div>
            <div className="row icons-container">
              {/* Stage */}
              <div className="col-md-4">
                <div className="icon-box-2 with-line">
                  <i className="im im-icon-Map2" />
                  <h3>Find Interesting Place</h3>
                  <p>
                    Proin dapibus nisl ornare diam varius tempus. Aenean a quam
                    luctus, finibus tellus ut, convallis eros sollicitudin.
                  </p>
                </div>
              </div>
              {/* Stage */}
              <div className="col-md-4">
                <div className="icon-box-2 with-line">
                  <i className="im im-icon-Mail-withAtSign" />
                  <h3>Contact a Few Owners</h3>
                  <p>
                    Maecenas pulvinar, risus in facilisis dignissim, quam nisi
                    hendrerit nulla, id vestibulum metus nullam viverra purus.
                  </p>
                </div>
              </div>
              {/* Stage */}
              <div className="col-md-4">
                <div className="icon-box-2">
                  <i className="im im-icon-Checked-User" />
                  <h3>Make a Reservation</h3>
                  <p>
                    Faucibus ante, in porttitor tellus blandit et. Phasellus
                    tincidunt metus lectus sollicitudin feugiat consectetur.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Info Section / End */}
        {/* Recent Blog Posts */}
        <section
          className="fullwidth margin-top-0 padding-top-75 padding-bottom-75"
          data-background-color="#fff"
        >
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h3 className="headline centered margin-bottom-55">
                  <strong className="headline-with-separator">
                    From The Blog
                  </strong>
                </h3>
              </div>
            </div>
            <div className="row">
              {/* Blog Post Item */}
              <div className="col-md-4">
                <a
                  href="pages-blog-post"
                  className="blog-compact-item-container"
                >
                  <div className="blog-compact-item">
                    <img
                      src="../../../assets/images/blog-compact-post-01.jpg"
                      alt=""
                    />
                    <span className="blog-item-tag">Tips</span>
                    <div className="blog-compact-item-content">
                      <ul className="blog-post-tags">
                        <li>22 August 2019</li>
                      </ul>
                      <h3>Hotels for All Budgets</h3>
                      <p>
                        Sed sed tristique nibh iam porta volutpat finibus. Donec
                        in aliquet urneget mattis lorem. Pellentesque
                        pellentesque.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              {/* Blog post Item / End */}
              {/* Blog Post Item */}
              <div className="col-md-4">
                <a
                  href="pages-blog-post"
                  className="blog-compact-item-container"
                >
                  <div className="blog-compact-item">
                    <img
                      src="../../../assets/images/blog-compact-post-02.jpg"
                      alt=""
                    />
                    <span className="blog-item-tag">Tips</span>
                    <div className="blog-compact-item-content">
                      <ul className="blog-post-tags">
                        <li>18 August 2019</li>
                      </ul>
                      <h3>The 50 Greatest Street Arts In London</h3>
                      <p>
                        Sed sed tristique nibh iam porta volutpat finibus. Donec
                        in aliquet urneget mattis lorem. Pellentesque
                        pellentesque.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              {/* Blog post Item / End */}
              {/* Blog Post Item */}
              <div className="col-md-4">
                <a
                  href="pages-blog-post"
                  className="blog-compact-item-container"
                >
                  <div className="blog-compact-item">
                    <img
                      src="../../../assets/images/blog-compact-post-03.jpg"
                      alt=""
                    />
                    <span className="blog-item-tag">Tips</span>
                    <div className="blog-compact-item-content">
                      <ul className="blog-post-tags">
                        <li>10 August 2019</li>
                      </ul>
                      <h3>The Best Cofee Shops In Sydney Neighborhoods</h3>
                      <p>
                        Sed sed tristique nibh iam porta volutpat finibus. Donec
                        in aliquet urneget mattis lorem. Pellentesque
                        pellentesque.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              {/* Blog post Item / End */}
              <div className="col-md-12 centered-content">
                <a href="pages-blog" className="button border margin-top-10">
                  View Blog
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* Recent Blog Posts / End */}
        {/* Flip banner */}
        <a
          href="listings-half-screen-map-list"
          className="flip-banner parallax"
          data-background="../../../assets/images/slider-bg-02.jpg"
          data-color="#f91942"
          data-color-opacity="0.85"
          data-img-width={2500}
          data-img-height={1666}
        >
          <div className="flip-banner-content">
            <h2 className="flip-visible">
              Explore top-rated attractions nearby
            </h2>
            <h2 className="flip-hidden">
              Browse Listings <i className="sl sl-icon-arrow-right" />
            </h2>
          </div>
        </a>
        {/* Flip banner / End */}
        <Footer />
      </div>
    </div>
  );
}

export default HomeTwoAirbnbPage;
