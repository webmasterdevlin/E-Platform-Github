import React from 'react';
import NavigationBar from '../../components/navigation-bar';
import Footer from '../../components/footer';
import TitleBar from '../../components/title-bar';

function TypographyPage() {
  return (
    <div id="wrapper">
      <NavigationBar />
      <div>
        <TitleBar title={'Typography'} />

        {/* Content================================================== */}
        <div className="container">
          {/* Blockquote================================================== */}
          <div className="row">
            <div className="col-md-12">
              {/* Headline */}
              <h4 className="headline with-border margin-top-0 margin-bottom-35">
                Blockquote
              </h4>
              <blockquote>
                Mauris aliquet ultricies ante, non faucibus ante gravida sed.
                Sed ultrices pellentesque purus, vulputate volutpat ipsum
                hendrerit sed neque sed sapien rutrum laoreet justo ultrices. In
                pellentesque lorem condimentum dui morbi pulvinar dui non quam
                pretium ut lacinia tortor.
              </blockquote>
            </div>
          </div>
          {/* Inline Elements
	================================================== */}
          <div className="row">
            <div className="col-md-12">
              {/* Headline */}
              <h4 className="headline with-border margin-top-45 margin-bottom-25">
                Inline Elements
              </h4>
              <p>
                Etiam elit est, tincidunt non tincidunt{' '}
                <sup>This is sup element</sup> elit, sed do. Mauris aliquet
                ultricies <sub>This is sub element</sub> volutpat ipsum
                hendrerit sed neque sed sapien rutrum laoreet justo ut labolore
                magna aliqua. <del>This is deleted element</del> enim ad minim
                veniam. Lorem ipsum elit{' '}
                <mark className="color">mark element with “color” class.</mark>,
                consectetur adipisicing. Lorem <dfn>dfn element here</dfn> ipsum
                dosectetur tincidunt sit amet, <strong>strong text</strong>.
                Aliquam eu id lectus. Vestibulum ante ipsum primis in faucibus
                orci luctus et ultrices posuere cubilia. Lorem ipsum dosectetur{' '}
                <code>Some code text</code> velit sagittis,{' '}
                <abbr title="The abbr tag">abbreviation</abbr> elit est{' '}
                <mark>highlighted text by using “mark” tag</mark>.
              </p>
            </div>
          </div>
          {/* Tooltips
	================================================== */}
          <div className="row">
            <div className="col-md-12">
              {/* Headline */}
              <h4 className="headline margin-top-40 margin-bottom-25">
                Tooltips
              </h4>
              <p>
                Maecenas dolor est, interdum a euismod eu,{' '}
                <a href="#" className="tooltip top" title="First Tooltip">
                  tooltip from top
                </a>{' '}
                nisl. Nam sed iaculis massa. Sed nisl lectus, tempor
                sollicitudin est{' '}
                <a href="#" className="tooltip right" title="Second Tooltip">
                  tooltip from right
                </a>{' '}
                dignissim bibendum{' '}
                <a href="#" className="tooltip left" title="Third Tooltip">
                  tooltip from left
                </a>{' '}
                nam erat felis, commodo sed semper commodo vel mauris{' '}
                <a href="#" className="tooltip bottom" title="Fourth Tooltip">
                  tooltip from bottom
                </a>{' '}
                bibendum tempus.
              </p>
            </div>
          </div>
          {/* List Styles
	================================================== */}
          <div className="row">
            <div className="col-md-12">
              <h4 className="headline margin-bottom-25 margin-top-40">
                Icon Lists
              </h4>
              <div className="row">
                <div className="col-md-3">
                  <ul className="list-1">
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Consectetur adipiscing elit</li>
                    <li>Integer molestie lorem at massa</li>
                    <li>Facilisis in pretium nisl aliquet</li>
                  </ul>
                </div>
                <div className="col-md-3">
                  <ul className="list-2">
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Consectetur adipiscing elit</li>
                    <li>Integer molestie lorem at massa</li>
                    <li>Facilisis in pretium nisl aliquet</li>
                  </ul>
                </div>
                <div className="col-md-3">
                  <ul className="list-3 color">
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Consectetur adipiscing elit</li>
                    <li>Integer molestie lorem at massa</li>
                    <li>Facilisis in pretium nisl aliquet</li>
                  </ul>
                </div>
                <div className="col-md-3">
                  <ul className="list-4 color">
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Consectetur adipiscing elit</li>
                    <li>Integer molestie lorem at massa</li>
                    <li>Facilisis in pretium nisl aliquet</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* Numbered Lists */}
          <div className="row">
            <div className="col-md-12">
              <h4 className="headline margin-bottom-30 margin-top-40">
                Numbered Lists
              </h4>
            </div>
            <div className="col-md-4">
              <div className="numbered">
                <ol>
                  <li>Praesent in libero vel pellentesque</li>
                  <li>Proin fermentum eratin eget porttitor</li>
                  <li>Maecenas quis consequat libero</li>
                  <li>Nunc orci augue consequat</li>
                  <li>Praesent in libero vel pellentesque</li>
                  <li>Proin fermentum eratin eget porttitor</li>
                </ol>
              </div>
            </div>
            <div className="col-md-4">
              <div className="numbered color">
                <ol>
                  <li>Praesent in libero vel pellentesque</li>
                  <li>Proin fermentum eratin eget porttitor</li>
                  <li>Maecenas quis consequat libero</li>
                  <li>Nunc orci augue consequat</li>
                  <li>Praesent in libero vel pellentesque</li>
                  <li>Proin fermentum eratin eget porttitor</li>
                </ol>
              </div>
            </div>
            <div className="col-md-4">
              <div className="numbered color filled">
                <ol>
                  <li>Praesent in libero vel pellentesque</li>
                  <li>Proin fermentum eratin eget porttitor</li>
                  <li>Maecenas quis consequat libero</li>
                  <li>Nunc orci augue consequat</li>
                  <li>Praesent in libero vel pellentesque</li>
                  <li>Proin fermentum eratin eget porttitor</li>
                </ol>
              </div>
            </div>
          </div>
          {/* Headlines
	================================================== */}
          <div className="row margin-top-20">
            <div className="col-md-12">
              <div className="demo">
                <h1>Headline H1</h1>
                <h2>Headline H2</h2>
                <h3>Headline H3</h3>
                <h4>Headline H4</h4>
                <h5>Headline H5</h5>
                <h6>Headline H6</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default TypographyPage;
