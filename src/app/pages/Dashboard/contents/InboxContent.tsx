import React from 'react';
import DashboardTitleBar from '../dashboard-title-bar';

function InboxContent() {
  return (
    <div className="dashboard-content">
      <DashboardTitleBar title={'Messages'} />

      <div className="row">
        {/* Listings */}
        <div className="col-lg-12 col-md-12">
          <div className="messages-container margin-top-0">
            <div className="messages-headline">
              <h4>Inbox</h4>
            </div>
            <div className="messages-inbox">
              <ul>
                <li className="unread">
                  <a>
                    <div className="message-avatar">
                      <img
                        src="http://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm&s=70"
                        alt=""
                      />
                    </div>
                    <div className="message-by">
                      <div className="message-by-headline">
                        <h5>
                          Kathy Brown <i>Unread</i>
                        </h5>
                        <span>2 hours ago</span>
                      </div>
                      <p>
                        Hello, I want to talk about your great listing! Morbi
                        velit eros, sagittis in facilisis non, rhoncus posuere
                        ultricies...
                      </p>
                    </div>
                  </a>
                </li>
                <li className="unread">
                  <a>
                    <div className="message-avatar">
                      <img
                        src="http://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm&s=70"
                        alt=""
                      />
                    </div>
                    <div className="message-by">
                      <div className="message-by-headline">
                        <h5>
                          John Doe <i>Unread</i>
                        </h5>
                        <span>4 hours ago</span>
                      </div>
                      <p>
                        Hello, I want to talk about your great listing! Morbi
                        velit eros, sagittis in facilisis non, rhoncus posuere
                        ultricies...
                      </p>
                    </div>
                  </a>
                </li>
                <li>
                  <a>
                    <div className="message-avatar">
                      <img
                        src="http://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm&s=70"
                        alt=""
                      />
                    </div>
                    <div className="message-by">
                      <div className="message-by-headline">
                        <h5>Thomas Smith</h5>
                        <span>Yesterday</span>
                      </div>
                      <p>
                        Hello, I want to talk about your great listing! Morbi
                        velit eros, sagittis in facilisis non, rhoncus posuere
                        ultricies...
                      </p>
                    </div>
                  </a>
                </li>
                <li>
                  <a>
                    <div className="message-avatar">
                      <img
                        src="http://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm&s=70"
                        alt=""
                      />
                    </div>
                    <div className="message-by">
                      <div className="message-by-headline">
                        <h5>Mike Behringer</h5>
                        <span>28.06.2017</span>
                      </div>
                      <p>
                        Hello, I want to talk about your great listing! Morbi
                        velit eros, sagittis in facilisis non, rhoncus posuere
                        ultricies...
                      </p>
                    </div>
                  </a>
                </li>
                <li>
                  <a>
                    <div className="message-avatar">
                      <img
                        src="http://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm&s=70"
                        alt=""
                      />
                    </div>
                    <div className="message-by">
                      <div className="message-by-headline">
                        <h5>Robert Baker</h5>
                        <span>22.06.2017</span>
                      </div>
                      <p>
                        Hello, I want to talk about your great listing! Morbi
                        velit eros, sagittis in facilisis non, rhoncus posuere
                        ultricies...
                      </p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
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
      </div>
    </div>
  );
}

export default InboxContent;
