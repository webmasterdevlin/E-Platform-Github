import React from 'react';
import NavBar from '../../components/nav-bar';
import Footer from '../../components/footer';

function ElementsPage() {
  return (
    <div id="wrapper">
      <NavBar />
      <div>
        {/* Content================================================== */}
        {/* Container */}
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h4 className="headline margin-top-0 margin-bottom-30">
                Tabs Style 1
              </h4>
              <div className="style-1">
                {/* Tabs Navigation */}
                <ul className="tabs-nav">
                  <li className="active">
                    <a href="#tab1b">First Tab</a>
                  </li>
                  <li>
                    <a href="#tab2b">Second Tab</a>
                  </li>
                  <li>
                    <a href="#tab3b">Third Tab</a>
                  </li>
                </ul>
                {/* Tabs Content */}
                <div className="tabs-container">
                  <div className="tab-content" id="tab1b">
                    Lorem ipsum pharetra lorem felis. Aliquam egestas
                    consectetur elementum class aptentea taciti sociosqu ad
                    litora torquent perea conubia nostra lorem consectetur
                    adipiscing elit. Donec vestibulum justo a diam ultricies
                    pellentesque.
                  </div>
                  <div className="tab-content" id="tab2b">
                    Aenean dolor mi, luctus et laoreet hendrerit, condimentum
                    faucibus mi. Nam et sem eros. Sed sed eros nec massa
                    pellentesque accumsan in nec magna. Donec sollicitudin enim
                    nec justo mollis bibendum. Nulla eleifend mollis velit. Ut
                    sed risus eget metus egestas sagittis. Etiam vestibulum
                    interdum turpis.
                  </div>
                  <div className="tab-content" id="tab3b">
                    Suspendisse ut laoreet massa. Etiam vel dolor eu quam varius
                    tempor eu eu mi. Duis auctor interdum ligula ut faucibus.
                    Vivamus lorem ipsum dolor sit amet in tincidunt augue.
                    Aenean at ligula justo, sed gravida metus.{' '}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <h4 className="headline margin-top-0 margin-bottom-30">
                Tabs Style 2
              </h4>
              <div className="style-2">
                {/* Tabs Navigation */}
                <ul className="tabs-nav">
                  <li className="active">
                    <a href="#tab1a">
                      <i className="sl sl-icon-pin" /> First Tab
                    </a>
                  </li>
                  <li>
                    <a href="#tab2a">
                      <i className="sl sl-icon-badge" /> Second Tab
                    </a>
                  </li>
                  <li>
                    <a href="#tab3a">
                      <i className="sl sl-icon-bubbles" /> Third Tab
                    </a>
                  </li>
                </ul>
                {/* Tabs Content */}
                <div className="tabs-container">
                  <div className="tab-content" id="tab1a">
                    Lorem ipsum pharetra lorem felis. Aliquam egestas
                    consectetur elementum class aptentea taciti sociosqu ad
                    litora torquent perea conubia nostra lorem consectetur
                    adipiscing elit. Donec vestibulum justo a diam ultricies
                    pellentesque.
                  </div>
                  <div className="tab-content" id="tab2a">
                    Aenean dolor mi, luctus et laoreet hendrerit, condimentum
                    faucibus mi. Nam et sem eros. Sed sed eros nec massa
                    pellentesque accumsan in nec magna. Donec sollicitudin enim
                    nec justo mollis bibendum. Nulla eleifend mollis velit. Ut
                    sed risus eget metus egestas sagittis. Etiam vestibulum
                    interdum turpis.
                  </div>
                  <div className="tab-content" id="tab3a">
                    Suspendisse ut laoreet massa. Etiam vel dolor eu quam varius
                    tempor eu eu mi. Duis auctor interdum ligula ut faucibus.
                    Vivamus lorem ipsum dolor sit amet in tincidunt augue.
                    Aenean at ligula justo, sed gravida metus.{' '}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <h4 className="headline margin-top-70 margin-bottom-30">
                Buttons
              </h4>
              <p>
                <a href="#" className="button">
                  Filled Button
                </a>
                <a href="#" className="button medium">
                  <i className="sl sl-icon-layers" /> Filled Button
                </a>{' '}
                <br />
                <a href="#" className="button border">
                  Border Button
                </a>
                <a href="#" className="button medium border">
                  <i className="sl sl-icon-docs" /> Border Button
                </a>
              </p>
            </div>
            <div className="col-md-6">
              <h4 className="headline margin-top-70 margin-bottom-30">
                Toggles
              </h4>
              {/* Toggles Container */}
              <div className="style-2">
                {/* Toggle 1 */}
                <div className="toggle-wrap">
                  <span className="trigger ">
                    <a href="#">
                      First Toggle
                      <i className="sl sl-icon-plus" />
                    </a>
                  </span>
                  <div className="toggle-container">
                    <p>
                      Perspiciatis unde omnis iste natus error sit voluptatem
                      accusantium doloremque laudantium, totam rem aperiam.
                      Donec ut volutpat metus. Vivamus justo arcu, elementum a
                      sollicitudin pellentesque, tincidunt ac enim. Proin id
                      arcu ut ipsum vestibulum elementum.
                    </p>
                  </div>
                </div>
                {/* Toggle 2 */}
                <div className="toggle-wrap">
                  <span className="trigger">
                    <a href="#">
                      <i className="sl sl-icon-pin" />
                      Second Toggle With Icon <i className="sl sl-icon-plus" />{' '}
                    </a>
                  </span>
                  <div className="toggle-container">
                    <p>
                      Seded ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam. Donec ut volutpat metus. Aliquam tortor lorem,
                      fringilla tempor dignissim at, pretium et arcu.
                    </p>
                  </div>
                </div>
              </div>
              {/* Toggles Container / End */}
            </div>
            {/* Accordions */}
            {/* <div class="col-md-12">

			<h4 class="headline margin-top-70 margin-bottom-30">Accordions</h4>
			<div class="style-2">
				<div class="accordion">

					<h3><span class="ui-accordion-header-icon ui-icon ui-accordion-icon"></span><i class="sl sl-icon-plus"></i> First Accordion</h3>
					<div>
						<p>Mauris mauris ante, blandit et, ultrices a, susceros. Nam mi. Proin viverra leo ut odio. Curabitur malesuada. Vestibulum a velit eu ante scelerisque vulputate aliquam egestas litora torquent conubia.</p>
					</div>

					<h3><span class="ui-accordion-header-icon ui-icon ui-accordion-icon"></span><i class="sl sl-icon-plus"></i> Second Accordion</h3>
					<div>
						<p>Sed non urna. Donec et ante. Phasellus eu ligula. Vestibulum sit amet purus vivamus hendrerit, dolor at aliquet laoreet, mauris turpis porttitor velit, faucibus interdum tellus libero ac justo. Vivamus non quam. Nullam laoreet, velit ut taciti sociosqu condimentum feugiat.</p>
					</div>

					<h3><span class="ui-accordion-header-icon ui-icon ui-accordion-icon"></span><i class="sl sl-icon-plus"></i> Third Accordion</h3>
					<div>
						<p>Nam enim risus, molestie et, porta ac, aliquam ac, risus. Quisque lobortis. Phasellus pellentesque purus in massa. Aenean in pede. Phasellus ac libero ac tellus pellentesque semper.</p>
					</div>

				</div>
			</div>
		</div> */}
          </div>
          <div className="row">
            <div className="col-md-6">
              <h4 className="headline margin-top-70 margin-bottom-30">
                Single Select Box
              </h4>
              <select data-placeholder="Select Item" className="chosen-select">
                <option label="blank" />
                <option>Item 1</option>
                <option>Item 2</option>
                <option>Item 3</option>
                <option>Item 4</option>
              </select>
            </div>
            <div className="col-md-6">
              <h4 className="headline margin-top-70 margin-bottom-30">
                Multiple Select Box
              </h4>
              <select
                data-placeholder="Select Multiple Items"
                className="chosen-select"
                multiple
              >
                <option>Item 1</option>
                <option>Item 2</option>
                <option>Item 3</option>
                <option>Item 4</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <h4 className="headline margin-top-70 margin-bottom-30">Table</h4>
              <table className="basic-table">
                <tbody>
                  <tr>
                    <th>Column 1</th>
                    <th>Column 2</th>
                  </tr>
                  <tr>
                    <td data-label="Column 1">Item</td>
                    <td data-label="Column 2">Description</td>
                  </tr>
                  <tr>
                    <td data-label="Column 1">Item</td>
                    <td data-label="Column 2">Description</td>
                  </tr>
                  <tr>
                    <td data-label="Column 1">Item</td>
                    <td data-label="Column 2">Description</td>
                  </tr>
                  <tr>
                    <td data-label="Column 1">Item</td>
                    <td data-label="Column 2">Description</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-md-6">
              <h4 className="headline margin-top-70 margin-bottom-30">
                Notifications
              </h4>
              <div className="notification error closeable">
                <p>
                  <span>Error!</span> Please fill in all the fields required.
                </p>
                <a className="close" href="#" />
              </div>
              <div className="notification success closeable">
                <p>
                  <span>Success!</span> You did it, now relax and enjoy it.
                </p>
                <a className="close" href="#" />
              </div>
              <div className="notification warning closeable">
                <p>
                  <span>Warning!</span> Change this and that and try again.
                </p>
                <a className="close" href="#" />
              </div>
              <div className="notification notice closeable">
                <p>
                  <span>Notice!</span> Please edit the information below.
                </p>
                <a className="close" href="#" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <h4 className="headline margin-top-50 margin-bottom-40">
                Social Icons 1
              </h4>
              {/* Social Icons / Start */}
              <ul className="social-icons rounded">
                <li>
                  <a className="twitter" href="#">
                    <i className="icon-twitter" />
                  </a>
                </li>
                <li>
                  <a className="dribbble" href="#">
                    <i className="icon-dribbble" />
                  </a>
                </li>
                <li>
                  <a className="facebook" href="#">
                    <i className="icon-facebook" />
                  </a>
                </li>
                <li>
                  <a className="linkedin" href="#">
                    <i className="icon-linkedin" />
                  </a>
                </li>
                <li>
                  <a className="gplus" href="#">
                    <i className="icon-gplus" />
                  </a>
                </li>
                <li>
                  <a className="stumbleupon" href="#">
                    <i className="icon-stumbleupon" />
                  </a>
                </li>
                <li>
                  <a className="fivehundredpx" href="#">
                    <i className="icon-fivehundredpx" />
                  </a>
                </li>
                <li>
                  <a className="pinterest" href="#">
                    <i className="icon-pinterest" />
                  </a>
                </li>
                <li>
                  <a className="forrst" href="#">
                    <i className="icon-forrst" />
                  </a>
                </li>
                <li>
                  <a className="digg" href="#">
                    <i className="icon-digg" />
                  </a>
                </li>
                <li>
                  <a className="spotify" href="#">
                    <i className="icon-spotify" />
                  </a>
                </li>
                <li>
                  <a className="reddit" href="#">
                    <i className="icon-reddit" />
                  </a>
                </li>
                <li>
                  <a className="delicious" href="#">
                    <i className="icon-delicious" />
                  </a>
                </li>
                <li>
                  <a className="appstore" href="#">
                    <i className="icon-appstore" />
                  </a>
                </li>
                <li>
                  <a className="paypal" href="#">
                    <i className="icon-paypal" />
                  </a>
                </li>
                <li>
                  <a className="blogger" href="#">
                    <i className="icon-blogger" />
                  </a>
                </li>
                <li>
                  <a className="evernote" href="#">
                    <i className="icon-evernote" />
                  </a>
                </li>
                <li>
                  <a className="instagram" href="#">
                    <i className="icon-instagram" />
                  </a>
                </li>
                <li>
                  <a className="flickr" href="#">
                    <i className="icon-flickr" />
                  </a>
                </li>
                <li>
                  <a className="rss" href="#">
                    <i className="icon-rss" />
                  </a>
                </li>
                <li>
                  <a className="youtube" href="#">
                    <i className="icon-youtube" />
                  </a>
                </li>
                <li>
                  <a className="vimeo" href="#">
                    <i className="icon-vimeo" />
                  </a>
                </li>
                <li>
                  <a className="xing" href="#">
                    <i className="icon-xing" />
                  </a>
                </li>
                <li>
                  <a className="yahoo" href="#">
                    <i className="icon-yahoo" />
                  </a>
                </li>
                <li>
                  <a className="amazon" href="#">
                    <i className="icon-amazon" />
                  </a>
                </li>
                <li>
                  <a className="steam" href="#">
                    <i className="icon-steam" />
                  </a>
                </li>
                <li>
                  <a className="dropbox" href="#">
                    <i className="icon-dropbox" />
                  </a>
                </li>
                <li>
                  <a className="github" href="#">
                    <i className="icon-github" />
                  </a>
                </li>
                <li>
                  <a className="lastfm" href="#">
                    <i className="icon-lastfm" />
                  </a>
                </li>
                <li>
                  <a className="tumblr" href="#">
                    <i className="icon-tumblr" />
                  </a>
                </li>
              </ul>
              <div className="clearfix" />
              {/* Social Icons / End */}
            </div>
            <div className="col-md-6">
              <h4 className="headline margin-top-50 margin-bottom-40">
                Social Icons 2
              </h4>
              {/* Social Icons / Start */}
              <ul className="social-icons color rounded">
                <li>
                  <a className="twitter" href="#">
                    <i className="icon-twitter" />
                  </a>
                </li>
                <li>
                  <a className="dribbble" href="#">
                    <i className="icon-dribbble" />
                  </a>
                </li>
                <li>
                  <a className="facebook" href="#">
                    <i className="icon-facebook" />
                  </a>
                </li>
                <li>
                  <a className="linkedin" href="#">
                    <i className="icon-linkedin" />
                  </a>
                </li>
                <li>
                  <a className="gplus" href="#">
                    <i className="icon-gplus" />
                  </a>
                </li>
                <li>
                  <a className="stumbleupon" href="#">
                    <i className="icon-stumbleupon" />
                  </a>
                </li>
                <li>
                  <a className="fivehundredpx" href="#">
                    <i className="icon-fivehundredpx" />
                  </a>
                </li>
                <li>
                  <a className="pinterest" href="#">
                    <i className="icon-pinterest" />
                  </a>
                </li>
                <li>
                  <a className="forrst" href="#">
                    <i className="icon-forrst" />
                  </a>
                </li>
                <li>
                  <a className="digg" href="#">
                    <i className="icon-digg" />
                  </a>
                </li>
                <li>
                  <a className="spotify" href="#">
                    <i className="icon-spotify" />
                  </a>
                </li>
                <li>
                  <a className="reddit" href="#">
                    <i className="icon-reddit" />
                  </a>
                </li>
                <li>
                  <a className="delicious" href="#">
                    <i className="icon-delicious" />
                  </a>
                </li>
                <li>
                  <a className="appstore" href="#">
                    <i className="icon-appstore" />
                  </a>
                </li>
                <li>
                  <a className="paypal" href="#">
                    <i className="icon-paypal" />
                  </a>
                </li>
                <li>
                  <a className="blogger" href="#">
                    <i className="icon-blogger" />
                  </a>
                </li>
                <li>
                  <a className="evernote" href="#">
                    <i className="icon-evernote" />
                  </a>
                </li>
                <li>
                  <a className="instagram" href="#">
                    <i className="icon-instagram" />
                  </a>
                </li>
                <li>
                  <a className="flickr" href="#">
                    <i className="icon-flickr" />
                  </a>
                </li>
                <li>
                  <a className="rss" href="#">
                    <i className="icon-rss" />
                  </a>
                </li>
                <li>
                  <a className="youtube" href="#">
                    <i className="icon-youtube" />
                  </a>
                </li>
                <li>
                  <a className="vimeo" href="#">
                    <i className="icon-vimeo" />
                  </a>
                </li>
                <li>
                  <a className="xing" href="#">
                    <i className="icon-xing" />
                  </a>
                </li>
                <li>
                  <a className="yahoo" href="#">
                    <i className="icon-yahoo" />
                  </a>
                </li>
                <li>
                  <a className="amazon" href="#">
                    <i className="icon-amazon" />
                  </a>
                </li>
                <li>
                  <a className="steam" href="#">
                    <i className="icon-steam" />
                  </a>
                </li>
                <li>
                  <a className="dropbox" href="#">
                    <i className="icon-dropbox" />
                  </a>
                </li>
                <li>
                  <a className="github" href="#">
                    <i className="icon-github" />
                  </a>
                </li>
                <li>
                  <a className="lastfm" href="#">
                    <i className="icon-lastfm" />
                  </a>
                </li>
                <li>
                  <a className="tumblr" href="#">
                    <i className="icon-tumblr" />
                  </a>
                </li>
              </ul>
              <div className="clearfix" />
              {/* Social Icons / End */}
            </div>
          </div>
        </div>
        {/* Container / End */}
      </div>
      <Footer />
    </div>
  );
}

export default ElementsPage;
