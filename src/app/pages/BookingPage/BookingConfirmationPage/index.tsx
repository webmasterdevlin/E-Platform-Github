import React from 'react';
import NavigationBar from '../../../components/navigation-bar';
import TitleBar from '../../../components/title-bar';
import Footer from '../../../components/footer';

function BookingConfirmationPage() {
  return (
    <div id="wrapper">
      <NavigationBar />
      <div>
        <TitleBar title={'Booking Processed'} />
        {/* Content================================================== */}
        {/* Container */}
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="booking-confirmation-page">
                <i className="fa fa-check-circle" />
                <h2 className="margin-top-30">Thanks for your booking!</h2>
                <p>You'll receive a confirmation email at mail@example.com</p>
                <a
                  href="dashboard-invoice.html"
                  className="button margin-top-30"
                >
                  View Invoice
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Container / End */}
      </div>
      <Footer />
    </div>
  );
}

export default BookingConfirmationPage;
