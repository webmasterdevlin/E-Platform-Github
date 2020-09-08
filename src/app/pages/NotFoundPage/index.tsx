import * as React from 'react';
import NavBar from '../../components/nav-bar';
import Footer from '../../components/footer';
import TitleBar from '../../components/title-bar';

function NotFoundPage() {
  return (
    <div id="wrapper">
      <NavBar />
      <div>
        <TitleBar title={'Not Found'} />
        {/* Content================================================== */}
        {/* Container */}
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <section id="not-found" className="center">
                <h2>
                  404 <i className="fa fa-question-circle" />
                </h2>
                <p>
                  We're sorry, but the page you were looking for doesn't exist.
                </p>
                {/* Search */}
                <div className="row">
                  <div className="col-lg-8 col-lg-offset-2">
                    <div className="main-search-input gray-style margin-top-50 margin-bottom-10">
                      <div className="main-search-input-item">
                        <input
                          type="text"
                          placeholder="What are you looking for?"
                        />
                      </div>
                      <button className="button">Search</button>
                    </div>
                  </div>
                </div>
                {/* Search Section / End */}
              </section>
            </div>
          </div>
        </div>
        {/* Container / End */}
      </div>
      <Footer />
    </div>
  );
}
export default NotFoundPage;
