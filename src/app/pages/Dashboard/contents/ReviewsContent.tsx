import React from 'react';
import DashboardTitleBar from '../dashboard-title-bar';

function ReviewsContent() {
  return (
    <div className="dashboard-content">
      <DashboardTitleBar title={'Reviews'} />

      <div className="row">
        {/* Listings */}
        <div className="col-lg-6 col-md-12">
          <div className="dashboard-list-box margin-top-0">
            {/* Sort by */}
            <div className="sort-by">
              <div className="sort-by-select">
                <select
                  data-placeholder="Default order"
                  className="chosen-select-no-single"
                >
                  <option>All Listings</option>
                  <option>Tom's Restaurant</option>
                  <option>Sticky Band</option>
                  <option>Hotel Govendor</option>
                  <option>Burger House</option>
                  <option>Airport</option>
                  <option>Think Coffee</option>
                </select>
              </div>
            </div>
            <h4>Visitor Reviews</h4>
            {/* Reply to review popup */}
            <div id="small-dialog" className="zoom-anim-dialog mfp-hide">
              <div className="small-dialog-header">
                <h3>Reply to review</h3>
              </div>
              <div className="message-reply margin-top-0">
                <textarea cols={40} rows={3} defaultValue={''} />
                <button className="button">Reply</button>
              </div>
            </div>
            <ul>
              <li>
                <div className="comments listing-reviews">
                  <ul>
                    <li>
                      <div className="avatar">
                        <img
                          src="http://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm&s=70"
                          alt=""
                        />
                      </div>
                      <div className="comment-content">
                        <div className="arrow-comment" />
                        <div className="comment-by">
                          Kathy Brown{' '}
                          <div className="comment-by-listing">
                            on <a href="#">Burger House</a>
                          </div>{' '}
                          <span className="date">June 2019</span>
                          <div className="star-rating" data-rating={5} />
                        </div>
                        <p>
                          Morbi velit eros, sagittis in facilisis non, rhoncus
                          et erat. Nam posuere tristique sem, eu ultricies
                          tortor imperdiet vitae. Curabitur lacinia neque non
                          metus
                        </p>
                        <div className="review-images mfp-gallery-container">
                          <a
                            href="images/review-image-01.jpg"
                            className="mfp-gallery"
                          >
                            <img src="images/review-image-01.jpg" alt="" />
                          </a>
                        </div>
                        <a
                          href="#small-dialog"
                          className="rate-review popup-with-zoom-anim"
                        >
                          <i className="sl sl-icon-action-undo" /> Reply to this
                          review
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div className="comments listing-reviews">
                  <ul>
                    <li>
                      <div className="avatar">
                        <img
                          src="http://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm&s=70"
                          alt=""
                        />{' '}
                      </div>
                      <div className="comment-content">
                        <div className="arrow-comment" />
                        <div className="comment-by">
                          John Doe{' '}
                          <div className="comment-by-listing">
                            on <a href="#">Burger House</a>
                          </div>{' '}
                          <span className="date">May 2019</span>
                          <div className="star-rating" data-rating={4} />
                        </div>
                        <p>
                          Commodo est luctus eget. Proin in nunc laoreet justo
                          volutpat blandit enim. Sem felis, ullamcorper vel
                          aliquam non, varius eget justo. Duis quis nunc tellus
                          sollicitudin mauris.
                        </p>
                        <a
                          href="#small-dialog"
                          className="rate-review popup-with-zoom-anim"
                        >
                          <i className="sl sl-icon-action-undo" /> Reply to this
                          review
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div className="comments listing-reviews">
                  <ul>
                    <li>
                      <div className="avatar">
                        <img
                          src="http://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm&s=70"
                          alt=""
                        />
                      </div>
                      <div className="comment-content">
                        <div className="arrow-comment" />
                        <div className="comment-by">
                          Kathy Brown{' '}
                          <div className="comment-by-listing">
                            on <a href="#">Burger House</a>
                          </div>{' '}
                          <span className="date">June 2019</span>
                          <div className="star-rating" data-rating={5} />
                        </div>
                        <p>
                          Morbi velit eros, sagittis in facilisis non, rhoncus
                          et erat. Nam posuere tristique sem, eu ultricies
                          tortor imperdiet vitae. Curabitur lacinia neque non
                          metus
                        </p>
                        <div className="review-images mfp-gallery-container">
                          <a
                            href="images/review-image-02.jpg"
                            className="mfp-gallery"
                          >
                            <img src="images/review-image-02.jpg" alt="" />
                          </a>
                          <a
                            href="images/review-image-03.jpg"
                            className="mfp-gallery"
                          >
                            <img src="images/review-image-03.jpg" alt="" />
                          </a>
                        </div>
                        <a
                          href="#small-dialog"
                          className="rate-review popup-with-zoom-anim"
                        >
                          <i className="sl sl-icon-action-undo" /> Reply to this
                          review
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div className="comments listing-reviews">
                  <ul>
                    <li>
                      <div className="avatar">
                        <img
                          src="http://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm&s=70"
                          alt=""
                        />{' '}
                      </div>
                      <div className="comment-content">
                        <div className="arrow-comment" />
                        <div className="comment-by">
                          John Doe{' '}
                          <div className="comment-by-listing">
                            on <a href="#">Burger House</a>
                          </div>{' '}
                          <span className="date">May 2019</span>
                          <div className="star-rating" data-rating={5} />
                        </div>
                        <p>
                          Commodo est luctus eget. Proin in nunc laoreet justo
                          volutpat blandit enim. Sem felis, ullamcorper vel
                          aliquam non, varius eget justo. Duis quis nunc tellus
                          sollicitudin mauris.
                        </p>
                        <a
                          href="#small-dialog"
                          className="rate-review popup-with-zoom-anim"
                        >
                          <i className="sl sl-icon-action-undo" /> Reply to this
                          review
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          {/* Pagination */}
          <div className="clearfix" />
          <div className="pagination-container margin-top-30 margin-bottom-0">
            <nav className="pagination">
              <ul>
                <li>
                  <a href="#" className="current-page">
                    1
                  </a>
                </li>
                <li>
                  <a href="#">2</a>
                </li>
                <li>
                  <a href="#">
                    <i className="sl sl-icon-arrow-right" />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          {/* Pagination / End */}
        </div>
        {/* Listings */}
        <div className="col-lg-6 col-md-12">
          <div className="dashboard-list-box margin-top-0">
            <h4>Your Reviews</h4>
            <ul>
              <li>
                <div className="comments listing-reviews">
                  <ul>
                    <li>
                      <div className="avatar">
                        <img src="images/reviews-avatar.jpg" alt="" />{' '}
                      </div>
                      <div className="comment-content">
                        <div className="arrow-comment" />
                        <div className="comment-by">
                          Your review{' '}
                          <div className="comment-by-listing own-comment">
                            on <a href="#">Tom's Restaurant</a>
                          </div>{' '}
                          <span className="date">May 2019</span>
                          <div className="star-rating" data-rating="4.5" />
                        </div>
                        <p>
                          Commodo est luctus eget. Proin in nunc laoreet justo
                          volutpat blandit enim. Sem felis, ullamcorper vel
                          aliquam non, varius eget justo. Duis quis nunc tellus
                          sollicitudin mauris.
                        </p>
                        <a href="#" className="rate-review">
                          <i className="sl sl-icon-note" /> Edit
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div className="comments listing-reviews">
                  <ul>
                    <li>
                      <div className="avatar">
                        <img src="images/reviews-avatar.jpg" alt="" />{' '}
                      </div>
                      <div className="comment-content">
                        <div className="arrow-comment" />
                        <div className="comment-by">
                          Your review{' '}
                          <div className="comment-by-listing own-comment">
                            on <a href="#">Think Coffee</a>
                          </div>{' '}
                          <span className="date">May 2019</span>
                          <div className="star-rating" data-rating={5} />
                        </div>
                        <p>
                          Commodo est luctus eget. Proin in nunc laoreet justo
                          volutpat blandit enim. Sem felis, ullamcorper vel
                          aliquam non, varius eget justo. Duis quis nunc tellus
                          sollicitudin mauris.
                        </p>
                        <a href="#" className="rate-review">
                          <i className="sl sl-icon-note" /> Edit
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewsContent;
