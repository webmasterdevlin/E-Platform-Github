import React from 'react';
import NavBar from '../../../components/nav-bar';
import Footer from '../../../components/footer';

function BlogPost() {
  return (
    <div className="wrapper">
      <NavBar />
      <div>
        {/* Titlebar
================================================== */}
        <div id="titlebar" className="gradient">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2>Blog</h2>
                <span>Latest News</span>
                {/* Breadcrumbs */}
                <nav id="breadcrumbs">
                  <ul>
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>Blog</li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
        {/* Content
================================================== */}
        <div className="container">
          {/* Blog Posts */}
          <div className="blog-page">
            <div className="row">
              {/* Post Content */}
              <div className="col-lg-9 col-md-8 padding-right-30">
                {/* Blog Post */}
                <div className="blog-post single-post">
                  {/* Img */}
                  <img
                    className="post-img"
                    src="../../../../assets/images/blog-post-02.jpg"
                    alt=""
                  />
                  {/* Content */}
                  <div className="post-content">
                    <h3>The 50 Greatest Street Arts In London</h3>
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
                      facilisis. Vivamus tincidunt orci est, in vehicula nisi
                      eleifend ut. Vestibulum sagittis varius orci vitae.
                    </p>
                    <div className="post-quote">
                      <span className="icon" />
                      <blockquote>
                        Mauris aliquet ultricies ante, non faucibus ante gravida
                        sed. Sed ultrices pellentesque purus, vulputate volutpat
                        ipsum hendrerit sed neque sed sapien rutrum.
                      </blockquote>
                    </div>
                    <p>
                      In ut odio libero, at vulputate urna. Nulla tristique mi a
                      massa convallis cursus. Nulla eu mi magna. Etiam suscipit
                      commodo gravida. Cras suscipit, quam vitae adipiscing
                      faucibus, risus nibh laoreet odio, a porttitor metus eros
                      ut enim. Morbi augue velit, tempus mattis dignissim nec,
                      porta sed risus. Donec eget magna eu lorem tristique
                      pellentesque eget eu dui. Fusce lacinia tempor malesuada.
                      Ut lacus sapien, placerat a ornare nec, elementum sit amet
                      felis. Maecenas pretium lorem hendrerit eros sagittis
                      fermentum.
                    </p>
                    <p>
                      Phasellus enim magna, varius et commodo ut, ultricies
                      vitae velit. Ut nulla tellus, eleifend euismod
                      pellentesque vel, sagittis vel justo. In libero urna,
                      venenatis sit amet ornare non, suscipit nec risus. Sed
                      consequat justo non mauris pretium at tempor justo
                      sodales. Quisque tincidunt laoreet malesuada. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus. Integer vitae ante enim. Fusce sed
                      elit est. Suspendisse sit amet mauris in quam pretium
                      faucibus et aliquam odio.{' '}
                    </p>
                    {/* Share Buttons */}
                    <ul className="share-buttons margin-top-40 margin-bottom-0">
                      <li>
                        <a className="fb-share" href="#">
                          <i className="fa fa-facebook" /> Share
                        </a>
                      </li>
                      <li>
                        <a className="twitter-share" href="#">
                          <i className="fa fa-twitter" /> Tweet
                        </a>
                      </li>
                      <li>
                        <a className="gplus-share" href="#">
                          <i className="fa fa-google-plus" /> Share
                        </a>
                      </li>
                      <li>
                        <a className="pinterest-share" href="#">
                          <i className="fa fa-pinterest-p" /> Pin
                        </a>
                      </li>
                    </ul>
                    <div className="clearfix" />
                  </div>
                </div>
                {/* Blog Post / End */}
                {/* Post Navigation */}
                <ul id="posts-nav" className="margin-top-0 margin-bottom-45">
                  <li className="next-post">
                    <a href="#">
                      <span>Next Post</span>
                      The Best Cofee Shops In Sydney Neighborhoods
                    </a>
                  </li>
                  <li className="prev-post">
                    <a href="#">
                      <span>Previous Post</span>
                      Hotels for All Budgets
                    </a>
                  </li>
                </ul>
                {/* About Author */}
                <div className="about-author">
                  <img src="../../../../assets/images/user-avatar.jpg" alt="" />
                  <div className="about-description">
                    <h4>Tom Perrin</h4>
                    <a href="#">tom@example.com</a>
                    <p>
                      Nullam ultricies, velit ut varius molestie, ante metus
                      condimentum nisi, dignissim facilisis turpis ex in libero.
                      Sed porta ante tortor, a pulvinar mi facilisis nec. Proin
                      finibus dolor ac convallis congue.
                    </p>
                  </div>
                </div>
                {/* Related Posts */}
                <div className="clearfix" />
                <h4 className="headline margin-top-25">Related Posts</h4>
                <div className="row">
                  {/* Blog Post Item */}
                  <div className="col-md-6">
                    <a href="#" className="blog-compact-item-container">
                      <div className="blog-compact-item">
                        <img
                          src="../../../../assets/images/blog-compact-post-01.jpg"
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
                  <div className="col-md-6">
                    <a href="#" className="blog-compact-item-container">
                      <div className="blog-compact-item">
                        <img
                          src="../../../../assets/images/blog-compact-post-03.jpg"
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
                </div>
                {/* Related Posts / End */}
                <div className="margin-top-50" />
                {/* Reviews */}
                <section className="comments">
                  <h4 className="headline margin-bottom-35">
                    Comments <span className="comments-amount">(5)</span>
                  </h4>
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
                          Kathy Brown
                          <span className="date">22 August 2019</span>
                          <a href="#" className="reply">
                            <i className="fa fa-reply" /> Reply
                          </a>
                        </div>
                        <p>
                          Morbi velit eros, sagittis in facilisis non, rhoncus
                          et erat. Nam posuere tristique sem, eu ultricies
                          tortor imperdiet vitae. Curabitur lacinia neque non
                          metus
                        </p>
                      </div>
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
                              Tom Smith
                              <span className="date">22 August 2019</span>
                              <a href="#" className="reply">
                                <i className="fa fa-reply" /> Reply
                              </a>
                            </div>
                            <p>
                              Rrhoncus et erat. Nam posuere tristique sem, eu
                              ultricies tortor imperdiet vitae. Curabitur
                              lacinia neque.
                            </p>
                          </div>
                        </li>
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
                              Kathy Brown
                              <span className="date">20 August 2019</span>
                              <a href="#" className="reply">
                                <i className="fa fa-reply" /> Reply
                              </a>
                            </div>
                            <p>
                              Nam posuere tristique sem, eu ultricies tortor.
                            </p>
                          </div>
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
                                  John Doe
                                  <span className="date">18 August 2019</span>
                                  <a href="#" className="reply">
                                    <i className="fa fa-reply" /> Reply
                                  </a>
                                </div>
                                <p>Great template!</p>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
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
                          John Doe<span className="date">18 August 2019</span>
                          <a href="#" className="reply">
                            <i className="fa fa-reply" /> Reply
                          </a>
                        </div>
                        <p>
                          Commodo est luctus eget. Proin in nunc laoreet justo
                          volutpat blandit enim. Sem felis, ullamcorper vel
                          aliquam non, varius eget justo. Duis quis nunc tellus
                          sollicitudin mauris.
                        </p>
                      </div>
                    </li>
                  </ul>
                </section>
                <div className="clearfix" />
                {/* Add Comment */}
                <div id="add-review" className="add-review-box">
                  {/* Add Review */}
                  <h3 className="listing-desc-headline margin-bottom-35">
                    Add Review
                  </h3>
                  {/* Review Comment */}
                  <form id="add-comment" className="add-comment">
                    <fieldset>
                      <div className="row">
                        <div className="col-md-6">
                          <label>Name:</label>
                          <input type="text" />
                        </div>
                        <div className="col-md-6">
                          <label>Email:</label>
                          <input type="text" />
                        </div>
                      </div>
                      <div>
                        <label>Comment:</label>
                        <textarea cols={40} rows={3} />
                      </div>
                    </fieldset>
                    <button className="button">Submit Comment</button>
                    <div className="clearfix" />
                  </form>
                </div>
                {/* Add Review Box / End */}
              </div>
              {/* Content / End */}
              {/* Widgets */}
              <div className="col-lg-3 col-md-4">
                <div className="sidebar right">
                  {/* Widget */}
                  <div className="widget">
                    <h3 className="margin-top-0 margin-bottom-25">
                      Search Blog
                    </h3>
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
                                src="../../../../assets/images/blog-widget-03.jpg"
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
                                src="../../../../assets/images/blog-widget-02.jpg"
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
                                src="../../../../assets/images/blog-widget-01.jpg"
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
      </div>
      <Footer />
    </div>
  );
}

export default BlogPost;
