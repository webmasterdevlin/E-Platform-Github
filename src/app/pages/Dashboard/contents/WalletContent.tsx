import React from 'react';
import DashboardTitleBar from '../dashboard-title-bar';

function WalletContent() {
  return (
    <div className="dashboard-content">
      <DashboardTitleBar title={'Wallet'} />

      {/* Content */}
      <div className="row">
        {/* Item */}
        <div className="col-lg-4 col-md-6">
          <div className="dashboard-stat color-1">
            <div className="dashboard-stat-content wallet-totals">
              <h4>84.50</h4>{' '}
              <span>
                Withdrawable Balance{' '}
                <strong className="wallet-currency">USD</strong>
              </span>
            </div>
            <div className="dashboard-stat-icon">
              <i className="im im-icon-Money-2" />
            </div>
          </div>
        </div>
        {/* Item */}
        <div className="col-lg-4 col-md-6">
          <div className="dashboard-stat color-3">
            <div className="dashboard-stat-content wallet-totals">
              <h4>245.15</h4>{' '}
              <span>
                Total Earnings <strong className="wallet-currency">USD</strong>
              </span>
            </div>
            <div className="dashboard-stat-icon">
              <i className="im im-icon-Money-Bag" />
            </div>
          </div>
        </div>
        {/* Item */}
        <div className="col-lg-4 col-md-6">
          <div className="dashboard-stat color-2">
            <div className="dashboard-stat-content">
              <h4>3</h4> <span>Total Orders</span>
            </div>
            <div className="dashboard-stat-icon">
              <i className="im im-icon-Shopping-Cart" />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        {/* Invoices */}
        <div className="col-lg-6 col-md-12">
          <div className="dashboard-list-box invoices with-icons margin-top-20">
            <h4>
              Earnings{' '}
              <div className="comission-taken">
                Fee: <strong>15%</strong>
              </div>
            </h4>
            <ul>
              <li>
                <i className="list-box-icon sl sl-icon-basket" />
                <strong>Sunway Apartment</strong>
                <ul>
                  <li className="paid">$99.00</li>
                  <li className="unpaid">Fee: $14.50</li>
                  <li className="paid">
                    Net Earning: <span>$84.50</span>
                  </li>
                  <li>Order: #00124</li>
                  <li>Date: 01/02/2019</li>
                </ul>
              </li>
              <li>
                <i className="list-box-icon sl sl-icon-basket" />
                <strong>Sunway Apartment</strong>
                <ul>
                  <li className="paid">$67.00</li>
                  <li className="unpaid">Fee: $10.05</li>
                  <li className="paid">
                    Net Earning: <span>$56.95</span>
                  </li>
                  <li>Order: #00123</li>
                  <li>Date: 22/01/2019</li>
                </ul>
              </li>
              <li>
                <i className="list-box-icon sl sl-icon-basket" />
                <strong>Sunway Apartment</strong>
                <ul>
                  <li className="paid">$122.00</li>
                  <li className="unpaid">Fee: $18.30</li>
                  <li className="paid">
                    Net Earning: <span>$103.70</span>
                  </li>
                  <li>Order: #00122</li>
                  <li>Date: 18/01/2019</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        {/* Invoices */}
        <div className="col-lg-6 col-md-12">
          <div className="dashboard-list-box invoices with-icons margin-top-20">
            <h4>Payout History</h4>
            <ul>
              <li>
                <i className="list-box-icon sl sl-icon-wallet" />
                <strong>$84.50</strong>
                <ul>
                  <li className="unpaid">Unpaid</li>
                  <li>Period: 02/2019</li>
                </ul>
              </li>
              <li>
                <i className="list-box-icon sl sl-icon-wallet" />
                <strong>$189.20</strong>
                <ul>
                  <li className="paid">Paid</li>
                  <li>Period: 01/2019</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WalletContent;
