import React from 'react';
import NavigationBar from '../../components/navigation-bar';
import Footer from '../../components/footer';
import TitleBar from '../../components/title-bar';

function BlogPage() {
  return (
    <div id="wrapper">
      <NavigationBar />

      <TitleBar title={'Blog'} />

      {/* Content================================================== */}
      <div className="container">
        {/* Blog Posts */}
        <div className="blog-page">
          <div className="row">
            <div className="col-lg-9 col-md-8 padding-right-30">
              {/* Blog Post */}
              <div className="blog-post">
                {/* Img */}
                <a href="pages-blog-post.html" className="post-img">
                  <img src="../../../assets/images/blog-post-01.jpg" alt="" />
                </a>
                {/* Content */}
                <div className="post-content">
                  <h3>
                    <a href="pages-blog-post.html">Hotels for All Budgets </a>
                  </h3>
                  <ul className="post-meta">
                    <li>August 22, 2019</li>
                    <li>
                      <a href="#">Tips</a>
                    </li>
                    <li>
                      <a href="#">5 Comments</a>
                    </li>
                  </ul>
                  <p>
                    Nam nisl lacus, dignissim ac tristique ut, scelerisque eu
                    massa. Vestibulum ligula nunc, rutrum in malesuada vitae,
                    tempus sed augue. Curabitur quis lectus quis augue dapibus
                    facilisis.
                  </p>
                  <a href="pages-blog-post.html" className="read-more">
                    Read More <i className="fa fa-angle-right" />
                  </a>
                </div>
              </div>
              {/* Blog Post / End */}
              {/* Blog Post */}
              <div className="blog-post">
                {/* Img */}
                <a href="pages-blog-post.html" className="post-img">
                  <img src="../../../assets/images/blog-post-02.jpg" alt="" />
                </a>
                {/* Content */}
                <div className="post-content">
                  <h3>
                    <a href="pages-blog-post.html">
                      The 50 Greatest Street Arts In London
                    </a>
                  </h3>
                  <ul className="post-meta">
                    <li>August 18, 2019</li>
                    <li>
                      <a href="#">Tips</a>
                    </li>
                    <li>
                      <a href="#">7 Comments</a>
                    </li>
                  </ul>
                  <p>
                    Nam nisl lacus, dignissim ac tristique ut, scelerisque eu
                    massa. Vestibulum ligula nunc, rutrum in malesuada vitae,
                    tempus sed augue. Curabitur quis lectus quis augue dapibus
                    facilisis.
                  </p>
                  <a href="pages-blog-post.html" className="read-more">
                    Read More <i className="fa fa-angle-right" />
                  </a>
                </div>
              </div>
              {/* Blog Post / End */}
              {/* Blog Post */}
              <div className="blog-post">
                {/* Img */}
                <a href="pages-pages-blog-post.html" className="post-img">
                  <img src="../../../assets/images/blog-post-03.jpg" alt="" />
                </a>
                {/* Content */}
                <div className="post-content">
                  <h3>
                    <a href="pages-pages-blog-post.html">
                      The Best Cofee Shops In Sydney Neighborhoods
                    </a>
                  </h3>
                  <ul className="post-meta">
                    <li>August 10, 2019</li>
                    <li>
                      <a href="#">Tips</a>
                    </li>
                    <li>
                      <a href="#">12 Comments</a>
                    </li>
                  </ul>
                  <p>
                    Nam nisl lacus, dignissim ac tristique ut, scelerisque eu
                    massa. Vestibulum ligula nunc, rutrum in malesuada vitae,
                    tempus sed augue. Curabitur quis lectus quis augue dapibus
                    facilisis.
                  </p>
                  <a href="pages-blog-post.html" className="read-more">
                    Read More <i className="fa fa-angle-right" />
                  </a>
                </div>
              </div>
              {/* Blog Post / End */}
              {/* Pagination */}
              <div className="clearfix" />
              <div className="row">
                <div className="col-md-12">
                  {/* Pagination */}
                  <div className="pagination-container margin-bottom-40">
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
                          <a href="#">3</a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="sl sl-icon-arrow-right" />
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
              {/* Pagination / End */}
            </div>
            {/* Blog Posts / End */}
            {/* Widgets */}
            <div className="col-lg-3 col-md-4">
              <div className="sidebar right">
                {/* Widget */}
                <div className="widget">
                  <h3 className="margin-top-0 margin-bottom-25">Search Blog</h3>
                  <div className="search-blog-input">
                    <div className="input">
                      <input
                        className="search-field"
                        type="text"
                        placeholder="Type and hit enter"
                      />
                    </div>
                  </div>
                  <div className="clearfix" />
                </div>
                {/* Widget / End */}
                {/* Widget */}
                <div className="widget margin-top-40">
                  <h3>Got any questions?</h3>
                  <div className="info-box margin-bottom-10">
                    <p>Having any questions? Feel free to ask!</p>
                    <a
                      href="pages-contact.html"
                      className="button fullwidth margin-top-20"
                    >
                      <i className="fa fa-envelope-o" /> Drop Us a Line
                    </a>
                  </div>
                </div>
                {/* Widget / End */}
                {/* Widget */}
                <div className="widget margin-top-40">
                  <h3>Popular Posts</h3>
                  <ul className="widget-tabs">
                    {/* Post #1 */}
                    <li>
                      <div className="widget-content">
                        <div className="widget-thumb">
                          <a href="pages-blog-post.html">
                            <img
                              src="../../../assets/images/blog-widget-03.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="widget-text">
                          <h5>
                            <a href="pages-blog-post.html">
                              Hotels for All Budgets{' '}
                            </a>
                          </h5>
                          <span>October 26, 2016</span>
                        </div>
                        <div className="clearfix" />
                      </div>
                    </li>
                    {/* Post #2 */}
                    <li>
                      <div className="widget-content">
                        <div className="widget-thumb">
                          <a href="pages-blog-post.html">
                            <img
                              src="../../../assets/images/blog-widget-02.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="widget-text">
                          <h5>
                            <a href="pages-blog-post.html">
                              The 50 Greatest Street Arts In London
                            </a>
                          </h5>
                          <span>November 9, 2016</span>
                        </div>
                        <div className="clearfix" />
                      </div>
                    </li>
                    {/* Post #3 */}
                    <li>
                      <div className="widget-content">
                        <div className="widget-thumb">
                          <a href="pages-blog-post.html">
                            <img
                              src="../../../assets/images/blog-widget-01.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="widget-text">
                          <h5>
                            <a href="pages-blog-post.html">
                              The Best Cofee Shops In Sydney Neighborhoods
                            </a>
                          </h5>
                          <span>November 12, 2016</span>
                        </div>
                        <div className="clearfix" />
                      </div>
                    </li>
                  </ul>
                </div>
                {/* Widget / End*/}
                {/* Widget */}
                <div className="widget margin-top-40">
                  <h3 className="margin-bottom-25">Social</h3>
                  <ul className="social-icons rounded">
                    <li>
                      <a className="facebook" href="#">
                        <i className="icon-facebook" />
                      </a>
                    </li>
                    <li>
                      <a className="twitter" href="#">
                        <i className="icon-twitter" />
                      </a>
                    </li>
                    <li>
                      <a className="gplus" href="#">
                        <i className="icon-gplus" />
                      </a>
                    </li>
                    <li>
                      <a className="linkedin" href="#">
                        <i className="icon-linkedin" />
                      </a>
                    </li>
                  </ul>
                </div>
                {/* Widget / End*/}
                <div className="clearfix" />
                <div className="margin-bottom-40" />
              </div>
            </div>
          </div>
          {/* Sidebar / End */}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default BlogPage;
