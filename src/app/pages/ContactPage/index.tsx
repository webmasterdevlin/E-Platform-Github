import React from 'react';
import NavigationBar from '../../components/navigation-bar';
import Footer from '../../components/footer';
import TitleBar from '../../components/title-bar';

function ContactPage() {
  return (
    <div id="wrapper">
      <NavigationBar />
      <TitleBar title={'Contact'} />
      <div>
        {/* Content================================================== */}
        {/* Container / Start */}
        <div className="container">
          <div className="row">
            {/* Contact Details */}
            <div className="col-md-4">
              <h4 className="headline margin-bottom-30">Find Us There</h4>
              {/* Contact Details */}
              <div className="sidebar-textbox">
                <p>
                  Collaboratively administrate channels whereas virtual.
                  Objectively seize scalable metrics whereas proactive
                  e-services.
                </p>
                <ul className="contact-details">
                  <li>
                    <i className="im im-icon-Phone-2" /> <strong>Phone:</strong>{' '}
                    <span>(123) 123-456 </span>
                  </li>
                  <li>
                    <i className="im im-icon-Fax" /> <strong>Fax:</strong>{' '}
                    <span>(123) 123-456 </span>
                  </li>
                  <li>
                    <i className="im im-icon-Globe" /> <strong>Web:</strong>{' '}
                    <span>
                      <a href="#">www.example.com</a>
                    </span>
                  </li>
                  <li>
                    <i className="im im-icon-Envelope" />{' '}
                    <strong>E-Mail:</strong>{' '}
                    <span>
                      <a href="#">office@example.com</a>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            {/* Contact Form */}
            <div className="col-md-8">
              <section id="contact">
                <h4 className="headline margin-bottom-35">Contact Form</h4>
                <div id="contact-message" />
                <form
                  method="post"
                  name="contactform"
                  id="contactform"
                  autoComplete="on"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div>
                        <input
                          name="name"
                          type="text"
                          id="name"
                          placeholder="Your Name"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div>
                        <input
                          name="email"
                          type="email"
                          id="email"
                          placeholder="Email Address"
                          pattern="^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z]{2,})$"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <input
                      name="subject"
                      type="text"
                      id="subject"
                      placeholder="Subject"
                      required
                    />
                  </div>
                  <div>
                    <textarea
                      name="comments"
                      cols={40}
                      rows={3}
                      id="comments"
                      placeholder="Message"
                      spellCheck="true"
                      required
                      defaultValue={''}
                    />
                  </div>
                  <input
                    type="submit"
                    className="submit button"
                    id="submit"
                    defaultValue="Submit Message"
                  />
                </form>
              </section>
            </div>
            {/* Contact Form / End */}
          </div>
        </div>
        {/* Container / End */}
      </div>
      <Footer />
    </div>
  );
}

export default ContactPage;
