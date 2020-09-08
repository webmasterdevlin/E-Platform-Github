import React from 'react';
import DashboardTitleBar from '../../../dashboard-title-bar';
import ListOfOffering from './components/list-of-offering';
import Copyright from '../../../../../components/copyright';
import { useSelector } from 'react-redux';
import { IApplicationState } from '../../../../../../store/types';
import { Status } from '../../CreateOfferingsContent/all-steps/schema/create-offerings.value';
import StyledCircularProgress from '../../../../../components/styled-circular-progress';

const OfferingsForReviews = () => {
  const { offerings, loading } = useSelector(
    (state: IApplicationState) => state.offeringReducer,
  );

  return (
    <div className="dashboard-content">
      <DashboardTitleBar title={'Offerings for Reviews'} />
      <div className="row">
        {loading ? (
          <StyledCircularProgress />
        ) : (
          <ListOfOffering
            offerings={offerings.filter(o => o.status === Status.forReview)}
          />
        )}
        <Copyright />
      </div>
    </div>
  );
};

export default OfferingsForReviews;
