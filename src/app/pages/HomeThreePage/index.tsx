import React from 'react';
import NavBar from '../../components/nav-bar';
import Footer from '../../components/footer';
import MainSearchContainer from '../../components/main-search-container';

function HomeThreePage() {
  return (
    <div className="transparent-header">
      <div id="wrapper">
        <NavBar />
        <MainSearchContainer />
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3 className="headline centered margin-top-75">
                Popular Categories
                <span>
                  Browse <i>the most desirable</i> categories
                </span>
              </h3>
            </div>
          </div>
        </div>
        {/* Categories Carousel */}
        <div className="fullwidth-carousel-container margin-top-25">
          <div className="fullwidth-slick-carousel category-carousel">
            {/* Item */}
            <div className="fw-carousel-item">
              <div className="category-box-container">
                <a
                  href="listings-half-screen-map-grid-1"
                  className="category-box"
                  style={{
                    backgroundImage:
                      'url(../../../assets/images/category-box-01.jpg)',
                  }}
                >
                  <div className="category-box-content">
                    <h3>Hotels</h3>
                    <span>64 listings</span>
                  </div>
                  <span className="category-box-btn">Browse</span>
                </a>
              </div>
            </div>
            {/* Item */}
            <div className="fw-carousel-item">
              <div className="category-box-container">
                <a
                  href="listings-half-screen-map-grid-1"
                  className="category-box"
                  data-background-image="../../../assets/images/category-box-03.jpg"
                >
                  <div className="category-box-content">
                    <h3>Events</h3>
                    <span>67 listings</span>
                  </div>
                  <span className="category-box-btn">Browse</span>
                </a>
              </div>
            </div>
            {/* Item */}
            <div className="fw-carousel-item">
              <div className="category-box-container">
                <a
                  href="listings-half-screen-map-grid-1"
                  className="category-box"
                  data-background-image="../../../assets/images/category-box-04.jpg"
                >
                  <div className="category-box-content">
                    <h3>Fitness</h3>
                    <span>27 listings</span>
                  </div>
                  <span className="category-box-btn">Browse</span>
                </a>
              </div>
            </div>
            {/* Item */}
            <div className="fw-carousel-item">
              <div className="category-box-container">
                <a
                  href="listings-half-screen-map-list"
                  className="category-box"
                  data-background-image="../../../assets/images/category-box-05.jpg"
                >
                  <div className="category-box-content">
                    <h3>Nightlife</h3>
                    <span>22 listings</span>
                  </div>
                  <span className="category-box-btn">Browse</span>
                </a>
              </div>
            </div>
            {/* Item */}
            <div className="fw-carousel-item">
              <div className="category-box-container">
                <a
                  href="listings-half-screen-map-list"
                  className="category-box"
                  style={{
                    backgroundImage:
                      'url(../../../assets/images/category-box-06.jpg)',
                  }}
                >
                  <div className="category-box-content">
                    <h3>Eat &amp; Drink</h3>
                    <span>130 listings</span>
                  </div>
                  <span className="category-box-btn">Browse</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Categories Carousel / End */}
        {/* Fullwidth Section */}
        <section
          className="fullwidth margin-top-65 padding-top-75 padding-bottom-70"
          data-background-color="#f8f8f8"
        >
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h3 className="headline centered margin-bottom-45">
                  Most Visited Places
                  <span>Discover top-rated local businesses</span>
                </h3>
              </div>
              <div className="col-md-12">
                <div className="simple-slick-carousel dots-nav">
                  {/* Listing Item */}
                  <div className="carousel-item">
                    <a
                      href="listings-single-page"
                      className="listing-item-container"
                    >
                      <div className="listing-item">
                        <img
                          src="../../../assets/images/listing-item-01.jpg"
                          alt=""
                        />
                        <div className="listing-badge now-open">Now Open</div>
                        <div className="listing-item-content">
                          <span className="tag">Eat &amp; Drink</span>
                          <h3>
                            Tom's Restaurant <i className="verified-icon" />
                          </h3>
                          <span>964 School Street, New York</span>
                        </div>
                        <span className="like-icon" />
                      </div>
                      <div className="star-rating" data-rating="3.5">
                        <div className="rating-counter">(12 reviews)</div>
                      </div>
                    </a>
                  </div>
                  {/* Listing Item / End */}
                  {/* Listing Item */}
                  <div className="carousel-item">
                    <a
                      href="listings-single-page"
                      className="listing-item-container"
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
                          <span className="tag">Events</span>
                          <h3>Sticky Band</h3>
                          <span>Bishop Avenue, New York</span>
                        </div>
                        <span className="like-icon" />
                      </div>
                      <div className="star-rating" data-rating={5.0}>
                        <div className="rating-counter">(23 reviews)</div>
                      </div>
                    </a>
                  </div>
                  {/* Listing Item / End */}
                  {/* Listing Item */}
                  <div className="carousel-item">
                    <a
                      href="listings-single-page"
                      className="listing-item-container"
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
                          <span className="tag">Hotels</span>
                          <h3>Hotel Govendor</h3>
                          <span>778 Country Street, New York</span>
                        </div>
                        <span className="like-icon" />
                      </div>
                      <div className="star-rating" data-rating={2.0}>
                        <div className="rating-counter">(17 reviews)</div>
                      </div>
                    </a>
                  </div>
                  {/* Listing Item / End */}
                  {/* Listing Item */}
                  <div className="carousel-item">
                    <a
                      href="listings-single-page"
                      className="listing-item-container"
                    >
                      <div className="listing-item">
                        <img
                          src="../../../assets/images/listing-item-04.jpg"
                          alt=""
                        />
                        <div className="listing-badge now-open">Now Open</div>
                        <div className="listing-item-content">
                          <span className="tag">Eat &amp; Drink</span>
                          <h3>
                            Burger House <i className="verified-icon" />
                          </h3>
                          <span>2726 Shinn Street, New York</span>
                        </div>
                        <span className="like-icon" />
                      </div>
                      <div className="star-rating" data-rating={5.0}>
                        <div className="rating-counter">(31 reviews)</div>
                      </div>
                    </a>
                  </div>
                  {/* Listing Item / End */}
                  {/* Listing Item */}
                  <div className="carousel-item">
                    <a
                      href="listings-single-page"
                      className="listing-item-container"
                    >
                      <div className="listing-item">
                        <img
                          src="../../../assets/images/listing-item-05.jpg"
                          alt=""
                        />
                        <div className="listing-item-content">
                          <span className="tag">Other</span>
                          <h3>Airport</h3>
                          <span>1512 Duncan Avenue, New York</span>
                        </div>
                        <span className="like-icon" />
                      </div>
                      <div className="star-rating" data-rating="3.5">
                        <div className="rating-counter">(46 reviews)</div>
                      </div>
                    </a>
                  </div>
                  {/* Listing Item / End */}
                  {/* Listing Item */}
                  <div className="carousel-item">
                    <a
                      href="listings-single-page"
                      className="listing-item-container"
                    >
                      <div className="listing-item">
                        <img
                          src="../../../assets/images/listing-item-06.jpg"
                          alt=""
                        />
                        <div className="listing-badge now-closed">
                          Now Closed
                        </div>
                        <div className="listing-item-content">
                          <span className="tag">Eat &amp; Drink</span>
                          <h3>Think Coffee</h3>
                          <span>215 Terry Lane, New York</span>
                        </div>
                        <span className="like-icon" />
                      </div>
                      <div className="star-rating" data-rating="4.5">
                        <div className="rating-counter">(15 reviews)</div>
                      </div>
                    </a>
                  </div>
                  {/* Listing Item / End */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Fullwidth Section / End */}
        {/* Info Section */}
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2">
              <h2 className="headline centered margin-top-80">
                Plan The Vacation of Your Dreams
                <span className="margin-top-25">
                  Explore some of the best tips from around the world from our
                  partners and friends. Discover some of the most popular
                  listings in Sydney.
                </span>
              </h2>
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
                  luctus, finibus tellus ut, convallis eros sollicitudin turpis.
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
                  hendrerit nulla, id vestibulum metus nullam viverra porta
                  purus.
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
                  tincidunt metus lectus sollicitudin feugiat pharetra
                  consectetur.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Info Section / End */}
        {/* Recent Blog Posts */}
        <section
          className="fullwidth border-top margin-top-70 padding-top-75 padding-bottom-75"
          data-background-color="#fff"
        >
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h3 className="headline centered margin-bottom-45">
                  From The Blog
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
        <Footer />
      </div>
    </div>
  );
}

export default HomeThreePage;
