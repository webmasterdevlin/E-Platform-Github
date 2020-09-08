import React from 'react';

type Props = {
  title: string;
};

const DashboardTitleBar: React.FC<Props> = ({ title }) => (
  <div>
    {/* Titlebar */}
    <div id="titlebar">
      <div className="row">
        <div className="col-md-12">
          <h2>{title}</h2>
          {/* Breadcrumbs */}
          <nav id="breadcrumbs">
            <ul>
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Dashboard</a>
              </li>
              <li>{title}</li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
);

export default DashboardTitleBar;
