import * as React from 'react';
import Footer from '../../components/footer';
import NavigationBar from '../../components/navigation-bar';
import MainSearchContainer from '../../components/main-search-container';

export default function HomePage() {
  return (
    <div className="transparent-header">
      <div id="wrapper">
        <NavigationBar />

        <MainSearchContainer />

        <div>
          {/* Content================================================== */}
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h3 className="headline centered margin-top-75">
                  <strong className="headline-with-separator">
                    Popular Categories
                  </strong>
                </h3>
              </div>
              <div className="col-md-12">
                <div className="categories-boxes-container margin-top-5 margin-bottom-30">
                  {/* Box */}
                  <a
                    href="listings-list-with-sidebar"
                    className="category-small-box"
                  >
                    <i className="im im-icon-Hamburger" />
                    <h4>Eat &amp; Drink</h4>
                    <span className="category-box-counter">12</span>
                  </a>
                  {/* Box */}
                  <a
                    href="listings-list-with-sidebar"
                    className="category-small-box"
                  >
                    <i className="im  im-icon-Sleeping" />
                    <h4>Hotels</h4>
                    <span className="category-box-counter">32</span>
                  </a>
                  {/* Box */}
                  <a
                    href="listings-list-with-sidebar"
                    className="category-small-box"
                  >
                    <i className="im im-icon-Shopping-Bag" />
                    <h4>Shops</h4>
                    <span className="category-box-counter">11</span>
                  </a>
                  {/* Box */}
                  <a
                    href="listings-list-with-sidebar"
                    className="category-small-box"
                  >
                    <i className="im im-icon-Cocktail" />
                    <h4>Nightlife</h4>
                    <span className="category-box-counter">15</span>
                  </a>
                  {/* Box */}
                  <a
                    href="listings-list-with-sidebar"
                    className="category-small-box"
                  >
                    <i className="im im-icon-Electric-Guitar" />
                    <h4>Events</h4>
                    <span className="category-box-counter">21</span>
                  </a>
                  {/* Box */}
                  <a
                    href="listings-list-with-sidebar"
                    className="category-small-box"
                  >
                    <i className="im im-icon-Dumbbell" />
                    <h4>Fitness</h4>
                    <span className="category-box-counter">28</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Category Boxes / End */}
          {/* Fullwidth Section */}
          <section
            className="fullwidth margin-top-65 padding-top-75 padding-bottom-70"
            data-background-color="#f8f8f8"
          >
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <h3 className="headline centered margin-bottom-45">
                    <strong className="headline-with-separator">
                      Most Visited Places
                    </strong>
                    <span>Discover Top-Rated Local Businesses</span>
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
          <section
            className="fullwidth padding-top-75 padding-bottom-30"
            data-background-color="#fff"
          >
            {/* Info Section */}
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-md-offset-2">
                  <h3 className="headline centered headline-extra-spacing">
                    <strong className="headline-with-separator">
                      What Our Users Say
                    </strong>
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
            <div className="fullwidth-carousel-container margin-top-20 no-dots">
              <div className="testimonial-carousel testimonials">
                {/* Item */}
                <div className="fw-carousel-review">
                  <div className="testimonial-box">
                    <div className="testimonial">
                      Bring to the table win-win survival strategies to ensure
                      proactive domination. At the end of the day, going
                      forward, a new normal that has evolved from generation is
                      on the runway heading towards a streamlined cloud solution
                      user generated content.
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
                      Capitalize on low hanging fruit to identify a ballpark
                      value added activity to beta test. Override the digital
                      divide with additional clickthroughs from DevOps.
                      Nanotechnology immersion along the information highway
                      will close the loop.
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
                      Explore some of the best tips from around the world from
                      our partners and friends. Discover some of the most
                      popular listings!
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
                      Proin dapibus nisl ornare diam varius tempus. Aenean a
                      quam luctus, finibus tellus ut, convallis eros
                      sollicitudin.
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
                          Sed sed tristique nibh iam porta volutpat finibus.
                          Donec in aliquet urneget mattis lorem. Pellentesque
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
                          Sed sed tristique nibh iam porta volutpat finibus.
                          Donec in aliquet urneget mattis lorem. Pellentesque
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
                          Sed sed tristique nibh iam porta volutpat finibus.
                          Donec in aliquet urneget mattis lorem. Pellentesque
                          pellentesque.
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
                {/* Blog post Item / End */}
                <div className="col-md-12 centered-content">
                  <a className="button border margin-top-10">View Blog</a>
                </div>
              </div>
            </div>
          </section>
          {/* Recent Blog Posts / End */}
        </div>

        <Footer />
      </div>
    </div>
  );
}
