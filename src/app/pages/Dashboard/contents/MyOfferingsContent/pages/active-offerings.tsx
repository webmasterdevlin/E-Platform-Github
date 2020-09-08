import React from 'react';
import DashboardTitleBar from '../../../dashboard-title-bar';
import { useSelector } from 'react-redux';
import { IApplicationState } from '../../../../../../store/types';
import { Status } from '../../CreateOfferingsContent/all-steps/schema/create-offerings.value';
import Copyright from '../../../../../components/copyright';
import ListOfOffering from './components/list-of-offering';
import StyledCircularProgress from '../../../../../components/styled-circular-progress';

const ActiveOfferings = () => {
  const { offerings, loading } = useSelector(
    (state: IApplicationState) => state.offeringReducer,
  );

  return (
    <div className="dashboard-content">
      <DashboardTitleBar title={'Active Offerings'} />
      {loading ? (
        <StyledCircularProgress />
      ) : (
        <ListOfOffering
          offerings={offerings.filter(o => o.status === Status.active)}
        />
      )}
      <Copyright />
    </div>
  );
};

export default ActiveOfferings;
