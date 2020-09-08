import React from 'react';
import DashboardTopNavigation from '../dashboard-top-navigation';

function InvoiceContent() {
  return (
    <div className="dashboard-content">
      <div className="margin-top-40 padding-top-40">
        {/* Print Button */}
        <a href="javascript:window.print()" className="print-button">
          Print this invoice
        </a>
        {/* Invoice */}
        <div id="invoice">
          {/* Header */}
          <div className="row">
            <div className="col-md-6">
              <div id="logo">
                <img src="../../../../assets/images/logo.png" alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <p id="details">
                <strong>Order:</strong> #00124 <br />
                <strong>Issued:</strong> 20/07/2019 <br />
                Due 7 days from date of issue
              </p>
            </div>
          </div>
          {/* Client & Supplier */}
          <div className="row">
            <div className="col-md-12">
              <h2>Invoice</h2>
            </div>
            <div className="col-md-6">
              <strong className="margin-bottom-5">Supplier</strong>
              <p>
                Listeo Ltd. <br />
                21 St Andrews Lane <br />
                London, CF44 6ZL, UK <br />
              </p>
            </div>
            <div className="col-md-6">
              <strong className="margin-bottom-5">Customer</strong>
              <p>
                John Doe <br />
                36 Edgewater Street <br />
                Melbourne, 2540, Australia <br />
              </p>
            </div>
          </div>
          {/* Invoice */}
          <div className="row">
            <div className="col-md-12">
              <table className="margin-top-20">
                <tbody>
                  <tr>
                    <th>Description</th>
                    <th>Quantity</th>
                    <th>VAT</th>
                    <th>Total</th>
                  </tr>
                  <tr>
                    <td>Extended Plan</td>
                    <td>1</td>
                    <td>$0.00</td>
                    <td>$9.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-md-4 col-md-offset-8">
              <table id="totals">
                <tbody>
                  <tr>
                    <th>Total Due</th>
                    <th>
                      <span>$9.00</span>
                    </th>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* Footer */}
          <div className="row">
            <div className="col-md-12">
              <ul id="footer">
                <li>
                  <span>www.example.com</span>
                </li>
                <li>office@example.com</li>
                <li>(123) 123-456</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InvoiceContent;
