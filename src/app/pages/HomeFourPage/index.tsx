import React from 'react';
import NavBar from '../../components/nav-bar';
import Footer from '../../components/footer';
import MainSearchContainer from '../../components/main-search-container';

function HomeFourPage() {
  return (
    <div className="transparent-header">
      <div id="wrapper">
        <NavBar />
        <MainSearchContainer />
        {/* Listings */}
        <div className="container margin-top-70">
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
                        <h3>Tom's Restaurant</h3>
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
                        <h3>Burger House</h3>
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
                      <div className="listing-badge now-closed">Now Closed</div>
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
        {/* Listings / End */}
        <section
          className="fullwidth margin-top-70 padding-top-75 padding-bottom-70"
          data-background-color="#f9f9f9"
        >
          {/* Info Section */}
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2">
                <h3 className="headline centered">
                  What Our Users Say
                  <span className="margin-top-25">
                    We collect reviews from our users so you can get an honest
                    opinion of what an experience with our website are really
                    like!
                  </span>
                </h3>
              </div>
            </div>
          </div>
          {/* Info Section / End */}
          {/* Categories Carousel */}
          <div className="fullwidth-carousel-container margin-top-20">
            <div className="testimonial-carousel testimonials">
              {/* Item */}
              <div className="fw-carousel-review">
                <div className="testimonial-box">
                  <div className="testimonial">
                    Bring to the table win-win survival strategies to ensure
                    proactive domination. At the end of the day, going forward,
                    a new normal that has evolved from generation is on the
                    runway heading towards a streamlined cloud solution user
                    generated content.
                  </div>
                </div>
                <div className="testimonial-author">
                  <img
                    src="../../../assets/images/happy-client-01.jpg"
                    alt=""
                  />
                  <h4>
                    Jennie Smith <span>Coffee Shop Owner</span>
                  </h4>
                </div>
              </div>
              {/* Item */}
              <div className="fw-carousel-review">
                <div className="testimonial-box">
                  <div className="testimonial">
                    Capitalize on low hanging fruit to identify a ballpark value
                    added activity to beta test. Override the digital divide
                    with additional clickthroughs from DevOps. Nanotechnology
                    immersion along the information highway will close the loop.
                  </div>
                </div>
                <div className="testimonial-author">
                  <img
                    src="../../../assets/images/happy-client-02.jpg"
                    alt=""
                  />
                  <h4>
                    Tom Baker <span>Clothing Store Owner</span>
                  </h4>
                </div>
              </div>
              {/* Item */}
              <div className="fw-carousel-review">
                <div className="testimonial-box">
                  <div className="testimonial">
                    Leverage agile frameworks to provide a robust synopsis for
                    high level overviews. Iterative approaches to corporate
                    strategy foster collaborative thinking to further the
                    overall value proposition. Organically grow the holistic
                    world view.
                  </div>
                </div>
                <div className="testimonial-author">
                  <img
                    src="../../../assets/images/happy-client-03.jpg"
                    alt=""
                  />
                  <h4>
                    Jack Paden <span>Restaurant Owner</span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
          {/* Categories Carousel / End */}
        </section>
        {/* Parallax */}
        <div
          className="parallax"
          data-background="../../../assets/images/slider-bg-02.jpg"
          data-color="#36383e"
          data-color-opacity="0.6"
          data-img-width={800}
          data-img-height={505}
        >
          {/* Infobox */}
          <div className="text-content white-font">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-sm-8">
                  <h2>Streamline Your Business</h2>
                  <p>
                    We’re full-service, local agents who know how to find people
                    and home each together. We use online tools with an
                    unmatched search capability to make you smarter and faster.
                  </p>
                  <a
                    href="listings-list-with-sidebar"
                    className="button margin-top-25"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Infobox / End */}
        </div>
        {/* Parallax / End */}
        {/* Pricing Tables  */}
        <section
          className="fullwidth margin-top-0 padding-top-75 padding-bottom-65"
          data-background-color="#fff"
        >
          {/* Container / Start */}
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h3 className="headline centered margin-bottom-50">
                  Get an Exposure For Your Listing
                </h3>
              </div>
            </div>
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
                        Free of charge one standard listing active for 30 days
                      </span>
                    </div>
                    <div className="plan-features">
                      <ul>
                        <li>One Listing</li>
                        <li>30 Days Availability</li>
                        <li>Standard Listing</li>
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
                      <span className="value">$9.99</span>
                      <span className="period">
                        One time fee for one listing, highlighted in the search
                        results
                      </span>
                    </div>
                    <div className="plan-features">
                      <ul>
                        <li>One Time Fee</li>
                        <li>One Listing</li>
                        <li>90 Days Availability</li>
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
                      <span className="value">$19.99</span>
                      <span className="period">
                        Monthly subscription for unlimited listings and
                        availability
                      </span>
                    </div>
                    <div className="plan-features">
                      <ul>
                        <li>Unlimited Listings</li>
                        <li>Unlimited Availability</li>
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
        </section>
        {/* Pricing Tables / End */}
        {/* Recent Blog Posts */}
        <section
          className="fullwidth padding-top-75 padding-bottom-75"
          data-background-color="#f9f9f9"
        >
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h3 className="headline centered margin-bottom-50">
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
export default HomeFourPage;
